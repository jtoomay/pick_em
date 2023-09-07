import { getUser } from "@/app/lib/actions/user.actions"
import { connectToDB } from "@/app/lib/mongoose"
import { UserButton, auth, useUser } from "@clerk/nextjs"

export default async function Home() {
  const user = await getUser()
  return (
    <div className={Wrapper}>
      <div className={Header}>
        <h1> Welcome {user?.firstName + " " + user?.lastName} </h1>
        <UserButton />
      </div>
      Homepage that I just made
    </div>
  )
}

const Wrapper = "h-full w-full bg-slate-800"
const Header = "py-10 w-full bg-slate-900"
