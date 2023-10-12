import Header from "@/components/Layout/Header"
import React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="RootLayout" className={Wrapper}>
      <Header />
      {children}
    </div>
  )
}

const Wrapper = `flex flex-col h-full w-full`
