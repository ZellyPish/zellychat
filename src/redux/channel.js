import { createSlice } from '@reduxjs/toolkit'

const channelSlice = createSlice({
  name: 'channelReducer',
  initialState: {
    currentChannelId: null
  },
  reducers: {
    setCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload
    }
  }
})

export const { setCurrentChannelId } = channelSlice.actions

export default channelSlice.reducer
