import { useEffect } from "react"
import TestInput from "./TestInput"
import { getPosts } from "@/app/lib/actions/posts.actions"
import Feed from "./Feed"
import { getUser } from "@/app/lib/actions/user.actions"
import NewPost from "./NewPost"

export default async function Home() {
  // Fetch data on the server side
  const user = await getUser()
  const posts = await getPosts()

  return (
    <div className={Wrapper}>
      {/* <TestInput user={user} /> */}
      <Feed posts={posts} />
      <NewPost firstName={user.firstName} lastName={user.lastName} username={user.userName} id={user.id} />
    </div>
  )
}

const Wrapper = "h-0 min-h-fit flex-1 w-full bg-slate-800 flex flex-col"
