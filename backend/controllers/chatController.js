import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

import Chat from '../models/chatModel.js'

// @desc    create new chat
// @route   POST /api/chats
// @access  Private
const postChat = asyncHandler(async (req, res) => {
  const { name, participents } = req.body
  const members = JSON.parse(participents)
  if(!participents){
    res.status(400)
    throw new Error('Members needed to start new chat')
  }

  const isGroup = members.length > 2 ? true : false

  const chat = await Chat.create({
    name,
    participents: members,
    isGroup
  })

  if(chat){
    res.status(201).json({
      _id: chat.id,
      name: chat.name,
      participents: chat.participents,
      isGroup: chat.isGroup
    })
  }else{
    res.status(400)
    throw new Error('Invalid Chat Data')
  }

})

export { postChat }
