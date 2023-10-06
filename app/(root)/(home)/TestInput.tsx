"use client"
import { createPost } from "@/app/lib/actions/posts.actions"
import React, { useState } from "react"

export default function TestInput({ options }: any) {
  const [postBody, setPostBody] = useState("")
  const id = (Math.random() * 100).toString()

  const user = options
  const handleSubmit = () => {
    try {
      createPost({ postBody, user, id })
    } catch (err) {
      console.log("Error Message: ", err)
    }
  }

  return (
    <div className=" w-full py-10 flex gap-4">
      <input className="ml-20 text-gray-500" value={postBody} onChange={(e) => setPostBody(e.target.value)} />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}
