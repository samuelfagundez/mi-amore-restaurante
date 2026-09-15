// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 15 de septiembre de 2026,
// más los enlaces de redes sociales aportados directamente por el cliente
// (ver /data/contacto.json).

export const content = {
  name: 'Mi amore - Restaurante',
  shortName: 'Mi amore',
  tagline: 'Restaurante mediterráneo frente al Turia, en València',
  description:
    'Mi amore es un restaurante de cocina mediterránea situado en pleno paseo de l\'Albereda, junto a los jardines del Turia, en València. Su carta reúne arroces, carnes y pescado del día en un ambiente cuidado y acogedor, con terraza para disfrutar de una comida o una cena tranquila al aire libre. Admite reservas, ofrece opciones vegetarianas y cuenta con una selecta carta de vinos y cócteles, todo con un trato cercano que sus clientes destacan una y otra vez.',
  metaDescription:
    'Restaurante mediterráneo en el paseo de l\'Albereda, València. Arroces, carnes y pescado fresco, terraza y reservas. Valorado con 4,9★ en Google.',
  keywords: [
    'Mi amore Restaurante',
    'Camins al Grau',
    'València',
    'restaurante mediterráneo',
    'arroces Valencia',
    'restaurante paseo Albereda',
    'terraza Valencia',
    'restaurante con reservas',
  ],
  priceRange: '30 € - 40 €',
  priceRangeDisplay: '30 € – 40 € por persona',
  cuisine: 'Cocina mediterránea',

  rating: { value: 4.9, count: 1104, countDisplay: '1.104 reseñas' },
  highlights: [
    'Arroces, carnes y pescado del día preparados con producto fresco.',
    'Atención cercana y muy bien valorada por la clientela, con un 4,9★ en Google.',
    'Terraza junto a los jardines del Turia, ideal para comer o cenar al aire libre.',
    'Admite reservas, ofrece opciones vegetarianas y también servicio para llevar.',
  ],

  address: {
    streetAddress: "Pg. de l'Albereda, 47B",
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46023',
    addressCountry: 'ES',
    full: "Pg. de l'Albereda, 47B, Camins al Grau, 46023 València, Valencia",
  },
  geo: { lat: 39.4577652, lng: -0.3496578 },

  phone: '+34 722 28 12 05',
  phoneDisplay: '722 28 12 05',
  whatsappNumber: '34722281205',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/mi-amore-restaurante/',

  social: {
    instagram: 'https://www.instagram.com/miamore.valencia',
    facebook: '',
    tiktok: 'https://www.tiktok.com/@miamore.valencia',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: '10:00 – 24:00' },
    { day: 'Martes', hours: '10:00 – 24:00' },
    { day: 'Miércoles', hours: '10:00 – 24:00' },
    { day: 'Jueves', hours: '10:00 – 24:00' },
    { day: 'Viernes', hours: '10:00 – 24:00' },
    { day: 'Sábado', hours: '10:00 – 24:00' },
    { day: 'Domingo', hours: '10:00 – 24:00' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '23:59',
    },
  ],

  gallery: [
    {
      src: '/gallery/mi-amore-sala-interior.jpg',
      alt: 'Sala interior de Mi amore - Restaurante, en el paseo de l\'Albereda, València',
    },
    {
      src: '/gallery/mi-amore-comedor-terraza.jpg',
      alt: 'Comedor y terraza de Mi amore - Restaurante frente a los jardines del Turia',
    },
    {
      src: '/gallery/mi-amore-paella.jpg',
      alt: 'Arroz de la carta de Mi amore - Restaurante, cocina mediterránea en Valencia',
    },
    {
      src: '/gallery/mi-amore-marisco.jpg',
      alt: 'Plato de marisco de Mi amore - Restaurante',
    },
    {
      src: '/gallery/mi-amore-plato-mediterraneo.jpg',
      alt: 'Plato de la carta mediterránea de Mi amore - Restaurante',
    },
    {
      src: '/gallery/mi-amore-cocteles.jpg',
      alt: 'Cóctel de la carta de Mi amore - Restaurante',
    },
    {
      src: '/gallery/mi-amore-postre-brownie.jpg',
      alt: 'Postre de la carta de Mi amore - Restaurante',
    },
    {
      src: '/gallery/mi-amore-terraza-albereda.jpg',
      alt: 'Terraza de Mi amore - Restaurante en el paseo de l\'Albereda',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent("Mi amore - Restaurante, Pg. de l'Albereda 47B, 46023 València") +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=13593060649125475034&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Mi amore - Restaurante y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Mi amore - Restaurante y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
