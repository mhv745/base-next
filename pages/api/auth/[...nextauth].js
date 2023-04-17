import { login } from '@/src/lib/api/users'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'admin@ejemplo.com' },
                password: { label: 'Contraseña', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials
                    const user = await login(email, password)
                    return user
                } catch (error) {
                    console.error('Error autorizando', error)
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            }
            return token
        },
        async session({ session, token }) {
            session.user = token
            return session
        },
    },
}

export default NextAuth(authOptions)
