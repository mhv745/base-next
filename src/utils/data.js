const SITE_NAME = 'Web Base'

export const data = {
    siteName: SITE_NAME,
    logo: {
        src: `/img/logo.png`,
        alt: SITE_NAME,
        width: 512,
        height: 214,
    },
    analytics: '',
    email: process.env.NEXT_PUBLIC_EMAIL,
}

export const empresa = {
    nombre: data.siteName.toUpperCase(),
    cif: 'X-12345678',
    direccion: 'C/',
    email: 'example@example.com',
}
