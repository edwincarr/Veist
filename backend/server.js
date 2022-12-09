import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import userRouter from './routes/userRoute.js'
import textRouter from './routes/textRoute.js'

import connectDB from './config/db.js'
import errorHandler from './utils/errorHandler.js'

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRouter)
app.use('/api/text', textRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))
