import { model, models, Schema } from 'mongoose'

const usersSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true, trim: true },
        isAdmin: { type: Boolean, required: true, default: false },
        resetPasswordToken: { type: String, trim: true },
    },
    {
        timestamps: true,
    },
)
const Users = models.users || model('users', usersSchema)

export default Users

export const parseUser = (user) => {
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        resetPasswordToken: user.resetPasswordToken,
        createdAt: user.createdAt?.toISOString() || '',
        updatedAt: user.updatedAt?.toISOString() || '',
    }
}
