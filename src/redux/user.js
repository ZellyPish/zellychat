import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload.uid
    },
    removeUser: (state, action) => {
      state.currentUser = null
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
