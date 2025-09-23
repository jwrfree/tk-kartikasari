import CTAButton from "@/components/CTAButton";
import PpdbForm from "@/components/PpdbForm";
import { ppdbContent } from "@/content/ppdb";
import site from "@/data/site.json";

export default function Page() {
  const { hero, steps, form, faqs } = ppdbContent;

  return (
    <div className="container py-8 space-y-8">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          {hero.eyebrow}
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="text-text-muted">{hero.description}</p>
      </header>

      <section className="card p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{steps.title}</h2>
          <p className="text-sm text-text-muted">{steps.description}</p>
        </div>
        <ol className="list-decimal space-y-2 pl-5 text-text">
          {steps.items.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="pt-2">
          <CTAButton
            label={steps.cta.label}
            message={steps.cta.message}
          />
        </div>
      </section>

      <section className="card p-6 space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{form.title}</h2>
          <p className="text-sm text-text-muted">{form.description}</p>
        </div>
        <PpdbForm />
        <p className="text-xs text-text-muted">{form.disclaimer}</p>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{faqs.title}</h2>
        <div className="space-y-3">
          {faqs.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border/70 bg-white p-4"
            >
              <summary className="cursor-pointer text-base font-semibold text-text">
                {item.question}
              </summary>
              <p className="mt-2 text-sm text-text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-dashed border-secondary/60 bg-secondary/10 p-6 text-sm text-secondary">
        <p>
          Alamat sekolah: {site.address}. Kami buka hari {site.openingHours}. Silakan hubungi {site.headmaster} melalui WhatsApp {site.whatsapp} untuk menjadwalkan kunjungan.
        </p>
      </footer>
    </div>
  );
}
