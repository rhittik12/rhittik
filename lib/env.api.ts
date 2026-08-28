export const mode = process.env.NODE_ENV;


export const umamiSiteId = checkValue(
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  "NEXT_PUBLIC_UMAMI_WEBSITE_ID",
  "https://umami.is"
);

/**
 * Validates that an environment variable is defined and returns its value.
 *
 * @template T - The type of the environment variable value
 * @param value - The environment variable value to validate
 * @param errorMsg - The error message to display if the value is undefined
 * @param url - Optional URL to documentation for generating the required API key
 * @returns The validated environment variable value
 * @throws {Error} If the value is undefined
 */
function checkValue<T>(
  value: T | undefined,
  errorMsg: string,
  url?: string
): T {
  if (value === undefined) {
    throw new Error(
      `Missing Environment Variable: ${errorMsg}\n\nVist ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}
