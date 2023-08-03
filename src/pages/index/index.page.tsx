import { useEffect, useState } from 'react'
import {Link} from "../../renderer/Link";
export { Page }

function Page() {

  return (
    <div>
      <b>
        <i>
          Time elapsed: <TimeElapsed />
        </i>
        <Counter />
      </b>
      <b>12312121212213</b>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}


function TimeElapsed() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return <>{count}</>
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)} style={{ marginLeft: 10 }}>
      Count: <span>{count}</span>
    </button>
  )
}
