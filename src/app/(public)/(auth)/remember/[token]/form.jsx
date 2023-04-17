'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '../../../../components/ui/inputForm'

export default function ResetPasswordForm({ user }) {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: '',
            repassword: '',
        },
    })

    const remember = async ({ password }) => {
        setError('')
        setLoading(true)
        setMessage('')
        try {
            const { message, ok } = await fetch(`/api/users/remember`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password, user }),
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
            <h1 className="text-center">Nueva contraseña</h1>
            <div className="flex flex-col gap-4 text-center">
                <form onSubmit={handleSubmit(remember)} className="flex flex-col gap-4">
                    <InputForm
                        label="Contraseña"
                        error={errors.password?.message}
                        type="password"
                        placeholder="Contraseña"
                        {...register('password', {
                            required: { value: true, message: 'Este campo es obligatorio' },
                            minLength: {
                                value: 6,
                                message: 'La contraseña debe tener al menos 6 caracteres',
                            },
                            maxLength: {
                                value: 20,
                                message: 'La contraseña no puede tener más de 20 caracteres',
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{}[\]\\|;:'",<.>/?])(?=.*[^\s]).{6,}$/,
                                message:
                                    'Al menos mayúscula, minúscula, número, carácter especial y sin espacios',
                            },
                        })}
                    />
                    <InputForm
                        label="Repetir contraseña"
                        error={errors.repassword?.message}
                        type="password"
                        placeholder="Repetir contraseña"
                        {...register('repassword', {
                            required: { value: true, message: 'Este campo es obligatorio' },
                            validate: (value) => {
                                if (value !== watch('password')) {
                                    return 'Las contraseñas no coinciden'
                                }
                            },
                        })}
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-green-800 text-white rounded py-1">
                        Cambiar contraseña
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
