import asyncHandler from 'express-async-handler'

import Text from '../models/textModel.js'

// @desc    Send text messages
// @route   POST /api/texts
// @access  Private
const postText = asyncHandler(async (req, res) => {
  res.json({message: 'Successful Message Post'})
})

// @desc    Get text messages
// @route   POST /api/texts
// @access  Private
const getText = asyncHandler(async (req, res) => {
  res.json({message: 'Message Received'})
})

export { getText, postText};
