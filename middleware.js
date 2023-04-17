import { withAuth } from 'next-auth/middleware'

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            console.log('[MIDDLEWARE]: authorized callback runs...', token)

            if (req.nextUrl.pathname === '/admin') {
                return token?.user?.isAdmin
            }
            return !!token
        },
    },
})

export const config = { matcher: ['/admin', '/me'] }
