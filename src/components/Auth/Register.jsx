/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import tw from 'twin.macro'

import AuthLayout from './AuthLayout'
import { Button, Input } from './Form'

const Register = () => {
  const user = {
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [userState, setUserState] = useState(user)

  const handleInput = (e) => {
    const target = e.target
    setUserState((currentUserState) => {
      const currentUser = { ...currentUserState }
      currentUser[target.name] = target.value
      return currentUser
    })
  }

  return (
    <AuthLayout image='register.png'>
      <div css={tw`py-2 px-4 text-center`}>
        <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign Up</h2>
      </div>
      <form method='post'>
        <div css={tw`grid grid-rows-5 gap-8`}>
          <div css={tw`col-span-3`}>
            <Input label='Nickname' name='nickname' type='text' auto='nickname' value={userState.nickname} onChange={handleInput} />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Email address' name='email' auto='email' type='email' value={userState.email} onChange={handleInput} />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Password' name='password' type='password' value={userState.password} onChange={handleInput} />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Confirm Password' name='confirmPassword' type='password' value={userState.confirmPassword} onChange={handleInput} />
          </div>
          <div css={tw`col-end-4 justify-self-end`}>
            <Button text='Sign Up' type='submit' />
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Register
