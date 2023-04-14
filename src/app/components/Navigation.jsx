import { data } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
    return (
        <header className="container m-auto flex justify-between items-center py-4 px-4 md:px-0 border-b max-h-fit">
            <div>
                <Link
                    href={process.env.NEXT_PUBLIC_URL}
                    alt="Enlace a página de inicio"
                    className="block max-w-[100px] md:max-w-[150px]">
                    <Image
                        src={data.logo.src}
                        alt={`Logotipo de ${data.siteName}`}
                        width={data.logo.width}
                        height={data.logo.height}
                    />
                </Link>
            </div>
            <nav className="righ">
                <ul className="flex gap-4">
                    <li>
                        <Link href={process.env.NEXT_PUBLIC_URL}>home</Link>
                    </li>
                    <li>
                        <Link href="https://hernandezmiguel.es">Miguel Hernánadez</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
