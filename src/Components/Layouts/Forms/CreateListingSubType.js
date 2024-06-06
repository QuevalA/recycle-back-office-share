import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getListingTypes } from '../../../Service/listingTypeService'
import { createSubType } from '../../../Service/listingTypeService'
import { SecondTitle } from '../SecondTitle'

export const CreateListingSubType = () => {
  const [subType, setSubType] = useState('')
  const [parentType, setParentType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [typesList, setTypesList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getListingTypes().then((res) => {
      setTypesList(res)
    })
  }, [])

  const handleCreation = () => {
    if (subType && parentType) {
      createSubType(subType, parentType).then(() => {
        navigate('/')
      })
    }
  }

  return (
    <div className="w-1/2 mx-auto my-6">
      <SecondTitle title="Créer sous type d'annonce" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm"> Type parent</p>
        <select
          className="w-32 text-dark-blue border border-gray-recycle rounded-lg"
          onChange={(e) => setParentType(e.target.value)}
        >
          <option aria-disabled>Choisissez</option>
          {typesList &&
            typesList.map((option) => {
              return (
                <option
                  key={option.id}
                  value={option.id}
                  onClick={() => {
                    setParentType(option.id)
                  }}
                >
                  {option.type}
                </option>
              )
            })}
        </select>
        <br />
        <input
          type="text"
          className="border block border-dark-blue w-64 h-12 rounded-lg text-md text-gray-recycle indent-5"
          required
          onChange={(e) => setSubType(e.target.value)}
          placeholder="Nom sous type"
        />
        <br />

        <button
          className="text-gray-recycle text-center border border-dark-blue w-32 h-12 mt-4 px-auto cursor-pointer rounded-lg text-md"
          onClick={handleCreation}
        >
          Créer sous type d'annonces
        </button>
      </div>
    </div>
  )
}
