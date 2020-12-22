import React , {useState , useEffect} from 'react';
const Example = () => {

  const [size,setSize] = useState(window.innerWidth);

  const checkSize = ()=>{
    setSize(window.innerWidth);
  }
  useEffect(()=> {
    console.log('call useEffect');
    window.addEventListener('resize',checkSize);
    //cleanup function -v.imp
    return()=>{
      console.log('clean-up function');
      window.removeEventListener('resize',checkSize);
    }
  },[]);
  console.log('Rendered Component');
  return(
    <div> 
      <h2>useEffect Example</h2>
      <h3>Window Size:</h3>
      <h4>{size}</h4>
    </div>
    )
}

export default Example;