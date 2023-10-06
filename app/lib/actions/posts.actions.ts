"use server"

import mongoose from "mongoose"
import { connectToDB } from "../mongoose"
import Post from "../models/posts.model"
import { auth } from "@clerk/nextjs"

interface PostProps {
  postBody: string
  id: string
  user: string
}

export async function createPost(options: PostProps) {
  console.log("options createpost", options)
  connectToDB()

  const clerkUser = auth()
  if (!clerkUser) return { success: false, message: "Not Logged in" }

  try {
    await Post.findOneAndUpdate({ id: clerkUser.userId }, { $set: options }, { upsert: true })
  } catch (err) {
    console.log("ErrorMessage", err)
  }
}

export async function getPosts() {
  connectToDB()
  try {
    const posts = await Post.find()
    return posts
  } catch (err) {
    console.log("ErrorMessage", err)
  }
}
