"use client"

import { UserButton } from "@clerk/nextjs"
import React from "react"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
]

export default function Header() {
  return (
    <div className={HeaderStyles}>
      <Navigation />
      <ProfileCircle />
    </div>
  )
}

interface NavItemProps {
  link: {
    href: string
    name: string
  }
}

function Navigation() {
  return (
    <nav className={NavigationStyles}>
      {navigationLinks.map((link) => (
        <NavItem link={link} key={link.href} />
      ))}
    </nav>
  )
}

function NavItem({ link }: NavItemProps) {
  return (
    <a className={LinkStyles} href={link.href} key={link.href}>
      {link.name}
    </a>
  )
}

function ProfileCircle() {
  return (
    <div className={ProfileCardStyles}>
      <UserButton showName={true} />
    </div>
  )
}

const LinkStyles = "transition-all text-2xl duration-300 hover:text-blue-500 hover:translate-y-[-1px]"
const HeaderStyles = "py-5 px-10 min-h-[96px] w-full bg-slate-900 flex justify-between"
const ProfileCardStyles = ""
const NavigationStyles = " flex gap-8 h-fit "
