/** @jsx jsx */
import { jsx } from '@emotion/react'
import { RiChat1Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import UserInfo from './UserInfo'

const SideBar = () => {
  return (
    <div css={tw`flex flex-col h-screen w-80 bg-purple-300`}>
      <Link to='/'>
        <h1 css={tw`text-4xl m-4 font-bold text-purple-700`}>
          <RiChat1Fill css={tw`inline-block mr-2`} />zellychat
        </h1>
      </Link>
      <UserInfo />
    </div>
  )
}

export default SideBar
