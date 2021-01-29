/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import tw from 'twin.macro'

import firebase from '../server/firebase'

const blueColor = css`
  color: blue;
`
const buttonStyle = tw`h-10 px-5 text-purple-100 transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow hover:bg-purple-800 w-full`

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const user = firebase.auth().currentUser

  const signOut = () => {
    setIsLoading(true)
    firebase.auth().signOut()
      .then(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      {user &&
        <div css={tw`w-32`}>
          <button type='button' css={buttonStyle} onClick={signOut}>
            {isLoading
              ? <img src='animations/loading-sm.svg' alt='Loading' css={tw`h-full mx-auto`} />
              : 'Sign Out'}
          </button>
        </div>}
    </div>
  )
}

export default Home
