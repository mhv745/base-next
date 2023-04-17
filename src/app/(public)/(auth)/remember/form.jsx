'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '../../../components/ui/inputForm'

export default function RememberForm() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
        },
    })

    const remember = async ({ email }) => {
        setError('')
        setLoading(true)
        setMessage('')
        try {
            const { message, ok } = await fetch(`/api/users/remember`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            }).then((res) => res.json())
            if (!ok) {
                throw new Error(message)
            }
            setMessage(message)
            reset()
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-gray-100 max-w-xs mx-auto px-4 py-8">
            <h1 className="text-center">Recordar contraseña</h1>
            <div className="flex flex-col gap-4 text-center">
                <form onSubmit={handleSubmit(remember)} className="flex flex-col gap-4">
                    <InputForm
                        label="Email"
                        error={errors.email?.message}
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: { value: true, message: 'Este campo es obligatorio' },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Formato de email no válido',
                            },
                        })}
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-green-800 text-white rounded py-1">
                        Enviar correo para recuperación
                    </button>
                    {error && <span className="text-red-500 text-sm mb-0">{error}</span>}
                    {message && <span className="text-green-500 text-sm mb-0">{message}</span>}
                </form>
                <Link href="/login" title="Ir a la página de inicio de sesión" replace>
                    ¿Recuerdas tu contraseña? Iniciar sesión
                </Link>
            </div>
        </div>
    )
}
