import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import logo from '../Assets/images/logo.png'
import { ConfirmModal } from '../Components/Layouts/ConfirmModal'
import { useDispatch, useSelector } from 'react-redux'
import { handleDelete } from '../Utils/Crud'
import {
  getConfirm,
  getIsModalOpen,
  getTargetEntity,
  getTargetId,
} from '../redux/reducers/crud'
import { MangementMenu, supervisionMenu } from '../Utils/Consts'
import { SecondTitle } from '../Components/Layouts/SecondTitle'
import { Loader } from '../Components/Layouts/Loader'
import { handleColumnsAndRows } from '../Utils/handleColumnsAndRows'
import { MenuItem } from '../Components/Layouts/MenuItem'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState(true)
  const [column, setColumn] = useState('')
  const [columns, setColumns] = useState('')
  const isModalOpen = useSelector(getIsModalOpen)
  const targetId = useSelector(getTargetId)
  const targetEntity = useSelector(getTargetEntity)
  const confirm = useSelector(getConfirm)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    handleColumnsAndRows(column, setIsLoading, setColumns, setResults)
  }, [column])

  useEffect(() => {
    if (confirm) {
      handleDelete(confirm, targetEntity, targetId, dispatch)
      navigate('/')
    }
  }, [confirm, dispatch, navigate, targetEntity, targetId])

  return (
    <div className="font-Baloo">
      <div className="relative">{isModalOpen && <ConfirmModal />}</div>
      <div className="flex items-center">
        <div className="w-1/6 h-screen bg-gray-light">
          <div>
            <img src={logo} className="w-12 mx-auto" alt="logo" />
            <h1 className="text-center text-2xl text-gray-recycle my-4">
              Tableau de bord
            </h1>
            <SecondTitle title="Supervision" />
            {supervisionMenu.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  name={item.name}
                  setColumn={setColumn}
                />
              )
            })}
            <SecondTitle title="Maintenance" />
            {MangementMenu.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  name={item.name}
                  setColumn={setColumn}
                />
              )
            })}
          </div>
          <button
            className="text-gray-recycle text-center border-t-2 border-b-2 border-dark-blue w-full h-12 px-auto cursor-pointer"
            onClick={() => {
              navigate('/creation')
            }}
          >
            Créer contenu
          </button>
        </div>
        <div style={{ height: '100vh', width: '83.333%' }}>
          {isLoading ? (
            <Loader />
          ) : (
            <DataGrid
              rows={results}
              columns={columns}
              pageSizeOptions={[5, 10, 25]}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default Home
