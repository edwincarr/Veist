import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = Schema({

}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)
