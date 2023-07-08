import React, { useState } from 'react'
import './Calculator.css'
import Display from './Display'
import Keypad from './Keypad'
import { evaluate } from 'mathjs';

function Calculator() {
  const [displayValue,setDisplayValue]=useState('');
  const [result,setResult]=useState('');

const onButtonClick = (buttonValue) =>{
  console.log(buttonValue);
  if(buttonValue==='=')
  try {
    const evalResult = eval(displayValue);
    setResult(evalResult);
  }
  catch (error) {
    setResult('Error');
  }
  else {
    // Append the clicked button value to the displayValue
    setDisplayValue((prevdisplayValue) => prevdisplayValue + buttonValue);
  }
}

  

    
  return (
    <div className='calculator'>
    <Display value={displayValue} result={result}/>
    <Keypad handleNumberClick={onButtonClick} />
      
    </div>
  )
}

export default Calculator
