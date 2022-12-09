import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body

  if (!username || !email || !password || !name){
    res.status(400)
    throw new Error('Add all fields')
  }

  // check if user exists
  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash Password
  const salt = await bcrypt.genSalt(16)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await User.create({
    username,
    name,
    email,
    password: hashedPassword
  })

  if(user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid User Data')
  }

})

// @desc    Login/Authenticate user
// @route   POST /api/users/Login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const {email, username, password} = req.body
  const user = email ? await User.findOne({email}) : await User.findOne({username});

  if(user && (await bcrypt.compare(password, user.password))){
    res.status(200).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

// @desc    Retrieve logged in user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const {_id, name, email, username } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
    username
  })
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

export { registerUser, loginUser, getMe };
