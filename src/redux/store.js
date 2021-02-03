import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['userReducer/setUser']
    }
  }),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
