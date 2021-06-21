import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment {count}</button>
    </div>
  )
}

export default Counter
