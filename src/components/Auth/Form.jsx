/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const labelStyle = tw`block text-sm font-medium text-gray-700`
const inputStyle = tw`mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`
const buttonStyle = tw`bg-purple-500 hover:bg-purple-700 text-white font-bold p-3 rounded`

const InputComponent = ({ label, name, type, value, auto = '', onChange }) => (
  <React.Fragment>
    <label htmlFor={name} css={labelStyle}>{label}</label>
    <input type={type} name={name} id={name} autoComplete={auto} css={inputStyle} value={value} onChange={onChange} />
  </React.Fragment>
)
export const Input = React.memo(InputComponent)

export const Button = ({ text, type }) => (
  <button type={type} css={buttonStyle}>{text}</button>
)
