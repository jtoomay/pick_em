"use client"

import { updateUser } from "@/app/lib/actions/user.actions"
import React, { useState } from "react"

interface BioProps {
  userBio?: string
}

export default function Bio({ userBio = "" }: BioProps) {
  const [bio, setBio] = useState(userBio)
  const [loading, setLoading] = useState(false)
  const [updateBio, setUpdateBio] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      updateUser({ bio })
    } catch (err) {
      console.log("Error Message: ", err)
    } finally {
      setLoading(false)
      setUpdateBio(false)
    }
  }

  return (
    <div className={WrapperStyles}>
      {updateBio ? (
        <>
          <textarea className={TextareaStyles} value={bio} onChange={(e) => setBio(e.target.value)} />
          <button className={ButtonStyles} onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <button className={ButtonStyles} onClick={() => setUpdateBio(true)}>
          Update Bio
        </button>
      )}
    </div>
  )
}

const WrapperStyles = `flex flex-col gap-2`
const TextareaStyles = `text-gray-900`
export const ButtonStyles = `px-4 py-2 w-fit bg-white transition-colors hover:bg-gray-300 text-gray-900 rounded-xl`
