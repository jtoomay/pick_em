"use client"

import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import React from "react"
interface PostProps {
  post: { id: string; user: string; postBody: string }
}
export default function Post(props: PostProps) {
  const { post } = props
  console.log("🚀 ~ file: Post.tsx:9 ~ Post ~ post:", post)
  const { user } = useUser()
  const imageUrl = user?.imageUrl
  return (
    <div className={PostWrapper}>
      <div className={ContentWrapper}>
        <div className={HeaderWrapper}>
          {/*
          //TODO: Make this send the correct image
          {imageUrl && (
            <Image
              className={ImageStyles}
              src={imageUrl}
              height={50}
              width={50}
              alt={`${user?.fullName} Profile Picture`}
            />
          )} */}
          <span className={UserText}>{post.user}</span>
        </div>
        <span>{post.postBody}</span>
      </div>
    </div>
  )
}

//* Post
const PostWrapper = `w-[calc(100% - .1rem)] bg-gray-200 rounded-xl p-3 text-slate-800 font-medium h-44 relative before:content-[''] before:-z-[1] before:rounded-xl before:absolute before:top-[.1rem] before:-right-[.1rem] before:bg-orange-500 before:h-full before:w-full`
const ContentWrapper = `flex flex-col gap-4 `
const HeaderWrapper = `flex gap-4`
const UserText = `capitalize`
const ImageStyles = `rounded-full`
