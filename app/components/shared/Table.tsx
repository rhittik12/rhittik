import { TableValueProps } from "@/types";

/**
 * Renders a styled HTML table from structured table data.
 *
 * @param props - Component props
 * @param props.value - Object containing table data
 * @param props.value.caption - Optional caption for the table
 * @param props.value.table - Table data with rows and cells
 * @returns A styled HTML table element with heading and body rows, or an error message if data is invalid
 */
export default function Table({ value }: { value: TableValueProps }) {
  const { caption, table } = value;
  const tableContent = table?.rows;

  if (!tableContent || tableContent.length < 1) {
    return <p>Table Data Missing</p>;
  }

  const [tableHeading, ...tableBody] = tableContent.map((t) => t.cells);

  if (!tableHeading || tableBody.length < 1) {
    return <p>Table must have at least one cell.</p>;
  }

  return (
    <table className="border dark:border-zinc-800 border-zinc-200 w-full text-base my-4">
      {caption && (
        <caption className="text-lg font-incognito font-medium my-1">
          {caption}
        </caption>
      )}
      <thead className="bg-zinc-50 dark:bg-[#141414] border-b dark:border-zinc-800 border-zinc-200 text-left">
        <tr className="divide-x divide-zinc-200 dark:divide-zinc-800">
          {tableHeading.map((heading) => (
            <th
              key={heading}
              scope="col"
              className="font-medium text-lg font-incognito px-3 py-2"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row, index) => (
          <tr
            key={index}
            className="divide-x divide-zinc-200 dark:divide-zinc-800 border dark:border-zinc-800 border-zinc-200"
          >
            {row.map((cell) => (
              <td key={cell} className="px-3 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
