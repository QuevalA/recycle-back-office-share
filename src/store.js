import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers'

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false })

export default configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
})
