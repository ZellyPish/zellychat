import { combineReducers } from '@reduxjs/toolkit'

import userReducer from './user'
import channelReducer from './channel'

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer
})

export default rootReducer
