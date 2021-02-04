/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import SideBar from './Sidebar/SideBar'
import Chat from './Chat'

import firebase from '../server/firebase'

const Home = () => {
  const [channelDetails, setChannelDetails] = useState({})
  const [messages, setMessages] = useState()

  const currentChannelId = useSelector(state => state.channel.currentChannelId)

  useEffect(() => {
    firebase.firestore().collection('rooms').doc(currentChannelId || '404')
      .onSnapshot((snapshot) => {
        setChannelDetails({
          name: snapshot.data()?.name,
          id: snapshot.id
        })
      })

    firebase.firestore()
      .collection('rooms').doc(currentChannelId || '404')
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        if (!snapshot.metadata.hasPendingWrites) {
          setMessages(snapshot.docs.map(doc => doc.data()))
        }
      })
  }, [currentChannelId])

  return (
    <div css={tw`flex`}>
      <SideBar />
      <Chat channelDetails={channelDetails} messages={messages} />
    </div>
  )
}

export default Home
