import asyncHandler from 'express-async-handler'

import Text from '../models/textModel.js'
import Chat from '../models/chatModel.js'
import mongoose from 'mongoose'

// @desc    Send text messages
// @route   POST /api/texts
// @access  Private
const postText = asyncHandler(async (req, res) => {
  const { sentBy, chatId, message } = req.body

  if (!sentBy || !chatId || !message){
    res.status(400)
    throw new Error('Missing Parameter')
  }
  const chat = mongoose.Types.ObjectId(chatId)
  const text = await Text.create({
    sentBy,
    chat,
    message
  })

  if(text){
    const messageAdded = await Chat.findByIdAndUpdate(chatId, {$push: {messages: mongoose.Types.ObjectId(text.id)}, $inc: {currentMessageNumber: 1}})

    if(messageAdded){
      res.status(201).json({
        _id: text.id,
        sentBy: text.sentBy,
        chat: text.chat,
        message: text.message,
        messageNumber: messageAdded.currentMessageNumber
      })
    }else{
      res.status(400)
      throw new Error(`Message didn't save`)
    }
  }else{
    res.status(400)
    throw new Error('Invalid Text Data')
  }
})

// @desc    Get text messages
// @route   GET /api/texts
// @access  Private
const getText = asyncHandler(async (req, res) => {
  res.json({message: 'Message Received'})
})

export { getText, postText };
