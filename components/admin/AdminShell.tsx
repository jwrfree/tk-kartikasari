'use client';

import { useMemo, useState, type ChangeEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

interface AdminShellProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    href: '/admin',
    label: 'Dasbor',
    description: 'Ringkasan cepat modul administrasi.',
  },
  {
    href: '/admin/content',
    label: 'Kelola Konten',
    description: 'Perbarui informasi statis dan halaman utama.',
  },
  {
    href: '/admin/blog',
    label: 'Blog & Kegiatan',
    description: 'Publikasikan berita terbaru dan dokumentasi kegiatan.',
  },
];

export function AdminShell({ title, description, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const activeHref = useMemo(() => {
    return (
      NAVIGATION_ITEMS.find((item) =>
        item.href === '/admin'
          ? pathname === '/admin'
          : pathname?.startsWith(item.href)
      )?.href ?? '/admin'
    );
  }, [pathname]);

  const handleNavigationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value && value !== pathname) {
      router.push(value);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        router.push('/login');
      }
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden w-72 flex-shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">
        <div className="border-b border-slate-200 px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">TK Kartika Sari</p>
          <h1 className="text-xl font-bold text-slate-900">Dasbor Admin</h1>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive =
              item.href === '/admin'
                ? activeHref === item.href
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <p className="text-sm font-semibold">{item.label}</p>
                {item.description && (
                  <p className="text-xs text-slate-500">{item.description}</p>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-slate-200 px-6 py-4 text-sm text-slate-500">
          <p>Kamu masuk sebagai admin.</p>
        </div>
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6">
          <div className="mb-3 md:hidden">
            <label htmlFor="admin-navigation" className="sr-only">
              Navigasi admin
            </label>
            <select
              id="admin-navigation"
              className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={activeHref}
              onChange={handleNavigationChange}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              {description && <p className="text-sm text-slate-600">{description}</p>}
            </div>
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoggingOut ? 'Keluar...' : 'Keluar'}
            </button>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
