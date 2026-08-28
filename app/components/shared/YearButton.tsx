import { MouseEventHandler } from "react";

/**
 * A button component for selecting a year, with visual indication of the currently selected year.
 *
 * @param props - Component props
 * @param props.year - The year this button represents
 * @param props.currentYear - The currently selected year (used to determine if this button is active)
 * @param props.onClick - Optional click handler for when the button is clicked
 * @returns A styled button that highlights when it matches the current year
 */
export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-secondary-color bg-secondary-color dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
          : "dark:bg-primary-bg bg-zinc-50 dark:text-white text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
