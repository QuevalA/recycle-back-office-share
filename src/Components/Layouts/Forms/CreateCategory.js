import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCategory } from '../../../Service/categoriesService'
import { SecondTitle } from '../SecondTitle'

export const CreateCategory = () => {
  const [category, setCategory] = useState('')
  const [categoryImage, setCategoryImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  const handleCreation = () => {
    if (category && categoryImage) {
      createCategory(category, categoryImage).then((res) => {
        navigate('/')
      })
    }
  }

  return (
    <div className="w-1/2 mx-auto my-6">
      <SecondTitle title="Créer une catégorie" />
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5"
          required
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Nom"
        />
        <br />

        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5 "
          required
          onChange={(e) => setCategoryImage(e.target.value)}
          placeholder="Url image"
        />

        <button
          className="text-gray-recycle text-center border border-dark-blue w-32 h-12 mt-4 px-auto cursor-pointer rounded-lg text-md"
          onClick={handleCreation}
        >
          Créer Catégorie
        </button>
      </div>
      {errorMessage && (
        <p className="text-recycle-red text-md text-center">{errorMessage}</p>
      )}
    </div>
  )
}
