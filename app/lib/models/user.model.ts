import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  favoriteTeam: String,
  firstName: String,
  lastName: String,
  username: String,
})

// If a model has already been created, use that. If not, create a new model
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User
