/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import AuthLayout from './AuthLayout'
import { Button, Input } from './Form'

const Register = () => {
  return (
    <AuthLayout image='login.png'>
      <div css={tw`py-2 px-4 text-center`}>
        <h2 css={tw`text-2xl font-medium leading-6 text-gray-900`}>Sign In</h2>
      </div>
      <form method='post'>
        <div css={tw`grid grid-rows-4 gap-8`}>
          <div css={tw`col-span-3`}>
            <Input label='Email address' name='emailAddress' type='email' />
          </div>

          <div css={tw`col-span-3`}>
            <Input label='Password' name='password' type='password' />
          </div>
          <div css={tw`col-end-4 justify-self-end`}>
            <Button text='Sign In' type='submit' />
          </div>
        </div>
      </form>
      <div css={tw`text-center`}>
        <Link to='/register'>
          <span css={tw`text-gray-700 font-bold`}>Don't have an Account?</span>
        </Link>
      </div>
    </AuthLayout>
  )
}

export default Register
