import { data } from '@/utils/data'

export const setMetadata = ({
    title = data.siteName,
    description = data.siteName,
    images = [{ ...data.logo, url: data.logo.src }],
}) => ({
    title,
    description,
    openGraph: {
        title: title,
        description: description,
        url: process.env.NEXT_PUBLIC_URL,
        site_name: data.siteName,
        type: 'website',
        locale: 'es_ES',
        images: images.map((image) => ({
            url: image.url,
            alt: image.alt || description,
            width: image.width,
            height: image.height,
        })),
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        creator: '@mhv745',
        images: images.map((image) => ({
            utl: image.url,
            alt: image.alt || description,
        })),
    },
    applicationName: data.siteName,
})
