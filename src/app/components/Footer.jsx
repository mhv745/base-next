import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="container m-auto flex justify-between">
                <p>© {new Date().getFullYear()} - Todos los derechos reservados</p>
                <p>
                    powered by{' '}
                    <Link
                        target="_blank"
                        rel="follow"
                        title="Sitio desarrollado por Miguel Hernández Von Hartmann. Visitar su web"
                        href="https://hernandezmiguel.es">
                        Miguel Hernandez
                    </Link>
                </p>
            </div>
        </footer>
    )
}
