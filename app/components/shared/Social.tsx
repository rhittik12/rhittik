import { socialLinks } from "../../data/social";
import RefLink from "./RefLink";

/**
 * Displays a list of social media or publication links with icons.
 *
 * @param props - Component props
 * @param props.type - The type of links to display ("social" or "publication")
 * @returns A list of links filtered by the specified type with icons and names
 */
export default function Social({ type }: { type: "social" | "publication" }) {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <RefLink
              href={value.url}
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
            >
              <value.icon
                className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />{" "}
              &nbsp;
              {value.name}
            </RefLink>
          </li>
        ))}
    </ul>
  );
}
