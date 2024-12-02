import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const[count , setCoun] = useState(0);

    function decrese(){
      setCoun(count-1);
    }

    function increse(){
      setCoun(count+1);
    }
    function reset(){
      setCoun(0);
    }

  return (
    <div className='container'>
        <p>increment and decrement</p>
        <div className="content">
          <button id='decrement' onClick={decrese}>-</button>
          <p id='value'>{count}</p>
          <button id='increment' onClick={increse}>+</button>
        </div>
        <button id='reset'onClick={reset}> Reset</button>
    </div>
  )
}

export default Counter