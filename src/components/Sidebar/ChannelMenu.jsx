/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

import { FaRegComments } from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { setCurrentChannelId } from '../../redux/channel'

const ChannelMenu = ({ text, id }) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(setCurrentChannelId(id))
  }

  return (
    <div css={tw`text-lg px-4 py-1 font-semibold text-purple-200 flex items-center transition-colors duration-150 hover:cursor-pointer hover:bg-purple-700`} onClick={onClick}>
      <FaRegComments css={tw`mr-2`} />
      {text}
    </div>
  )
}

export default ChannelMenu
