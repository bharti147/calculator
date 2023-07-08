import React from 'react'
import './Display.css'
import { evaluate } from 'mathjs';

function Display(props) {

  return (
    <div className='display'>
 <h2>Expression:{props.value}</h2>
 <h2>Result:{props.result}</h2>

    </div>
  )
}

export default Display
