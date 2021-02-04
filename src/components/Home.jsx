/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import SideBar from './Sidebar/SideBar'
import Chat from './Chat'

import firebase from '../server/firebase'

const Home = () => {
  const [channelDetails, setChannelDetails] = useState()

  const currentChannelId = useSelector(state => state.channel.currentChannelId)

  useEffect(() => {
    firebase.firestore().collection('rooms').doc(currentChannelId || undefined)
      .onSnapshot((snapshot) => {
        setChannelDetails(snapshot.data())
      })
  }, [currentChannelId])

  return (
    <div css={tw`flex`}>
      <SideBar />
      <Chat channelDetails={channelDetails} />
    </div>
  )
}

export default Home
