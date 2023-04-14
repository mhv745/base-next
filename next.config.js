/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com', 'www.w3.org'],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
