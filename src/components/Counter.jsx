import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [count,setCount]=useState(0)
    const handleAdd=()=>{
        setCount(prev=>prev+5);
    }
    const handleReduce=()=>{
        setCount(prev=>prev-5);
    }
  return (
    <div data-testid="counter">
      <h1>Counter: {count}</h1>
      <Button func={handleAdd} color="gray" size="small">Add</Button>
      <Button func={handleReduce} color="gray" size="small">Reduce</Button>
    </div>
  )
}

export default Counter
