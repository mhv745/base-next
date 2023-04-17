import mongoose from 'mongoose'

const connectDB = () => {
    const MONGODB = process.env.MONGODB

    try {
        if (!mongoose.connections[0].readyState) {
            mongoose.set('strictQuery', false)
            return mongoose.connect(MONGODB, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        }
        return mongoose.connections[0]
    } catch (error) {
        console.error('Error al conectar a la base de datos', error)
        throw new Error('Error al conectar a la base de datos: ')
    }
}

export default connectDB
