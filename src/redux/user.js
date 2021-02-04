import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    nickname: null,
    photoURL: null
  },
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload.displayName
      state.photoURL = action.payload.photoURL
    },
    removeUser: (state, action) => {
      state.nickname = null
      state.photoURL = null
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
