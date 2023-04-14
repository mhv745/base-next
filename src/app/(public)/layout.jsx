import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function PublicLayout({ children }) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}
