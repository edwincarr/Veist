import express from "express";

import { postText, getText } from '../controllers/textController.js'

const textRouter = express.Router()

textRouter.post('/', getText)
textRouter.post('/', postText)

export default textRouter
