import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import type { ProjectDetailItem, ProjectFeature, ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { projects } from "@/app/data/content";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve/v1778141099/ChatGPT_Image_May_7_2026_01_34_35_PM_xtmitf.png";

function getProject(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug);
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t dark:border-zinc-800 border-zinc-200 py-10">
      <h2 className="font-incognito font-bold tracking-tight dark:text-zinc-100 text-zinc-800 sm:text-3xl text-2xl mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DetailGrid({ items }: { items: ProjectDetailItem[] }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-md border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 p-5"
        >
          <h3 className="font-incognito font-semibold dark:text-zinc-100 text-zinc-800 text-xl mb-2">
            {item.title}
          </h3>
          <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}

function SquareBulletDetailList({ items }: { items: ProjectDetailItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="dark:text-zinc-400 text-zinc-600 leading-relaxed"
        >
          <span aria-hidden="true" className="dark:text-zinc-300 text-zinc-700">
            ▪
          </span>{" "}
          <strong className="dark:text-zinc-200 text-zinc-800">
            {item.title}
          </strong>
          : {item.body}
        </li>
      ))}
    </ul>
  );
}

function FeatureList({ items }: { items: ProjectFeature[] }) {
  return (
    <ul className="space-y-4">
      {items.map((feature) => (
        <li
          key={feature.title}
          className="dark:text-zinc-400 text-zinc-600 leading-relaxed"
        >
          <span aria-hidden="true" className="dark:text-zinc-300 text-zinc-700">
            ▪
          </span>{" "}
          <strong className="dark:text-zinc-200 text-zinc-800">
            {feature.title}
          </strong>
          : {feature.description}
        </li>
      ))}
    </ul>
  );
}

function OrderedStory({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border dark:border-zinc-800 border-zinc-200 dark:text-zinc-300 text-zinc-700">
            {index + 1}
          </span>
          <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed pt-1">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

function DataFlow({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-md border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 p-4"
        >
          <span className="font-incognito dark:text-zinc-500 text-zinc-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.project);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://rhittik.vercel.app/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image ?? fallbackImage,
      url: `https://rhittik.vercel.app/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const project = getProject(params.project);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-6">
      <Slide>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-5 flex-wrap mb-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest dark:text-zinc-500 text-zinc-500 mb-3">
                {project.caseStudy?.type ?? "Project Case Study"}
              </p>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4">
                {project.name}
              </h1>
              <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed text-lg">
                {project.caseStudy?.hero ?? project.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mb-8">
            <div className="rounded-md border dark:border-zinc-800 border-zinc-200 p-4">
              <p className="text-xs uppercase tracking-widest dark:text-zinc-500 text-zinc-500 mb-1">
                Type
              </p>
              <p className="dark:text-zinc-300 text-zinc-700">
                {project.caseStudy?.type ?? "Web App"}
              </p>
            </div>
            <div className="rounded-md border dark:border-zinc-800 border-zinc-200 p-4">
              <p className="text-xs uppercase tracking-widest dark:text-zinc-500 text-zinc-500 mb-1">
                Timeline
              </p>
              <p className="dark:text-zinc-300 text-zinc-700">
                {project.caseStudy?.timeline ?? "Independent build"}
              </p>
            </div>
            <div className="rounded-md border dark:border-zinc-800 border-zinc-200 p-4">
              <p className="text-xs uppercase tracking-widest dark:text-zinc-500 text-zinc-500 mb-1">
                Focus
              </p>
              <p className="dark:text-zinc-300 text-zinc-700">
                Product engineering
              </p>
            </div>
          </div>

          <figure className="relative w-full h-40 pt-[52.5%] mb-10">
            <Image
              className="rounded-lg border dark:border-zinc-800 border-zinc-100 object-cover"
              fill
              src={project.coverImage?.image ?? fallbackImage}
              alt={project.coverImage?.alt ?? project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </figure>

          {project.caseStudy ? (
            <>
              <Section title="Overview">
                <div className="space-y-5">
                  {project.caseStudy.overview.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="dark:text-zinc-400 text-zinc-600 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Section>

              {project.caseStudy.simpleDetails ? (
                <>
                  <Section title="What it does">
                    <DetailGrid items={project.caseStudy.simpleDetails} />
                  </Section>

                  <Section title="Built with">
                    <SquareBulletDetailList items={project.caseStudy.techStack} />
                  </Section>

                  {project.caseStudy.currentStatus && (
                    <Section title="Current status">
                      <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                        {project.caseStudy.currentStatus}
                      </p>
                    </Section>
                  )}
                </>
              ) : (
                <>
                  <Section title="Technical Details">
                    <SquareBulletDetailList items={project.caseStudy.techStack} />
                  </Section>

                  <Section title="Data Flow">
                    <DataFlow items={project.caseStudy.dataFlow} />
                  </Section>

                  <Section title="Features & Functionality">
                    <FeatureList items={project.caseStudy.features} />
                  </Section>

                  <Section title="Performance Optimizations">
                    <DetailGrid items={project.caseStudy.performance} />
                  </Section>

                  <Section title="Development Process">
                    <OrderedStory items={project.caseStudy.developmentProcess} />
                  </Section>

                  <Section title="Challenges">
                    <DetailGrid items={project.caseStudy.challenges} />
                  </Section>

                  <Section title="Deployment">
                    <SquareBulletDetailList items={project.caseStudy.deployment} />
                  </Section>

                  <Section title="Future Improvements">
                    <DetailGrid items={project.caseStudy.futureImprovements} />
                  </Section>

                  <Section title="Lessons Learned">
                    <SquareBulletDetailList
                      items={project.caseStudy.lessonsLearned}
                    />
                  </Section>

                  <Section title="Final Thoughts">
                    <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                      {project.caseStudy.finalThoughts}
                    </p>
                  </Section>
                </>
              )}
            </>
          ) : (
            <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <PortableText
                value={project.description}
                components={CustomPortableText}
              />
            </div>
          )}
        </div>
      </Slide>
    </main>
  );
}
