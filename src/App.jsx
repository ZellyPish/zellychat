/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

const blueColor = css`
color: blue
`

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Page has been open for <code css={blueColor}>{count}</code> seconds.
        </h1>
      </header>
    </div>
  );
}

export default App;
