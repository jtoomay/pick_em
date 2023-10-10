import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)
export default Post
