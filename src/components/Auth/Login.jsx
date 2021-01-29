/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import AuthLayout from './AuthLayout'
import { Button, Input } from './Form'

const alertStyle = tw`absolute py-2 text-xs text-gray-600`

const Login = () => {
  const user = {
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [userState, setUserState] = useState(user)
  const [errorState, setErrorState] = useState()
  const { register, handleSubmit } = useForm()

  const handleInput = (e) => {
    const target = e.target
    setUserState((currentUserState) => {
      const currentUser = { ...currentUserState }
      currentUser[target.name] = target.value
      return currentUser
    })
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <AuthLayout image='login.png'>
      <div css={tw`py-2 px-4 text-center`}>
        <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign In</h2>
      </div>
      <form method='post' onSubmit={handleSubmit(onSubmit)}>
        <div css={tw`grid grid-rows-4 gap-8`}>
          <div css={tw`col-span-3`}>
            <Input
              label='Email address'
              name='email'
              auto='email'
              type='email'
              value={userState.email}
              onChange={handleInput}
              ref={register({ required: true })}
            />
          </div>

          <div css={tw`col-span-3`}>
            <Input
              label='Password'
              name='password'
              type='password'
              value={userState.password}
              onChange={handleInput}
              ref={register({ required: true })}
            />
          </div>
          <div css={tw`col-end-4 justify-self-end`}>
            <Button text='Sign In' type='submit' />
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
  )
}

export default React.memo(Login)
