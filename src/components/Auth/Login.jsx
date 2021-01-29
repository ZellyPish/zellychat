/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/react'
import { Link, useHistory } from 'react-router-dom'
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import firebase from '../../server/firebase'

import AuthLayout from './AuthLayout'
import { Button, Input } from './Form'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'

const alertStyle = tw`absolute py-2 text-xs text-gray-600`

const Login = () => {
  const [errorState, setErrorState] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState()
  const history = useHistory()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    setIsLoading(true)
    const { email, password } = data
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        setIsLoading(false)

        history.push('/')
      })
      .catch(serverError => {
        setIsLoading(false)
        setErrorState(serverError)
      })
  }

  return (
    <React.Fragment>
      <AuthLayout image='login.png'>
        <div css={tw`py-2 px-4 text-center`}>
          <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign In</h2>
        </div>
        <form method='post' onSubmit={handleSubmit(onSubmit)}>
          <div css={tw`grid grid-rows-4 gap-8`}>
            <div css={tw`col-span-4`}>
              <Input
                label='Email address'
                name='email'
                auto='email'
                type='email'
                ref={register({ required: true })}
              />
            </div>

            <div css={tw`col-span-4`}>
              <Input
                label='Password'
                name='password'
                auto='password'
                type='password'
                ref={register({ required: true })}
              />
            </div>
            <div css={tw`col-end-5 justify-self-end w-5/6`}>
              <Button text='Sign In' type='submit' isLoading={isLoading} />
            </div>
          </div>
          <p css={[alertStyle, tw`bottom-0`]}>{errorState?.message} </p>
        </form>
        <div css={tw`text-center`}>
          <Link to='/register'>
            <span css={tw`text-gray-600 font-bold`}>Don't have an Account?</span>
          </Link>
        </div>
      </AuthLayout>
      <GoogleReCaptcha
        onVerify={token => {
          setToken(token)
        }}
      />
    </React.Fragment>
  )
}

export default React.memo(Login)
