import { useEffect } from "react"
import TestInput from "./TestInput"
import { getPosts } from "@/app/lib/actions/posts.actions"
import Feed from "./Feed"
import { getUser } from "@/app/lib/actions/user.actions"
import NewPost from "./NewPost"

export default async function Home({ searchParams }: any) {
  // Fetch data on the server side
  const user = await getUser()
  const { posts, hasMorePosts } = await getPosts(searchParams.page ?? 1)

  return (
    <div id="HomePageWrapper" className={Wrapper}>
      {/* <TestInput user={user} /> */}
      <Feed posts={posts} hasMorePosts={hasMorePosts} />
      <NewPost firstName={user.firstName} lastName={user.lastName} username={user.userName} id={user.id} />
    </div>
  )
}

const Wrapper = `w-full flex flex-col px-[var(--padding)] pt-[var(--padding)] bg-green-500 pb-40`
