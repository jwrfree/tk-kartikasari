
import site from '@/data/site.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container py-8 text-center">
        <h3 className="font-semibold text-lg text-text">{site.schoolName}</h3>
        <p className="text-sm text-text-muted max-w-sm mx-auto mt-1">{site.address}</p>
        <div className="mt-6 pt-6 border-t border-border/50 text-xs text-text-muted">
          <p>&copy; {currentYear} {site.schoolName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
