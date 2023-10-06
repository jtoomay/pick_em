import { getUser } from "@/app/lib/actions/user.actions"
import { connectToDB } from "@/app/lib/mongoose"
import { UserButton, auth, useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import TestInput from "./TestInput"
import { getPosts } from "@/app/lib/actions/posts.actions"
import Feed from "./Feed"

export default async function Home() {
  const user = await getUser()

  const posts = await getPosts()

  return (
    <div className={Wrapper}>
      <TestInput options={user.firstName} />
      <Feed posts={posts} />
    </div>
  )
}

const Wrapper = "h-0 min-h-fit flex-1 w-full bg-slate-800 flex flex-col"
