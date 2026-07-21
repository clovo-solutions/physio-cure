import { business } from '@/lib/business'

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://physiocure.com.cy/#medicalbusiness',
        name: business.name,
        description: business.description,
        url: 'https://physiocure.com.cy',
        telephone: business.phone,
        email: business.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          addressCountry: business.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: business.coordinates.lat,
          longitude: business.coordinates.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        image: 'https://physiocure.com.cy/og-image.jpg',
        priceRange: '€€',
      },
      {
        '@type': 'Physician',
        '@id': 'https://physiocure.com.cy/#physician',
        name: business.name,
        medicalSpecialty: 'Physiotherapy',
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          addressCountry: business.address.country,
        },
        telephone: business.phone,
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://physiocure.com.cy/#localbusiness',
        name: business.name,
        description: business.description,
        url: 'https://physiocure.com.cy',
        telephone: business.phone,
        email: business.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          addressCountry: business.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: business.coordinates.lat,
          longitude: business.coordinates.lng,
        },
        openingHours: ['Mo-Fr 09:00-19:00'],
        image: 'https://physiocure.com.cy/og-image.jpg',
      },
    ],
  }
}
