import { useDispatch } from 'react-redux'
import {
  setConfirm,
  setIsModalOpen,
  setTargetEntity,
  setTargetId,
} from '../../redux/reducers/crud'

export const ActionsRenderer = ({ target, id }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <p className="flex items-center justify-around ">
        <i
          className="fa-solid fa-trash mx-2 cursor-pointer text-red-recycle"
          onClick={() => {
            dispatch(setIsModalOpen(true))
            dispatch(setTargetEntity(target))
            dispatch(setTargetId(id))
            dispatch(setConfirm(false))
          }}
        ></i>
      </p>
    </div>
  )
}
