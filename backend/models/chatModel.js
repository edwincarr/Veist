import mongoose from "mongoose";
const Schema = mongoose.Schema

const chatSchema = Schema({
  name: {
    type: String,
    default: 'New Chat'
  },
  participents: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Text'
  }],
  currentMessageNumber: {
    type: Number,
    default: 0
  },
  isGroup: Boolean
}, {
  timestamps: true
})

export default mongoose.model('Chat', chatSchema)
