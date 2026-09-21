import { Slide } from "../../animation/Slide";

export default async function Job() {
  return (
    <section className="relative isolate mt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 16%, rgba(51, 224, 146, 0.28) 0 1px, transparent 2px), radial-gradient(circle at 19% 58%, rgba(51, 224, 146, 0.12) 0 1px, transparent 2px), radial-gradient(circle at 34% 32%, rgba(51, 224, 146, 0.2) 0 1px, transparent 2px), radial-gradient(circle at 47% 82%, rgba(51, 224, 146, 0.1) 0 1px, transparent 2px), radial-gradient(circle at 63% 21%, rgba(51, 224, 146, 0.3) 0 1px, transparent 2px), radial-gradient(circle at 78% 62%, rgba(51, 224, 146, 0.14) 0 1px, transparent 2px), radial-gradient(circle at 91% 35%, rgba(51, 224, 146, 0.24) 0 1px, transparent 2px), radial-gradient(circle at 86% 91%, rgba(51, 224, 146, 0.1) 0 1px, transparent 2px)",
        }}
      />
      <Slide delay={0.16}>
        <div className="relative z-10 mb-10">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <article className="relative z-10 border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-secondary-bg px-6 sm:px-8 py-7 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b dark:border-zinc-800 border-zinc-200 pb-7">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/50 bg-white/50 text-sm font-semibold dark:text-primary-color text-tertiary-color">
                SE
              </div>
              <div>
                <h3 className="font-incognito text-2xl font-semibold tracking-tight">
                  Freelance Developer
                </h3>
                <p className="mt-1 text-base dark:text-zinc-400 text-zinc-600">
                  Self-Employed · Remote · Contract
                </p>
              </div>
            </div>
            <time className="shrink-0 text-sm font-medium dark:text-zinc-300 text-zinc-600 sm:pt-1">
              April 2025 — Present
            </time>
          </div>

          <div className="pt-8">
            <p className="max-w-5xl text-[1.19rem] leading-relaxed dark:text-zinc-300 text-zinc-700">
              Delivered full-stack systems for restaurant operations, salon booking services, Uk-based hiring management, and school administration as an independent contractor.
            </p>
            <ul className="mt-8 list-[disc] marker:text-[1.5em] space-y-5 pl-5 text-base leading-relaxed dark:text-zinc-300 text-zinc-700 marker:dark:text-primary-color marker:text-tertiary-color">
              <li>
                Built an ordering system for a restaurant, handling menu updates, table orders, kitchen status, and customer billing.
              </li>
              <li>
                Created an online booking portal for a salon, where customers could browse services, choose stylists, check available slots, and book appointments.
              </li>
              <li>
                Worked on an existing Uk-based hiring platform, extending vendor, job, recruiter, and candidate workflows across the product.
              </li>
              <li>
                Shipped a school management system for a US-based education provider covering student records, classes, attendance, fee collection, and exam management.
              </li>
            </ul>
          </div>
        </article>
      </Slide>
    </section>
  );
}
