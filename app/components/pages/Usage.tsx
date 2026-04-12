import { usageSections } from "@/app/data/content";

export default async function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <div className="space-y-8">
        {usageSections.map((section) => (
          <section key={section.title}>
            <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 dark:text-zinc-400 text-zinc-600">
              {section.items.map((item) => (
                <li key={item.name}>
                  <strong className="dark:text-zinc-200 text-zinc-800">
                    {item.name}
                  </strong>{" "}
                  - {item.detail}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
