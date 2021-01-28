/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { RiChat1Fill } from 'react-icons/ri'
import ProgressiveImage from 'react-progressive-image-loading'

const AuthLayout = ({ children, image }) => {
  return (
    <div css={tw`w-screen h-screen grid content-center justify-center`}>
      <div css={tw`flex flex-row shadow-xl bg-purple-100 h-auto container rounded-xl overflow-hidden`}>
        <Link to='/' css={tw`absolute`}>
          <h1 css={tw`text-4xl my-4 mx-6 font-bold text-purple-700`}>
            <RiChat1Fill css={css`display: inline-block;`} />zellychat
          </h1>
        </Link>
        <div css={[tw`hidden grid grid-cols-1 content-center justify-center mx-12`, css`height: 38rem; width: 45rem;`]}>
          <ProgressiveImage
            preview={`images/thumbnails/${image}`}
            src={`images/${image}`}
            render={(src) => <img src={src} alt='auth' css={tw`w-full`} />}
          />
        </div>
        <div css={tw`overflow-hidden bg-white w-96 border-gray-300 p-6`}>
          <div css={tw`grid h-full`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AuthLayout)
