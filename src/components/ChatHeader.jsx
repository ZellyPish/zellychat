/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import { FaCode, FaInfoCircle } from 'react-icons/fa'

const ChatHeader = ({ name }) => (
  <header css={tw`h-1/12 w-full flex justify-between font-semibold bg-purple-400 text-2xl text-purple-50 shadow-xl`}>
    <div css={tw`flex px-4 items-center`}>
      <FaCode css={tw`mr-2`} />
      <strong>{name}</strong>
    </div>
    <div css={tw`flex px-4 items-center pointer-events-none`}>
      <FaInfoCircle css={tw`mr-2`} />
      Details
    </div>
  </header>
)

export default ChatHeader
