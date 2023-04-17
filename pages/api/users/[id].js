import { deleteUser, getUser, updateUser } from '@/src/lib/api/users'

export default async function handleRequest(req, res) {
    switch (req.method) {
        case 'GET': {
            try {
                console.log(req.query, req.params)
                const { id } = req.query
                const user = await getUser(id)
                return res.status(200).json({ user, ok: true })
            } catch (error) {
                console.error(error.message)
                return res.status(404).json({ users: [], message: error.message, ok: false })
            }
        }
        case 'PUT': {
            try {
                const data = req.body
                const newUser = await updateUser(data)
                return res
                    .status(200)
                    .json({ newUser, ok: true, message: 'Usuario actualizado correctamente' })
            } catch (error) {
                console.error(error.message)
                return res.status(404).json({ message: error.message, ok: false })
            }
        }
        case 'DELETE': {
            try {
                const { id } = req.body
                const user = await deleteUser(id)
                return res
                    .status(200)
                    .json({ user, message: 'Usuario eliminado correctamente', ok: true })
            } catch (error) {
                console.error(error.message)
                return res.status(404).json({ message: error.message, ok: false })
            }
        }

        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    }
}
