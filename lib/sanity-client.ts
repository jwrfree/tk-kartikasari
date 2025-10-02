import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "@/sanity/env";

type SanityQueryParams = Record<string, unknown>;

const parsedTimeout = Number.parseInt(
  process.env.SANITY_FETCH_TIMEOUT_MS ?? "",
  10,
);
const DEFAULT_FETCH_TIMEOUT_MS = Number.isNaN(parsedTimeout)
  ? 1000
  : Math.max(0, parsedTimeout);

const NETWORK_ERROR_CODES = new Set([
  "ECONNRESET",
  "ENOTFOUND",
  "EAI_AGAIN",
  "ECONNREFUSED",
  "ETIMEDOUT",
  "EHOSTUNREACH",
  "ENETUNREACH",
]);

let skipSanityRequests = false;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});

export async function fetchSanityData<T>(
  query: string,
  params: SanityQueryParams = {},
  timeoutMs: number = DEFAULT_FETCH_TIMEOUT_MS,
): Promise<T> {
  if (skipSanityRequests) {
    throw new Error(
      "Sanity fetch skipped after previous network failure.",
    );
  }

  const controller = new AbortController();
  const fetchPromise = sanityClient.fetch<T>(query, params, {
    signal: controller.signal,
  });

  const timedFetch =
    timeoutMs <= 0
      ? fetchPromise
      : new Promise<T>((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            controller.abort();
            reject(
              new Error(
                `Sanity request timed out after ${timeoutMs}ms`,
              ),
            );
          }, timeoutMs);

          fetchPromise
            .then((result) => {
              clearTimeout(timeoutId);
              resolve(result);
            })
            .catch((error) => {
              clearTimeout(timeoutId);
              reject(error);
            });
        });

  try {
    const result = await timedFetch;
    skipSanityRequests = false;
    return result;
  } catch (error) {
    if (isNetworkError(error)) {
      skipSanityRequests = true;
    }

    throw error;
  }
}

function isNetworkError(error: unknown): error is NodeJS.ErrnoException {
  if (!error || typeof error !== "object") {
    return false;
  }

  if (error instanceof Error) {
    if (error.name === "AbortError") {
      return true;
    }

    const message = error.message?.toLowerCase?.() ?? "";
    if (
      message.includes("timed out") ||
      message.includes("network") ||
      message.includes("fetch failed")
    ) {
      return true;
    }
  }

  const code = (error as NodeJS.ErrnoException).code;
  return Boolean(code && NETWORK_ERROR_CODES.has(code));
}
