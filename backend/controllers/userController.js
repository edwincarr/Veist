import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({message: 'Register User'})
})

// @desc    Login/Authenticate user
// @route   POST /api/users/Login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({message: 'Login User'})
})

// @desc    Retrieve logged in user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.json({message: 'User Data'})
})

export { registerUser, loginUser, getMe };
