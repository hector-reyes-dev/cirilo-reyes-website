import { address, brand, contact, geo, hours, mapUrl, pageSeo, services, whatsappPhone } from './home';

const SITE = 'https://ciriloreyes.com/';
const BUSINESS_ID = `${SITE}#negocio`;
const email = contact.items.find((item) => item.label === 'Correo electrónico')?.value;

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AccountingService',
      '@id': BUSINESS_ID,
      name: brand.name,
      url: SITE,
      telephone: whatsappPhone,
      email,
      description: pageSeo.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        postalCode: address.postalCode,
        addressLocality: address.locality,
        addressRegion: address.region,
        addressCountry: address.country
      },
      geo: { '@type': 'GeoCoordinates', latitude: geo.latitude, longitude: geo.longitude },
      hasMap: mapUrl,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.days,
        opens: hours.opens,
        closes: hours.closes
      },
      areaServed: [
        { '@type': 'City', name: address.locality },
        { '@type': 'AdministrativeArea', name: address.region }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.description }
        }))
      }
    },
    {
      '@type': 'Person',
      '@id': `${SITE}#cirilo-reyes`,
      name: brand.shortName,
      jobTitle: 'Contador Público',
      description: 'Pasante en Derecho',
      url: SITE,
      worksFor: { '@id': BUSINESS_ID }
    }
  ]
};
