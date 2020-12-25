import React,{ useState } from 'react';
import {Button} from 'reactstrap';

const ShortCircuit = () => {
  // const [text,setText] = useState('');
  const [login,setLogin] = useState('');
  const loginCheck = login || "Signed Out"; 
  // const firstValue = text || 'Hello World'; // text empty then hello world else text;
  // const secondValue = text && 'Hello World'; // empty text the value 2 is also empty but if text is !empty then value2 is 'hello world'
  return (
    <div>
      {/* <h1>Value 1 : {firstValue}</h1>
      <h2>Value 2 : {secondValue}</h2> */}
      <Button color='success' onClick={()=> {
        if (login === '') {
          setLogin('Sign in')
        } else {
          setLogin('')
        }}}>
          {loginCheck}
      </Button>
    </div>
  )
}

export default ShortCircuit;
