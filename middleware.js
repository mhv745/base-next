import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const NOT_LOGGED_IN_ROUTES = ['/login', '/register', '/remember']
const ADMIN_ROUTES = ['/admin']
const USER_ROUTES = ['/me']

const ROLES = {
    superadmin: ['superadmin'],
    admin: ['admin', 'superadmin'],
    user: ['user', 'admin', 'superadmin'],
}

const getMatcher = (routes) => [...routes.map((route) => `${route}/:path*`)]
const hasSome = (routes, url) => routes.some((route) => url.startsWith(route))

export default withAuth(
    function middleware(req) {
        const token = req.nextauth?.token
        if (hasSome(NOT_LOGGED_IN_ROUTES, req.nextUrl.pathname) && token) {
            const isValidToken = token.exp > new Date().getTime() / 1000

            if (isValidToken) {
                // Redirect to home page if user is already logged in
                return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_URL))
            }
        }
    },
    {
        callbacks: {
            async authorized({ req, token }) {
                if (hasSome(ADMIN_ROUTES, req.nextUrl.pathname)) {
                    return ROLES.admin.includes(token?.role)
                } else if (hasSome(USER_ROUTES, req.nextUrl.pathname)) {
                    return ROLES.user.includes(token?.role)
                }
                return true
            },
        },
    },
)

const routesToMatch = [...ADMIN_ROUTES, ...USER_ROUTES]

export const config = { matcher: [...getMatcher(routesToMatch)] }
