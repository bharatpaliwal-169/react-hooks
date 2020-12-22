import React , {useState , useEffect} from 'react';
const Example = () => {

  const [value,setValue] = useState(0);
  useEffect(()=> {
    console.log('call useEffect');
    if(value >=1){
      document.title = `New Messages(${value})`;
    }
  },[value]);
  console.log('Rendered Component');
  return(
    <div> 
      <h4>{value}</h4>
      <h2>useEffect Example</h2>
      <button className='btn btn-lg btn-info' onClick={()=> setValue(value+1)}>Click Me</button>
    </div>
    )
}

export default Example;