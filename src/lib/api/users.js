import { data } from '@/src/utils/data'
import mail from '@sendgrid/mail'
import { compare, hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import connectDB from '../db/db'
import Users, { parseUser } from '../db/users'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
if (SENDGRID_API_KEY) {
    mail.setApiKey(SENDGRID_API_KEY)
}

export async function getUsers() {
    await connectDB()
    const users = await Users.find({}).lean().exec()
    return users.map(parseUser)
}

export async function getUser(id) {
    if (!id) throw { message: 'Id no válido.', code: 422 }
    await connectDB()
    const user = await Users.findById(id).lean().exec()
    if (!user) throw { message: 'Usuario no encontrado.', code: 404 }
    return parseUser(user)
}

export async function getUserByEmail(email) {
    if (!isValidEmail(email)) throw { message: 'Email no válido.', code: 422 }
    await connectDB()
    const user = await Users.findOne({ email }).lean().exec()
    if (!user) throw { message: 'Usuario no encontrado.', code: 404 }
    return parseUser(user)
}

export async function createUser({ name, email, password }) {
    if (!name || !isValidEmail(email) || !password)
        throw { message: 'Datos incompletos.', code: 422 }

    if (password.length < 6 || password.length > 20)
        throw { message: 'La contraseña debe tener entre 6 y 20 caracteres.', code: 422 }

    if (name.length < 3) throw { message: 'El nombre debe tener al menos 3 caracteres.', code: 422 }

    await connectDB()

    const usuario = await Users.findOne({ email }).lean()
    if (usuario) {
        throw { message: 'El usuario ya está registrado.', code: 422 }
    }

    try {
        const passwordHash = await hash(password, 12)
        const newUser = await Users.create({
            name,
            email,
            password: passwordHash,
        })
        return parseUser(newUser)
    } catch (error) {
        console.error('Error registro: ', error)
        throw { message: 'Error al registrar el usuario.', code: 500 }
    }
}

export async function updateUser(id, user) {
    await connectDB()

    if (user.password) {
        if (user.password.length < 6 || user.password.length > 20)
            throw { message: 'La contraseña debe tener entre 6 y 20 caracteres.', code: 422 }
        user.password = await hash(user.password, 12)
    }

    const updatedUser = await Users.findByIdAndUpdate(id, user, {
        new: true,
    }).lean()

    return parseUser(updatedUser)
}

export async function deleteUser(id) {
    await connectDB()
    const deletedUser = await Users.findByIdAndDelete(id).lean()
    return parseUser(deletedUser)
}

export async function login(email, password) {
    if (!isValidEmail(email) || password?.length < 6 || password?.length > 20) {
        throw { message: 'Datos incompletos.', code: 422 }
    }

    connectDB()
    const user = await Users.findOne({ email }).catch(() => {
        throw { message: 'Estamos teniendo algunos problemas.', code: 500 }
    })

    if (!user) {
        throw { message: 'Usuario o contraseña incorrectos.', code: 422 }
    }

    const passwordValido = await compare(password, user.password)
    if (!passwordValido) {
        throw { message: 'Usuario o contraseña incorrectos.', code: 422 }
    }

    return parseUser(user)
}

export const confirmToken = async (token) => {
    const data = jwt.verify(token, process.env.NEXTAUTH_SECRET)
    if (!data) {
        throw new Error('El token no es válido.')
    }
    await connectDB()
    const user = await Users.findById(data.id).lean().exec()
    if (!user) {
        throw new Error('El usuario no existe.')
    }
    if (user.resetPasswordToken !== token) {
        throw new Error('El token no es válido.')
    }
    return parseUser(user)
}

export async function resetPassword(email) {
    if (!email || !isValidEmail(email)) {
        throw new Error('El email no es válido.')
    }

    await connectDB()

    let user = await Users.findOne({ email }).lean().exec()
    user = parseUser(user)
    if (!user) {
        throw new Error('El usuario no existe.')
    }

    const token = {
        email: email,
        id: user.id,
    }
    const hash = jwt.sign(token, process.env.NEXTAUTH_SECRET, {
        expiresIn: '1d',
    })

    console.log('password hash: ', hash)
    await Users.findByIdAndUpdate(user.id, {
        resetPasswordToken: hash,
    })

    try {
        await notificarRecuperarPassword(user, hash)
        return 'Se envió un email para recuperar la contraseña. Si no lo ha recibido, compruebe la bandeja de spam.'
    } catch (error) {
        throw new Error('No se pudo enviar el email para recuperar la contraseña.')
    }
}

export const changePassword = async (user, newPassword) => {
    if (!newPassword || newPassword.length < 6 || newPassword.length > 20)
        throw { message: 'La contraseña debe tener entre 6 y 20 caracteres.', code: 422 }

    if (!user || !user.id) throw new Error('No se ha encontrado el usuario.')

    await connectDB()
    const newPasswordHash = await hash(newPassword, 12)
    await Users.findByIdAndUpdate(user.id, {
        password: newPasswordHash,
        resetPasswordToken: '',
    })

    return 'Contraseña actualizada correctamente. Vuelva a la página de inicio de sesión.'
}

async function notificarRecuperarPassword(user, token) {
    if (!data.email) throw new Error('No se ha configurado el email de envío.')
    if (!user?.email) {
        throw new Error('El usuario no tiene email.')
    }

    const link = `${process.env.NEXT_PUBLIC_URL}/recuperar/${token}`

    const text = `
    Hola ${user.name},\n\n
    Hemos recibido una solicitud para recuperar la contraseña de tu cuenta.\n
    Si no has sido tú, ignora este correo.\n
    Si has sido tú, puedes cambiar tu contraseña haciendo clic en el siguiente enlace: ${link}\n\n
    Gracias por confiar en ${data.siteName}\n\n
    `

    const html = `
    <h1>Hola ${user.name},</h1>
    <p>Hemos recibido una solicitud para recuperar la contraseña de tu cuenta.</p>
    <p>Si no has sido tú, ignora este correo.</p>
    <p>Si has sido tú, puedes cambiar tu contraseña haciendo clic en el siguiente enlace: <a href="${link}">Cambiar contraseña</a></p>
    <p>Gracias por confiar en ${data.siteName}</p>
    `
    const msg = {
        to: user.email,
        from: data.email,
        subject: 'Recuperar contraseña',
        text,
        html,
    }

    return mail.send(msg).then(
        () => ({ ok: true }),
        (error) => {
            if (error.response) {
                console.error(error.response.body)
                throw new Error(error.response.body)
            }
        },
    )
}

const isValidEmail = (email) => {
    const match = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )

    return !!match
}
