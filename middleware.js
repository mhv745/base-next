import { withAuth } from 'next-auth/middleware'

const ADMIN_ROUTES = ['/admin']
const USER_ROUTES = ['/me']

const ROLES = {
    superadmin: ['superadmin'],
    admin: ['admin', 'superadmin'],
    user: ['user', 'admin', 'superadmin'],
}

const getMatcher = (routes) => [...routes.map((route) => `${route}/:path*`)]
const hasSome = (routes, url) => routes.some((route) => url.startsWith(route))

export default withAuth({
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
})

const routesToMatch = [...ADMIN_ROUTES, ...USER_ROUTES]

export const config = { matcher: [...getMatcher(routesToMatch)] }
