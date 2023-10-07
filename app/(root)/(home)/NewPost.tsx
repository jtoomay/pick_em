"use client"
import React, { useEffect, useRef } from "react"

interface Props {
  id: string
  firstName: string
  lastName: string
  username: string
}

export default function NewPost(props: Props) {
  const dialogRef = useRef<any>()

  return (
    <>
      <button className="fixed bottom-4 right-4" onClick={() => dialogRef.current.showModal()}>
        NewPost
      </button>
      <dialog ref={dialogRef} className={DialogStyles}>
        <button onClick={() => dialogRef.current.close()}> close </button>
      </dialog>
    </>
  )
}

// Dialog
const DialogStyles = `h-full w-[90%] min-w-[300px] min-h-[300px] sm:w-3/4 sm:h-3/4`
