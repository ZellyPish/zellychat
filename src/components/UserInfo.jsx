/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import firebase from '../server/firebase'

const buttonStyle = tw`h-10 px-5 text-purple-100 transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow hover:bg-purple-800 w-full`

const UserInfo = () => {
  const [userState, setUserState] = useState(firebase.auth().currentUser)
  const [isLoading, setIsLoading] = useState(false)

  const signOut = () => {
    setIsLoading(true)
    firebase.auth().signOut()
      .then(() => {
        setIsLoading(false)
        setUserState(null)
      })
  }

  return (
    <React.Fragment>
      <div css={tw`h-24 p-4 flex flex-row`}>
        <img
          src={
        userState !== null
          ? userState.photoURL
          : 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&d=mp'
      }
          alt='Avatar'
          css={tw`w-16 bg-gray-200 rounded-full border border-gray-300`}
        />
        <p css={tw`pl-4 text-2xl font-semibold text-purple-700 self-center justify-self-start`}>{userState !== null ? userState.displayName : 'Please Sign In'}</p>
      </div>
      <div css={tw`w-32 mx-auto`}>
        {userState !== null
          ? <button type='button' css={buttonStyle} onClick={signOut}>
            {isLoading
              ? <img src='animations/loading-sm.svg' alt='Loading' css={tw`h-full mx-auto`} />
              : 'Sign Out'}
            </button>
          : <Link to='/login'><button type='button' css={buttonStyle}>Sign In</button></Link>}
      </div>
    </React.Fragment>
  )
}

export default UserInfo
