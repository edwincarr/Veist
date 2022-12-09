import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const connect = await mongoose.connect(process.env.DB_URI)
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
