"use client"
import { UserButton, useUser } from "@clerk/nextjs"

export default function Home() {
  const { user } = useUser()
  console.log(user?.fullName, "User")
  return (
    <div className={Wrapper}>
      <div className={Header}>
        <h1> Welcome {user?.fullName} </h1>
        <UserButton />
      </div>
      Homepage that I just made
    </div>
  )
}

const Wrapper = "h-full w-full bg-slate-800"
const Header = "py-10 w-full bg-slate-900"
