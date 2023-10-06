import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)
export default Post
