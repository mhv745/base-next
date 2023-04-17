import { data } from '@/src/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import UserLink from './userLink'

export default function Navigation() {
    return (
        <header className="container m-auto flex justify-between items-center py-4 px-4 md:px-0 border-b max-h-fit">
            <Link
                href={process.env.NEXT_PUBLIC_URL}
                alt="Enlace a página de inicio"
                className="block max-w-[100px] md:max-w-[150px]">
                <Image
                    priority
                    src={data.logo.src}
                    alt={`Logotipo de ${data.siteName}`}
                    width={data.logo.width}
                    height={data.logo.height}
                />
            </Link>
            <nav className="righ">
                <ul className="flex gap-4">
                    <li className="h-12">
                        <Link title="Ir al inicio" href={process.env.NEXT_PUBLIC_URL}>
                            home
                        </Link>
                    </li>
                    <li className="h-12">
                        <UserLink />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
