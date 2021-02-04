/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FaCode, FaInfoCircle } from 'react-icons/fa'
import tw from 'twin.macro'

import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import Message from './Message'

const Chat = ({ channelDetails, messages }) => {
  return (
    channelDetails.name
      ? <div css={tw`h-screen w-5/6 relative`}>
        <ChatHeader name={channelDetails?.name} />
        <div css={tw`h-11/12 flex flex-col-reverse overflow-y-scroll pb-12`}>
          {messages?.map((item, index) => (
            <Message
              key={index}
              photoURL={item.photoURL}
              nickname={item.nickname}
              message={item.message}
              timestamp={item.timestamp}
            />
          ))}
        </div>
        <ChatInput channelName={channelDetails?.name} channelId={channelDetails?.id} />
        </div>
      : <div css={tw`w-5/6 flex flex-col justify-center items-center`}>
        <img src='/images/main.png' css={tw`w-1/2`} />
        <p css={tw`text-center text-3xl my-4`}>Start Chatting!</p>
        </div>
  )
}

export default Chat
