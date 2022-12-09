import mongoose from "mongoose";
const Schema = mongoose.Schema

const textSchema = Schema({
  sentBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  chatId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ChatId'
  },
  message: {
    type: String,
  },
  seenBy: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    seen: Boolean
  }],
  messageNumber: Number
}, {
  timestamps: true
})

export default mongoose.model('Text', textSchema)
