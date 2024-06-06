import { useDispatch } from 'react-redux'
import { setConfirm, setIsModalOpen } from '../../redux/reducers/crud'

export const ConfirmModal = ({ id }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="absolute top-O left-0 w-screen h-screen bg-gray z-10 opacity-80">
        <div className="w-1/2 mx-auto mt-48 h-32 !opacity-100 bg-black z-90 rounded-xl relative">
          <button className="absolute right-2 w-6 h-8 cursor-pointer top-1">
            <i
              className="fa-regular fa-circle-xmark text-white w-6 h-8 rounded-md cursor-pointer"
              onClick={() => {
                dispatch(setIsModalOpen(false))
                dispatch(setConfirm(false))
              }}
            ></i>
          </button>
          <p className="text-white text-center pt-6">
            Êtes vous sur de vouloir effecture cette action ?
          </p>
          <div className="w-1/2 flex items-center justify-center mx-auto my-4">
            <button
              className="w-20 text-center mx-4 bg-white text-dark-blue rounded-lg cursor-pointer"
              onClick={() => {
                dispatch(setIsModalOpen(false))
                dispatch(setConfirm(false))
              }}
            >
              Non
            </button>
            <button
              className="w-20 text-center mx-4 bg-white text-dark-blue rounded-lg cursor-pointer"
              onClick={() => {
                dispatch(setIsModalOpen(false))
                dispatch(setConfirm(true))
              }}
            >
              Oui
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
