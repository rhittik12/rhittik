import ContributionGraph from "./ContributionGraph";
import { Slide } from "@/app/animation/Slide";

/**
 * A wrapper component that displays the GitHub contribution graph section with a heading.
 *
 * @returns A section component with animated heading and contribution graph
 */
export default function GithubCalendarComponent() {
  return (
    <section>
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}
