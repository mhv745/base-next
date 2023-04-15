import 'react-toastify/dist/ReactToastify.css'
import '../../styles/styles.scss'
import Providers from './components/Providers'
import Analytics from './components/footer/Analytics'
import Cookies from './components/footer/Cookies'
import { setMetadata } from './metadatas'

const AUTHOR = 'Miguel Hernández Von Hartmann'

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
    themeColor: '#FFFFFF',
    authors: [{ name: AUTHOR, url: 'https://hernandezmiguel.es' }],
    publisher: AUTHOR,
    creator: AUTHOR,
    manifest: `${process.env.NEXT_PUBLIC_URL}/manifest.json`,
    generator: AUTHOR,
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}`,
    },
    robots: {
        index: true,
        follow: true,
    },
    ...setMetadata({ description: 'Comienza el desarrollo!!!' }),
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head></head>
            <body>
                <Providers>
                    <>{children}</>
                    <Cookies />
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}
