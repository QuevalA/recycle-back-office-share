import { createSlice } from '@reduxjs/toolkit'

const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    isModalOpen: false,
    targetId: '',
    targetEntity: '',
    confirm: false,
  },
  reducers: {
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload
    },
    setTargetId(state, action) {
      state.targetId = action.payload
    },
    setTargetEntity(state, action) {
      state.targetEntity = action.payload
    },
    setConfirm(state, action) {
      state.confirm = action.payload
    },
  },
})

export const getIsModalOpen = (state) => state.crud.isModalOpen
export const getTargetId = (state) => state.crud.targetId
export const getTargetEntity = (state) => state.crud.targetEntity
export const getConfirm = (state) => state.crud.confirm

export const { setIsModalOpen, setTargetEntity, setTargetId, setConfirm } =
  crudSlice.actions

export default crudSlice.reducer
