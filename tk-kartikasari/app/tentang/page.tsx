import { tentangContent } from "@/content/tentang";

export default function Page() {
  const { hero, greeting, profile, visionMission } = tentangContent;

  return (
    <div className="container py-8 space-y-8">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{hero.eyebrow}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="text-text-muted">{hero.description}</p>
      </header>

      <section id="sambutan" className="card p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{greeting.title}</h2>
          <p className="text-sm text-text-muted">{greeting.subtitle}</p>
        </div>
        <p className="leading-relaxed text-text">{greeting.message}</p>
      </section>

      <section id="profil" className="grid gap-4 md:grid-cols-[1.2fr,0.8fr] md:items-start">
        <div className="card p-6 space-y-4">
          <h2 className="text-2xl font-semibold">{profile.title}</h2>
          <p className="text-text-muted">{profile.description}</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profile.items.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-text">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6 space-y-3 bg-secondary/5">
          <h3 className="text-lg font-semibold text-secondary">{profile.approachTitle}</h3>
          {profile.approachParagraphs.map((text) => (
            <p key={text} className="text-sm text-text-muted">
              {text}
            </p>
          ))}
        </div>
      </section>

      <section id="visi-misi" className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">{visionMission.visionTitle}</h2>
          <p className="mt-3 text-text-muted">{visionMission.vision}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">{visionMission.missionTitle}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
            {visionMission.missionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
