import Footer from '../components/footer/footer'
import Navigation from '../components/navigation'

export default function PublicLayout({ children }) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}
