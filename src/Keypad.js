import React,{useState} from 'react'
import './Keypad.css'

function Keypad(props) {
      // const [keyValue,setKeyValue] = useState('0');
      // onClick={() => props.handleNumberClick('')}
      
     

  return (
    <>

   <div className='keyrow'>
    <button className='row1btn'>AC</button>
    <button className='row1btn'>DEL</button>
    <button className='row1btn'>/</button>
   </div>
   <div className='keyrow'>
    <button className='row2btn'  onClick={() => props.handleNumberClick('1')} >1</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('2')}>2</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('3')}>3</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('*')}>*</button>
   </div>
   <div className='keyrow'>
   <button className='row2btn'  onClick={() => props.handleNumberClick('4')}>4</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('5')}>5</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('6')}>6</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('+')}>+</button>
   </div>
   <div className='keyrow'>
   <button className='row2btn'  onClick={() => props.handleNumberClick('7')}>7</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('8')}>8</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('9')}>9</button>
    <button className='row2btn'  onClick={() => props.handleNumberClick('-')}>-</button>
   </div>
   <div className='keyrow'>
   <button className='row1btn'  onClick={() => props.handleNumberClick('.')}>.</button>
    <button className='row1btn'  onClick={() => props.handleNumberClick('0')}>0</button>
    <button className='row1btn'  onClick={() => props.handleNumberClick('=')}>=</button>
   </div>
   
      
    </>
  )
}

export default Keypad;
