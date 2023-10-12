import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import Header from "@/components/Layout/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pick-Em",
  description: "World Class Sports Picks",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          userButtonAvatarBox: "w-14 h-14 min-h-14 flex ",
          userButtonOuterIdentifier: "text-white",
          userButtonBox: "gap-4",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className + " " + WrapperStyles}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

const WrapperStyles = `bg-slate-800 h-full`
