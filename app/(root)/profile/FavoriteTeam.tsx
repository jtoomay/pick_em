"use client"

import { updateUser } from "@/app/lib/actions/user.actions"
import React, { useState } from "react"
import { ButtonStyles } from "./Bio"

interface FavTeamProps {
  defaultTeam?: string
}

export default function FavoriteTeam({ defaultTeam = "" }: FavTeamProps) {
  const [favoriteTeam, setFavoriteTeam] = useState(defaultTeam)
  const [loading, setLoading] = useState(false)
  const [updateTeam, setUpdateTeam] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      updateUser({ favoriteTeam })
    } catch (err) {
      console.log("Error Message", err)
    } finally {
      setLoading(false)
      setUpdateTeam(false)
    }
  }
  return (
    <div className="flex gap-4 flex-col">
      {updateTeam ? (
        <>
          <h2> Please enter your favorite team in the box below</h2>
          <div className="flex gap-4">
            <input
              className="w-[500px] px-4 py-2 rounded-lg text-black"
              type="text"
              placeholder="Please enter your favorite team..."
              value={favoriteTeam}
              onChange={(e) => setFavoriteTeam(e.target.value)}
            />
            <button onClick={handleSubmit} className={ButtonStyles}>
              {loading ? "Loading" : "Set Team"}
            </button>
          </div>
        </>
      ) : (
        <button className={ButtonStyles} onClick={() => setUpdateTeam(true)}>
          Update Favorite Team
        </button>
      )}
    </div>
  )
}
