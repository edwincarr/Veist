import express from "express";

import protect from "../utils/authHandler.js";
import { getMe, loginUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', protect, getMe)

export default userRouter
