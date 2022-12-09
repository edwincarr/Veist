import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

const getUser = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

const postUser = asyncHandler(async (req, res) => {
  const user = await User.create({
    text: req.body.text
  })

  res.status(200).json(user)
})
export { getUser, postUser};
