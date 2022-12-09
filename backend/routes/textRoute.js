import express from "express";

import { getText, postText } from '../controllers/textController.js'

const textRouter = express.Router()

userRouter.get('/', getText)
userRouter.post('/', postText)

export default textRouter
