import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema

const userSchema = Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Please Enter a Username'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Please Enter a name'],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Please Enter an Email'],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    unique: true
  },
  image: String,
  password: {
    type: String,
    required: [true, 'Please Enter a Password'],
  }
}, {
  timestamps: true
})

userSchema.plugin(mongooseUniqueValidator, {message: 'is already taken.'})

export default mongoose.model('User', userSchema)
