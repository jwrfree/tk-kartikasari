const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-15';
const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET,
  'Missing NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET environment variable.'
);
const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID,
  'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID environment variable.'
);

export { apiVersion, dataset, projectId };

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (!value) {
    throw new Error(errorMessage);
  }

  return value;
}
