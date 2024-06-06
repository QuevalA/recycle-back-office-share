import { MangementMenu } from '../Utils/Consts'
import React, { useState } from 'react'
import { CreateAvatar } from '../Components/Layouts/Forms/CreateAvatar'
import { CreateCategory } from '../Components/Layouts/Forms/CreateCategory'
import { CreateListingSubType } from '../Components/Layouts/Forms/CreateListingSubType'
import { CreateListingType } from '../Components/Layouts/Forms/CreateListingType'
import { CreateRank } from '../Components/Layouts/Forms/CreateRanks'
import { CreateSubCategory } from '../Components/Layouts/Forms/CreateSubCategory'
import logo from '../Assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

const CreateContent = () => {
  const navigate = useNavigate()
  const [subject, setSubject] = useState('')
  return (
    <div className="font-Baloo">
      <div
        className="w-24 ml-8 cursor-pointer"
        onClick={() => {
          navigate('/')
        }}
      >
        <img src={logo} alt="logo" />
        <p className="text-center">Recycle</p>
      </div>

      <h1 className="text-center text-2xl text-gray-recycle my-6">
        Ajouter du contenu
      </h1>
      <div className="flex items-center justify-around w-2/3 mx-auto">
        {MangementMenu.map((item) => {
          return (
            <button
              className="text-gray-recycle text-center border border-dark-blue w-20 h-12 px-auto cursor-pointer rounded-lg text-sm"
              key={item.id}
              onClick={() => {
                setSubject(item.value)
              }}
            >
              {item.name}
            </button>
          )
        })}
      </div>
      {subject === 'avatars' && <CreateAvatar />}
      {subject === 'categories' && <CreateCategory />}
      {subject === 'subTypes' && <CreateListingSubType />}
      {subject === 'listingTypes' && <CreateListingType />}
      {subject === 'ranks' && <CreateRank />}
      {subject === 'subCategories' && <CreateSubCategory />}
    </div>
  )
}
export default CreateContent
