/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import { RiChat1Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import { FiPlus } from 'react-icons/fi'

import firebase from '../../server/firebase'

import UserInfo from './UserInfo'
import ChannelMenu from './ChannelMenu'

const SideBar = () => {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    firebase.firestore().collection('rooms').onSnapshot(snapshot => (
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      })))
    ))
  }, [])

  const addChannel = () => {
    const channelName = window.prompt('Please enter the channel name.')

    channelName && firebase.firestore().collection('rooms').add({
      name: channelName
    })
  }

  return (
    <div css={tw`flex flex-col h-screen w-1/6 bg-purple-500`}>
      <Link to='/'>
        <h1 css={tw`text-4xl m-4 font-bold text-purple-200`}>
          <RiChat1Fill css={tw`inline-block mr-2`} />zellychat
        </h1>
      </Link>
      <UserInfo />
      <div css={tw`my-4`}>
        <div css={tw`text-lg px-4 py-1 font-semibold text-purple-200 flex items-center hover:cursor-pointer`} onClick={addChannel}>
          <FiPlus css={tw`mr-2`} />
          Add Channel
        </div>
        {channels.map(channel => (
          <ChannelMenu key={channel.id} text={channel.name} id={`${channel.id}`} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
