import CTAButton from "@/components/CTAButton";
import MapEmbed from "@/components/MapEmbed";
import { kontakContent } from "@/content/kontak";

export default function Page() {
  const { hero, info, cta, visit, map } = kontakContent;

  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          {hero.eyebrow}
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="max-w-2xl text-text-muted">{hero.description}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <div className="card p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Informasi Sekolah</h2>
          <ul className="space-y-3 text-sm text-text">
            {info.map((item) => (
              <li key={item.label}>
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-base font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <CTAButton
              label={cta.label}
              message={cta.message}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
        <div className="card p-6 space-y-3 bg-secondary/5 text-sm text-text-muted">
          <h3 className="text-lg font-semibold text-secondary">{visit.title}</h3>
          {visit.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">{map.title}</h2>
        <p className="max-w-2xl text-sm text-text-muted">{map.description}</p>
        <MapEmbed />
      </section>
    </div>
  );
}
