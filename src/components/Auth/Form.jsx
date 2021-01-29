/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import tw from 'twin.macro'

const labelStyle = tw`block text-sm font-medium text-gray-700 py-1`
const inputStyle = tw`mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`
const buttonStyle = tw`h-10 px-5 text-purple-100 transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow hover:bg-purple-800 w-full`

const InputComponent = React.forwardRef(({ label, name, type, value, auto = '', onChange }, ref) => (
  <React.Fragment>
    <label htmlFor={name} css={labelStyle}>{label}</label>
    <input type={type} name={name} id={name} autoComplete={auto} css={inputStyle} value={value} onChange={onChange} ref={ref} />
  </React.Fragment>
))

const ButtonComponent = ({ text, type, isLoading }) => (
  <button type={type} css={buttonStyle}>
    {isLoading
      ? <img src='animations/loading-sm.svg' alt='Loading' css={tw`h-full mx-auto`} />
      : text}
  </button>
)

export const Input = React.memo(InputComponent)
export const Button = React.memo(ButtonComponent)
