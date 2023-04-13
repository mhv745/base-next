import './globals.css'

export const metadata = {
    title: 'Web Base',
    description: 'Comienza el desarrollo!!!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}
