'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function UserLink() {
    const { data: session } = useSession()

    const logout = async () => {
        await signOut({
            redirect: true,
            callbackUrl: process.env.NEXT_PUBLIC_URL,
        })
    }

    return session?.user?.id ? (
        <div className="flex flex-col text-center">
            <Link title="Ir al perfil" className="block" href="/me">
                {session.user.name || session.user.email}
            </Link>
            <button
                aria-label="Cerrar la sesión de usuario"
                onClick={logout}
                className="block text-sm"
                href="/auth/logout">
                salir
            </button>
        </div>
    ) : (
        <Link href="/login">login</Link>
    )
}
