import express from "express";

import protect from "../utils/authHandler.js";

import { postText, getText } from '../controllers/textController.js'

const textRouter = express.Router()

textRouter.post('/', protect, getText)
textRouter.post('/', protect, postText)

export default textRouter
