import React from 'react'
import './Display.css'
import { evaluate } from 'mathjs';

function Display(props) {

  return (
    <div className='display'>
 <p>Expression: {props.value}</p>
 <p>= {props.result}</p>

    </div>
  )
}

export default Display
