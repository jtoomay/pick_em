"use server"

import { auth, currentUser } from "@clerk/nextjs"
import { connectToDB } from "../mongoose"
import User from "../models/user.model"

export async function getUser() {
  connectToDB()
  const clerkUser = auth()
  const { firstName, lastName, username } = (await currentUser()) || {}
  try {
    const user = await User.findOne({ id: clerkUser.userId })
    if (user) return user

    return User.create({ id: clerkUser.userId, firstName: firstName, lastName: lastName, username: username })
  } catch (e: any) {
    console.log("Error Message: ", e)
  }
}

// These are the props that can be used to update the user
interface UserUpdateOptions {
  favoriteTeam?: string
  username?: string
}

export async function updateUser(options: UserUpdateOptions) {
  console.log(options, "options")
  connectToDB()
  const clerkUser = auth()
  try {
    User.findOneAndUpdate({ id: clerkUser.userId }, { $set: options }, { upsert: true })
  } catch (err) {
    console.log("Error Message: ", err)
  }
}
