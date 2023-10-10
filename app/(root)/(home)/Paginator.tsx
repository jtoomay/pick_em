"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"

export default function Paginator({ hasMorePosts }: { hasMorePosts: boolean }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const page = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1

  const pageLeft = () => {
    if (page - 1 === 1) return router.push(pathName)
    router.push(pathName + "?page=" + (page - 1))
  }

  const pageRight = () => {
    router.push(pathName + "?page=" + (page + 1))
  }

  return (
    <div>
      <button disabled={page === 1} onClick={pageLeft}>
        Prev Page
      </button>
      <button disabled={!hasMorePosts} onClick={pageRight}>
        Next Page
      </button>
    </div>
  )
}
