import { getPosts } from "@/app/lib/actions/posts.actions"
import React, { useEffect } from "react"

export default function Feed(posts: any) {
  return (
    <div className={Wrapper}>
      <h1 className={Header}> Posts </h1>
      <div className={PostsWrapper}>
        {posts.posts.map((post: any, i: number) => {
          return (
            <div className="w-fit" key={i}>
              <div className={PostWrapper}>
                <span>{post.user}</span>
                <span>{post.postBody}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Wrapper = `w-full h-0 min-h-fit flex-1 px-4 flex flex-col gap-6`
const PostsWrapper = `flex flex-col gap-2 w-fit `
const Header = `text-3xl font-bold text-white`

// Post
const PostWrapper = `w-96 bg-red-500 h-44`
