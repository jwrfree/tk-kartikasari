import Link from 'next/link';
import { useSiteData } from '@/app/providers/SiteDataProvider';

const legalLinks = [
  { name: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
  { name: 'Syarat dan Ketentuan', href: '/syarat-dan-ketentuan' },
  { name: 'Disklaimer', href: '/disklaimer' },
];

export default function Footer() {
  const { siteSettings, navigation } = useSiteData();

  const exploreLinks = navigation.flatMap((item) => {
    if ('children' in item && item.children) {
      return item.children.map((child) => ({ name: child.label, href: child.href }));
    }

    if ('href' in item && item.href) {
      return [{ name: item.label, href: item.href }];
    }

    return [];
  });

  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">{siteSettings.schoolName}</h3>
            <p className="text-sm leading-6 text-gray-800">
              Membentuk generasi cerdas, ceria, dan berakhlak mulia sejak dini.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Jelajahi
                </h3>
                <ul className="mt-6 space-y-4">
                  {exploreLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-700 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
           
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-800">
            &copy; {new Date().getFullYear()} {siteSettings.schoolName}. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
