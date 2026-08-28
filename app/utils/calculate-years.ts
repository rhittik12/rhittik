/**
 * Generates an array of years from the initial year a user joins GitHub to the current year.
 *
 * @param joinYear - The year the user joined GitHub
 * @returns An array of years in descending order (most recent first)
 *
 * @example
 * ```typescript
 * getGitHubYears(2020) // Returns [2026, 2025, 2024, 2023, 2022, 2021, 2020]
 * ```
 */
export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}
