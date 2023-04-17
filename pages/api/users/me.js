import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handleRequest(req, res) {
    switch (req.method) {
        case 'GET': {
            try {
                const session = await getServerSession(req, res, authOptions)

                return res
                    .status(200)
                    .json({ session, autenticated: Boolean(session && session?.id) })
            } catch (error) {
                console.error(error.message)
                return res
                    .status(404)
                    .json({ session: undefined, message: error.message, authenticated: false })
            }
        }
        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    }
}
