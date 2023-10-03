import { getUser } from "@/app/lib/actions/user.actions"
import { connectToDB } from "@/app/lib/mongoose"
import { UserButton, auth, useUser } from "@clerk/nextjs"

export default async function Home() {
  const user = await getUser()

  return <div className={Wrapper}>Homepage that I just made</div>
}

const Wrapper = "h-full w-full bg-slate-800"
