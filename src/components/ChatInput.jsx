/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSelector } from 'react-redux'
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import firebase from '../server/firebase'

const inputStyle = tw`w-11/12 h-12 border-0 focus:ring-0 focus:outline-none px-4`
const buttonStyle = tw`w-1/12 h-12 px-5 text-purple-100 transition-colors duration-150 bg-purple-700 focus:shadow hover:bg-purple-800`

const ChatInput = ({ channelName, channelId }) => {
  const user = useSelector(state => state.user)
  const { register, handleSubmit } = useForm()

  const sendMessage = (data) => {
    firebase.firestore().collection('rooms').doc(channelId).collection('messages').add({
      message: data.message,
      nickname: user.nickname,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  return (
    user.nickname
      ? <div>
        <form onSubmit={handleSubmit(sendMessage)}>
          <div css={tw`fixed bottom-0 w-5/6`}>
            <input type='text' name='message' placeholder={`Message to #${channelName}`} ref={register({ required: true })} css={inputStyle} onSubmit={(e) => { e.currentTarget.value = '' }} />
            <button type='submit' css={buttonStyle}>Send</button>
          </div>
        </form>
        </div>
      : <div css={tw`fixed bottom-0 w-5/6 h-12 p-4 bg-white`}>Please Sign In</div>
  )
}

export default ChatInput
