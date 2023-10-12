"use client"
import React, { useEffect, useRef, useState } from "react"
import Close from "../../../public/assets/SVG/Close.svg"
import Plus from "../../../public/assets/SVG/Plus.svg"
import Image from "next/image"
import { createPost } from "@/app/lib/actions/posts.actions"

interface Props {
  id: string
  firstName: string
  lastName: string
  username: string
}

export default function NewPost(props: Props) {
  const dialogRef = useRef<any>()
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")

  const { id, firstName, lastName } = props
  const user = firstName + " " + lastName

  const handleSubmit = () => {
    try {
      createPost({ postBody, id, user })
    } catch (err) {
      console.log("Error Message: ", err)
    }
  }

  return (
    <>
      <button
        className="fixed bottom-4 right-4 rounded-full bg-white transition-all p-2 hover:scale-110"
        onClick={() => dialogRef.current.showModal()}
      >
        <Image src={Plus} height={35} width={35} alt="New Post" />
      </button>
      <dialog ref={dialogRef} className={DialogStyles}>
        <div className={HeaderStyles}>
          <button className={CloseButtonStyles} aria-label="Close" onClick={() => dialogRef.current.close()}>
            <Image height={30} width={30} src={Close} alt="close" />
          </button>
          <h1 className="text-white text-3xl w-fit"> New Post </h1>
        </div>
        <form onSubmit={handleSubmit} className={PostFormStyles}>
          {/* <input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className={PostInputStyles}
            placeholder="Post Title"
          /> */}
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className={PostInputStyles}
            placeholder="Type your post here..."
          />
          <button className={PostButtonStyles}> Create</button>
        </form>
      </dialog>
    </>
  )
}

// Dialog
const DialogStyles = `h-full w-[90%] p-5 min-w-[300px] min-h-[300px] bg-black/90 rounded-xl sm:w-3/4 sm:h-3/4`
const HeaderStyles = `flex gap-4 h-fit`
const CloseButtonStyles = `text-white w-fit h-fit`
const PostFormStyles = `flex flex-col gap-4 py-5`
const PostInputStyles = `p-2 rounded-[.25rem]`
const PostButtonStyles = `bg-gray-200 text-gray-900 w-fit py-2 px-4 transition-all rounded-xl hover:bg-gray-300`
