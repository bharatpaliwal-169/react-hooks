import React , {useState , useEffect} from 'react';
const ShowHide = () =>{
  const[show,setShow] = useState(false);
  return(
    <>
      <button className='btn btn-lg btn-primary' onClick={()=>setShow(!show)} > Show/Hide </button>
      {show && <Item />}
    </>
  )
}
const Item = () =>{
  return (
    <div className='text-white bg-dark'>
      <h4> Show / hide components </h4>
    </div>
  )
}
export default ShowHide;