"use server"

import { getUser } from "@/app/lib/actions/user.actions"
import React from "react"
import FavoriteTeam from "./FavoriteTeam"
import ProfileCard from "./ProfileCard"
import Bio from "./Bio"

// TODO: Make a layout and wrap this around the layout

export default async function Profile() {
  const user = await getUser()

  return (
    <div className="flex flex-col gap-4 w-full bg-green-500">
      <ProfileCard favoriteTeam={user.favoriteTeam} userBio={user.bio} />
      <FavoriteTeam defaultTeam={user.favoriteTeam} />
      <Bio userBio={user.bio} />
    </div>
  )
}
