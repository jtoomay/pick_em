import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
  mongoose.set("strictQuery", true)

  if (!process.env.MONGODB_URL) return console.log("NO MONGODB URL")
  if (isConnected) return console.log("MongoDB is already connected")
  try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB Successfully Connected")
  } catch (e: any) {
    console.log("MongoDB Error: ", e)
  }
}
