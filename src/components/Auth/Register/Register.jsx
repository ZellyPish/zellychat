/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

import AuthLayout from '../AuthLayout'
import { Button, Input } from '../Form'

const Register = () => {
  return (
    <AuthLayout image='images/register.png'>
      <div css={tw`py-2 px-4 text-center`}>
        <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign Up</h2>
      </div>
      <form method='post'>
        <div css={tw`grid grid-rows-4 gap-8`}>
          <div css={tw`col-span-3`}>
            <Input label='Nickname' name='nickname' type='text' />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Email address' name='emailAddress' type='email' />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Password' name='password' type='password' />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Confirm Password' name='confirmPassword' type='password' />
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
