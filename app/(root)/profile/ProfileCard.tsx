"use client"

import { getUser } from "@/app/lib/actions/user.actions"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import React from "react"

interface UserInfo {
  favoriteTeam?: string
  userBio?: string
}

export default function ProfileCard({ favoriteTeam = "", userBio = "" }: UserInfo) {
  const user = useUser()
  // TODO: Figure out how to typedef this
  const imageURL: any = user?.user?.imageUrl
  const FullName: any = user?.user?.fullName

  return (
    <div className={WrapperStyles}>
      <Image className={ImageStyles} width={150} height={150} src={imageURL} alt="Image URL" />
      <div className={ProfileCardTextStyles}>
        <span className={NameStyles}>{FullName}</span>
        {favoriteTeam.length > 1 && <span className={SmallerNameStyles}>{favoriteTeam}</span>}
        <span className={BioStyles}> {userBio.length > 1 ? userBio : "Please Set a user bio"}</span>
      </div>
    </div>
  )
}

const WrapperStyles = `max-w-1/2 flex gap-4`
const ImageStyles = `rounded-full`
const NameStyles = `text-white font-bold text-2xl`
const SmallerNameStyles = `text-white font-semibold text-base`
const ProfileCardTextStyles = `flex flex-col gap-2`
const BioStyles = `text-white bg-gray-800 p-1 rounded-lg `
