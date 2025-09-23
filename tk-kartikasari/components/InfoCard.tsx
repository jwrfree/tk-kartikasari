export default function InfoCard({ title, children, actionLabel, actionHref }: { title: string; children: React.ReactNode; actionLabel?: string; actionHref?: string }) {
  return (
    <div className="card p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-text-muted mb-3">{children}</div>
      {actionHref && (
        <a className="btn" href={actionHref} target="_blank">{actionLabel}</a>
      )}
    </div>
  )
}
