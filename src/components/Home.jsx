/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import { FaBeer } from 'react-icons/fa'

const blueColor = css`
  color: blue;
`

const Home = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <div>
      <header>
        <FaBeer />
        <p>
          This page was opened before <code css={blueColor}>{count}</code> seconds.
        </p>
      </header>
    </div>
  )
}

export default Home
