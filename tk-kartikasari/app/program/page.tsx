import { programContent } from "@/content/program";

export default function Page() {
  const { hero, classes, learningMethods, weeklySchedule } = programContent;

  return (
    <div className="container py-8 space-y-10">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{hero.eyebrow}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="text-text-muted">{hero.description}</p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        {classes.map((item) => (
          <article key={item.name} className="card p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-sm text-text-muted">{item.age}</p>
            </div>
            <p className="text-text-muted">{item.description}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-text">
              {item.focus.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="card p-6 space-y-5">
        <h2 className="text-2xl font-semibold">{learningMethods.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {learningMethods.items.map((method) => (
            <div key={method.title} className="rounded-2xl border border-border/60 bg-white p-5">
              <h3 className="text-lg font-semibold text-secondary">{method.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{weeklySchedule.title}</h2>
          <p className="text-sm text-text-muted">{weeklySchedule.description}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {weeklySchedule.items.map((item) => (
            <div key={item.day} className="rounded-2xl border border-border/60 bg-secondary/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.day}</p>
              <p className="mt-1 text-base font-semibold text-text">{item.theme}</p>
              <p className="mt-2 text-sm text-text-muted">{item.highlight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
