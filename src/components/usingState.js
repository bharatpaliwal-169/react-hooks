import React ,{ useState } from 'react'

  
const Example = ()=>{
  const [text,setText] = useState("Random Title");
  const handleClick =()=>{
    if (text === 'Random Title') {
      setText("Hello World")
    } else {
      setText('Random Title')
    }
  };
  
  return (
    <React.Fragment>
      <h2 className='text-capitalize' >{text} </h2>
      <button type='button' className='btn btn-lg btn-outline-dark ' onClick={handleClick} > Change Title </button>
    </React.Fragment>
  )  
}
  
export default Example;




