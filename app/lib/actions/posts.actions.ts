"use server"

import { connectToDB } from "../mongoose"
import Post from "../models/posts.model"
import { auth } from "@clerk/nextjs"
import { revalidatePath } from "next/cache"

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
    await Post.create({ userID: clerkUser.userId, postBody: options.postBody, user: options.user })
    revalidatePath("/")
  } catch (err) {
    console.log("ErrorMessage", err)
  }
}

const pageSize = 4
export async function getPosts(pageNumber = 1) {
  connectToDB()
  try {
    const skipAmount = (pageNumber - 1) * pageSize
    const postQuery = Post.find().sort({ createdAt: "desc" }).skip(skipAmount).limit(pageSize)
    const posts = await postQuery.exec()
    const totalPosts = await Post.countDocuments()
    const hasMorePosts = totalPosts > skipAmount + posts.length
    return { posts: posts, hasMorePosts: hasMorePosts }
  } catch (err) {
    console.log("ErrorMessage", err)
    return {}
  }
}
