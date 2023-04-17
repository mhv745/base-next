'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '../../../components/ui/inputForm'

export default function LoginForm() {
    const [error, setError] = useState('')

    const router = useRouter()
    const params = useSearchParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: 'miguel@miguel.com',
            password: 'Miguel123',
        },
    })

    const login = async ({ email, password }) => {
        setError('')
        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })
            if (result.error) {
                setError(
                    result.error == 'CredentialsSignin' ? 'Credenciales incorrectas' : result.error,
                )
            }

            if (result.ok) {
                const callbackUrl = params.get('callbackUrl')
                router.push(callbackUrl || '/')
            }
        } catch (error) {
            console.error('error en signin', error)
        }
    }

    return (
        <div className="bg-gray-100 max-w-xs mx-auto px-4 py-8">
            <h1 className="text-center">Iniciar sesión</h1>
            <div className="flex flex-col gap-4 text-center">
                <form onSubmit={handleSubmit(login)} className="flex flex-col gap-4">
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

                    <button type="submit" className="bg-green-800 text-white rounded py-1">
                        Acceder
                    </button>
                    {error && <span className="text-red-500 text-sm mb-0">{error}</span>}
                </form>
                <Link href="/remember" title="Ir a la página de recuperar contraseña" replace>
                    He olvidado la contraseña
                </Link>
                <Link href="/register" title="Ir a la página de registro" replace>
                    ¿No tienes cuenta? Regístrate
                </Link>
            </div>
        </div>
    )
}
