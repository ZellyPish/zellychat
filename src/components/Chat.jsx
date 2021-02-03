/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useParams } from 'react-router-dom'
import tw from 'twin.macro'

const Chat = () => {
  const { roomId } = useParams()
  return <p css={tw`text-3xl`}>{roomId} room</p>
}

export default Chat
