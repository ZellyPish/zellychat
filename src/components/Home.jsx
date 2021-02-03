/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

import SideBar from './Sidebar/SideBar'
import Chat from './Chat'

const Home = () => {
  return (
    <div css={tw`flex`}>
      <SideBar />
      <Chat />
    </div>
  )
}

export default Home
