/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import tw from 'twin.macro'

import firebase from '../../server/firebase'

import AuthLayout from './AuthLayout'
import { Button, Input } from './Form'

const alertStyle = tw`absolute py-2 text-xs text-gray-600`

const Register = () => {
  const userCollectionRef = firebase.database().ref('users')

  const [errorState, setErrorState] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const { register, handleSubmit, errors, watch } = useForm()
  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = (data) => {
    setIsLoading(true)
    const { nickname, email, password } = data
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createUser => {
        setIsLoading(false)
        updateUserDetails(createUser, nickname, email)
        history.push('/login')
      })
      .catch(serverError => {
        setIsLoading(false)
        setErrorState(serverError)
      })
  }

  const updateUserDetails = (createUser, nickname, email) => {
    setIsLoading(true)
    if (createUser) {
      createUser.user.updateProfile({
        displayName: nickname,
        photoURL: `https://gravatar.com/avatar/${email}?d=identicon`
      })
        .then(() => {
          saveUserInDB(createUser)
          setIsLoading(false)
          setErrorState(null)
        })
        .catch((serverError) => {
          setIsLoading(false)
          setErrorState(serverError)
        })
    }
  }

  const saveUserInDB = (createUser) => {
    userCollectionRef.child(createUser.user.uid).set({
      displayName: createUser.user.displayName,
      photoURL: createUser.user.photoURL
    })
  }

  return (
    <AuthLayout image='register.png'>
      <div css={tw`py-2 px-4 text-center`}>
        <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign Up</h2>
      </div>
      <form method='post' onSubmit={handleSubmit(onSubmit)} css={tw`relative`}>
        <div css={tw`grid grid-rows-5 gap-8`}>
          <div css={tw`col-span-4`}>
            <Input
              label='Nickname'
              name='nickname'
              type='text'
              auto='nickname'
              ref={register({ required: true, maxLength: 16 })}
            />
            {errors.nickname && <p css={alertStyle}>Nickname should be less than 16 characters</p>}
          </div>

          <div css={tw`col-span-4`}>
            <Input
              label='Email address'
              name='email'
              auto='email'
              type='email'
              ref={register({ required: true })}
            />
            {errors.email && <p css={alertStyle}>Email is required</p>}
          </div>

          <div css={tw`col-span-4`}>
            <Input
              label='Password'
              name='password'
              auto='password'
              type='password'
              ref={register({ required: true, maxLength: 16, minLength: 8 })}
            />
            {errors.password && <p css={alertStyle}>Password characters should be between 8 and 16</p>}
          </div>

          <div css={tw`col-span-4`}>
            <Input
              label='Confirm Password'
              name='confirmPassword'
              auto='password'
              type='password'
              ref={register({ required: true, maxLength: 16, minLength: 8, validate: value => value === password.current })}
            />
            {errors.confirmPassword && <p css={alertStyle}>Password doesn't match</p>}
          </div>
          <div css={tw`col-end-5 justify-self-end w-5/6`}>
            <Button text='Sign Up' type='submit' isLoading={isLoading} />
          </div>
        </div>
        <p css={[alertStyle, tw`bottom-0`]}>{errorState?.message} </p>
      </form>
    </AuthLayout>
  )
}

export default React.memo(Register)
