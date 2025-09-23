import type { FC } from "react";

type JsonLdProps = {
  data: string | Record<string, unknown>;
};

const JsonLd: FC<JsonLdProps> = ({ data }) => {
  const json = typeof data === "string" ? data : JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

export default JsonLd;
