const SITE_URL = "https://www.dekodecamp.com";

type CanonicalHeadProps = {
  path?: string;
};

export function CanonicalHead({ path = "" }: CanonicalHeadProps) {
  const normalizedPath =
    !path || path === "/"
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;

  return (
    <link rel="canonical" href={`${SITE_URL}${normalizedPath}`} />
  );
}

