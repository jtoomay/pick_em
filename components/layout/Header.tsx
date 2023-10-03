import { getUser } from "@/app/lib/actions/user.actions"
import { ClerkProvider, UserButton, useAuth } from "@clerk/nextjs"
import React from "react"

const navigationLinks = [
  { name: "Home Page", href: "/" },
  { name: "Profile", href: "/profile" },
]

export default async function Header() {
  const user = await getUser()

  return (
    <div className={HeaderStyles}>
      <nav className={NavigationStyles}>
        {navigationLinks.map((item) => (
          <a className={LinkStyles} href={item.href} key={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
      <div className={ProfileCardStyles}>
        <UserButton showName={true} />
      </div>
    </div>
  )
}
const HeaderStyles = "p-5 min-h-[96px] w-full bg-slate-900 flex justify-between"
const ProfileCardStyles = ""
const NavigationStyles = " flex gap-4 h-fit "
const LinkStyles = "transition-colors hover:text-blue-500"
