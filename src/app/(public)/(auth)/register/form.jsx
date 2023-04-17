'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '../../../components/ui/inputForm'

export default function RegisterForm() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const params = useSearchParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const signUp = async (data) => {
        setError('')
        setLoading(true)
        try {
            const result = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then((res) => res.json())

            if (!result.ok) {
                throw new Error(result.message)
            }
            await signOut({
                redirect: false,
            })
            const signResult = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            })
            if (signResult.error) {
                throw new Error(
                    signResult.error == 'CredentialsSignin'
                        ? 'Credenciales incorrectas'
                        : signResult.error,
                )
            }

            if (signResult.ok) {
                const callbackUrl = params.get('callbackUrl')
                return router.push(callbackUrl || '/')
            }
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div className="bg-gray-100 max-w-xs mx-auto px-4 py-8">
            <h1 className="text-center">Registro</h1>
            <div className="flex flex-col gap-4 text-center">
                <form onSubmit={handleSubmit(signUp)} className="flex flex-col gap-4">
                    <InputForm
                        label="Nombre"
                        error={errors.name?.message}
                        type="text"
                        placeholder="Nombre"
                        {...register('name', {
                            required: { value: true, message: 'Este campo es obligatorio' },
                            minLength: {
                                value: 3,
                                message: 'Al menos 3 caracteres',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Máximo 20 caracteres',
                            },
                        })}
                    />
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

                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-green-800 text-white rounded py-1">
                        Crear mi cuenta
                    </button>
                    {error && <span className="text-red-500 text-sm mb-0">{error}</span>}
                </form>
                <Link href="/login" title="Ir a la página de registro" replace>
                    ¿Ya tienes cuenta? Iniciar sesión
                </Link>
            </div>
        </div>
    )
}
