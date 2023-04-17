import { createUser, getUsers } from '@/src/lib/api/users'

export default async function handleRequest(req, res) {
    switch (req.method) {
        case 'GET': {
            try {
                const users = await getUsers()
                return res.status(200).json({ users, ok: true })
            } catch (error) {
                console.error(error.message)
                return res.status(404).json({ users: [], message: error.message, ok: false })
            }
        }
        case 'POST': {
            try {
                const data = req.body
                const newUser = await createUser(data)
                return res
                    .status(200)
                    .json({ newUser, ok: true, message: 'Usuario creado correctamente' })
            } catch (error) {
                console.error(error.message)
                return res.status(404).json({ message: error.message, ok: false })
            }
        }
        default: {
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    }
}
