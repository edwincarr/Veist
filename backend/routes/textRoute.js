import express from "express";

import protect from "../utils/authHandler.js";

import { postText, getText } from '../controllers/textController.js'

const textRouter = express.Router()

textRouter.get('/', protect, getText)
textRouter.post('/', postText)

export default textRouter
