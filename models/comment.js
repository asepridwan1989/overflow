const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  articleId: {
    type: Schema.Types.ObjectId,
    ref: "article"
  },
  liked: {
    type: Number,
    default: 25
  },
  content: {
    type: String,
    require: [true, 'content required']
  },
}, {
  timestamps: true
})

let article = mongoose.model('Article', articleSchema)

module.exports = article
