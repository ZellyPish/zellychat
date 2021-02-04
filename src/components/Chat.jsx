/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import tw from 'twin.macro'

import firebase from '../server/firebase'

const Chat = ({ channelDetails }) => {
  return (
    channelDetails
      ? <p>{channelDetails?.name} room</p>
      : <div css={tw`w-5/6 flex flex-col justify-center items-center`}>
        <img src='/images/main.png' css={tw`w-1/2`} />
        <p css={tw`text-center text-3xl my-4`}>Start Chatting!</p>
        </div>
  )
}

export default Chat
