/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import { removeUser, setUser } from '../redux/user'

import firebase from '../server/firebase'

const buttonStyle = tw`h-10 px-5 text-purple-100 transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow hover:bg-purple-800 w-full`

const UserInfo = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user))
        setCurrentUser(user)
      }
    })
  }, [])

  const signOut = () => {
    setIsLoading(true)
    dispatch(removeUser())
    setCurrentUser(null)
    firebase.auth().signOut()
      .then(() => {
        setIsLoading(false)
      })
  }

  return (
    <React.Fragment>
      <div css={tw`h-24 p-4 flex flex-row`}>
        <img
          src={
            currentUser
              ? currentUser.photoURL
              : 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&d=mp'
          }
          alt='Avatar'
          css={tw`w-16 bg-gray-200 rounded-full border border-gray-300`}
        />
        <p css={tw`pl-4 text-2xl font-semibold text-purple-700 self-center justify-self-start`}>{currentUser ? currentUser.displayName : 'Please Sign In'}</p>
      </div>
      <div css={tw`w-32 mx-auto`}>
        {currentUser
          ? <button type='button' css={buttonStyle} onClick={signOut} disabled={isLoading}>{isLoading ? <img src='animations/loading-sm.svg' alt='Loading' css={tw`h-full mx-auto`} /> : 'Sign Out'}</button>
          : <Link to='/login'><button type='button' css={buttonStyle}>Sign In</button></Link>}
      </div>
    </React.Fragment>
  )
}

export default UserInfo
