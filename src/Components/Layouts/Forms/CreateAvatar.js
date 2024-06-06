import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createAvatar } from '../../../Service/AvatarController'
import { SecondTitle } from '../SecondTitle'

export const CreateAvatar = () => {
  const [avatar, setAvatar] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  const handleCreation = () => {
    if (avatar) {
      createAvatar(avatar).then((res) => {
        if (res == 201) {
          navigate('/')
        } else {
          setErrorMessage('Problème avec l envoi de votre fichier.')
        }
      })
    }
  }

  return (
    <div className="w-1/2 mx-auto my-6">
      <SecondTitle title="Créer un avatar" />
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5 "
          required
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="url"
        />
        <br />
        <button
          className="text-gray-recycle text-center border border-dark-blue w-32 h-12 px-auto cursor-pointer rounded-lg text-md"
          onClick={handleCreation}
        >
          Créer avatar
        </button>
      </div>
      {errorMessage && (
        <p className="text-recycle-red text-md text-center">{errorMessage}</p>
      )}
    </div>
  )
}
