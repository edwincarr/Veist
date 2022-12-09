import express from "express";

import protect from "../utils/authHandler.js";

import { postChat } from '../controllers/chatController.js'

const chatRouter = express.Router()

chatRouter.post('/', protect, postChat)
// chatRouter.post('/', protect, getChat)

export default chatRouter
