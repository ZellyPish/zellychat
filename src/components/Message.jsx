/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import ReactTimeAgo from 'react-time-ago'

const Message = ({ photoURL, nickname, message, timestamp }) => {
  return (
    <div css={tw`p-4 flex`}>
      <img src={photoURL} alt='avatar' css={tw`mt-1 w-12 h-12 bg-gray-200 rounded-full border border-gray-300 bg-gray-100`} />
      <div css={tw`px-4`}>
        <span css={tw`font-semibold text-lg`}>{nickname}</span>
        <ReactTimeAgo date={new Date(timestamp.toDate()).toUTCString()} locale='en-US' css={tw`pl-2 text-gray-600`} />
        <p css={tw`py-1 `}>{message}</p>
      </div>
    </div>
  )
}

export default Message
