import { getUser } from "@/app/lib/actions/user.actions"
import React from "react"
import FavoriteTeam from "./FavoriteTeam"

// TODO: Make a layout and wrap this around the layout

export default async function Profile() {
  const user = await getUser()

  console.log(user, "user")
  return (
    <div className="flex flex-col gap-4 w-full h-full p-10">
      <span> Hello {user.firstName + " " + user.lastName}</span>
      <h1> Profile </h1>
      <a href="/">Home Page</a>
      <FavoriteTeam defaultTeam={user.favoriteTeam} />
    </div>
  )
}
