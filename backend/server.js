import express from 'express'
import dotenv from 'dotenv'

import userRouter from './routes/userRoute.js'

import errorHandler from './utils/errorHandler.js'

dotenv.config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))
