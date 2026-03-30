import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  body: string;
};

export default function LegalDocument({ title, effectiveDate, body }: LegalDocumentProps) {
  return (
    <PageSection padding="relaxed" className="pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-4">
          <Badge tone="secondary" size="sm">
            Dokumen resmi
          </Badge>
          <h1 className="max-w-[14ch] text-balance text-4xl font-semibold text-text sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-sm uppercase tracking-[0.18em] text-text-muted">Terakhir diperbarui: {effectiveDate}</p>
        </div>

        <CardSurface tone="translucent" padding="xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </CardSurface>
      </div>
    </PageSection>
  );
}
