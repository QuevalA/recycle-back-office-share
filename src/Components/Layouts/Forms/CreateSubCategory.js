import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getCategories,
  createNewSubCategory,
} from '../../../Service/categoriesService'

import { SecondTitle } from '../SecondTitle'

export const CreateSubCategory = () => {
  const [subCategory, setSubCategory] = useState('')
  const [parentCategory, setParentCategory] = useState('')
  const [categoriesList, setCategoriesList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories().then((res) => {
      setCategoriesList(res)
    })
  }, [])

  const handleCreation = () => {
    if (subCategory && parentCategory) {
      createNewSubCategory(subCategory, parentCategory).then(() => {
        navigate('/')
      })
    }
  }

  return (
    <div className="w-1/2 mx-auto my-6">
      <SecondTitle title="Créer une sous catégorie" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm"> Cagégorie parente parent</p>
        <select
          className="w-32 text-dark-blue border border-gray-recycle rounded-lg"
          onChange={(e) => setParentCategory(e.target.value)}
        >
          <option aria-disabled>Choisissez</option>
          {categoriesList &&
            categoriesList.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.category}
                </option>
              )
            })}
        </select>
        <br />
        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5"
          required
          onChange={(e) => setSubCategory(e.target.value)}
          placeholder="Nom sous catégorie"
        />
        <br />

        <button
          className="text-gray-recycle text-center border border-dark-blue w-32 h-12 mt-4 px-auto cursor-pointer rounded-lg text-md"
          onClick={handleCreation}
        >
          Créer une sous catégorie
        </button>
      </div>
    </div>
  )
}
