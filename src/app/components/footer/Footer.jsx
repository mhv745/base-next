import Link from 'next/link'

const textClass = 'text-xs mb-0'

export default function Footer() {
    return (
        <footer>
            <div className="container m-auto flex flex-col md:flex-row items-center md:justify-between pr-10 xl:pr-0">
                <p className={textClass}>
                    © {new Date().getFullYear()} - Todos los derechos reservados
                </p>
                <ul className="ml-0 flex gap-2 text-xs">
                    <li className={textClass}>
                        <Link
                            title="Enlace al aviso legal"
                            className={`block ${textClass} py-4`}
                            href="/politicas/legal">
                            legal
                        </Link>
                    </li>
                    <li className={textClass}>
                        <Link
                            title="Enlace a políticas de privacidad"
                            className={`block ${textClass} py-4`}
                            href="/politicas/privacidad">
                            privacidad
                        </Link>
                    </li>
                    <li className={textClass}>
                        <Link
                            title="Enlace a políticas de cookies"
                            className={`block ${textClass} py-4`}
                            href="/politicas/cookies">
                            cookies
                        </Link>
                    </li>
                </ul>
                <p className={`text-xs whitespace-nowrap mb-0`}>
                    <span>powered by </span>
                    <Link
                        target="_blank"
                        rel="follow"
                        className={`${textClass} py-4`}
                        title="Sitio desarrollado por Miguel Hernández Von Hartmann. Visitar su web"
                        href="https://hernandezmiguel.es">
                        Miguel Hernandez
                    </Link>
                </p>
            </div>
        </footer>
    )
}
