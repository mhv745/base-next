import Link from 'next/link'
import Form from './form'

export default async function RememberPage({ params }) {
    const token = params.token
    const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/remember?token=${token}`, {
        cache: 'no-store',
    }).then((res) => res.json())

    return (
        <div className="container m-auto">
            {result.ok ? (
                <Form user={result.user} />
            ) : (
                <div className="text-center">
                    <h2 className=" font-normal mb-8">{result.message}</h2>
                    <Link className="bg-green-800 text-white rounded py-2 px-4" href="/remember">
                        Volver a recuperar contraseña
                    </Link>
                </div>
            )}
        </div>
    )
}
