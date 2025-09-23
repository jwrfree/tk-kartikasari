import site from '@/data/site.json'

export function preschoolSchema(lat?: number, lng?: number) {
  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': 'Preschool',
    name: site.schoolName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: 'Bantarsari',
      addressRegion: 'Jawa Tengah',
      postalCode: '53258',
      addressCountry: 'ID',
    },
    telephone: site.whatsapp,
    url: 'https://example.com',
  }
  if (lat && lng) jsonLd.geo = { '@type': 'GeoCoordinates', latitude: lat, longitude: lng }
  return JSON.stringify(jsonLd)
}
