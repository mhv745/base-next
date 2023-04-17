import { changePassword, confirmToken, remember } from '@/src/lib/api/users'

export default async function handleRequest(req, res) {
    switch (req.method) {
        case 'POST': {
            try {
                const email = req.body?.email
                const message = await remember(email)

                return res.status(200).json({ ok: true, message })
            } catch ({ message }) {
                console.error(message)

                return res.status(404).json({ ok: false, message })
            }
        }
        case 'GET': {
            try {
                const token = req.query?.token
                const user = await confirmToken(token)

                return res.status(200).json({ ok: true, user })
            } catch ({ message }) {
                console.error(message)

                return res.status(404).json({ ok: false, message })
            }
        }
        case 'PUT': {
            try {
                const body = req.body
                const message = await changePassword(body?.user, body?.password)

                return res.status(200).json({ ok: true, message })
            } catch ({ message }) {
                console.error(message)

                return res.status(404).json({ ok: false, message })
            }
        }
        default: {
            res.setHeader('Allow', ['GET', 'POST', 'PUT'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    }
}
