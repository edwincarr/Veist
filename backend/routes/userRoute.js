import express from "express";

import { getMe, loginUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', getMe)

export default userRouter
