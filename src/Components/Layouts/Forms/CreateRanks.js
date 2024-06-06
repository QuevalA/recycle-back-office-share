import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRank } from '../../../Service/rankService'
import { SecondTitle } from '../SecondTitle'

export const CreateRank = () => {
  const [rank, setRank] = useState('')
  const navigate = useNavigate()

  const handleCreation = () => {
    if (rank) {
      createRank(rank).then(() => {
        navigate('/')
      })
    }
  }

  return (
    <div className="w-1/2 mx-auto my-6">
      <SecondTitle title="Créer un rank" />
      <div className="flex flex-col items-center justify-center">
        <br />
        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5"
          required
          onChange={(e) => setRank(e.target.value)}
          placeholder="Nom Rank"
        />
        <br />
        <button
          className="text-gray-recycle text-center border border-dark-blue w-32 h-12 mt-4 px-auto cursor-pointer rounded-lg text-md"
          onClick={handleCreation}
        >
          Créer Rank
        </button>
      </div>
    </div>
  )
}
