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
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      // console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div className='text-white bg-dark'>
      <h4> Show / hide components </h4>
      <h6> Window Size : {size}</h6>
    </div>
  )
}
export default ShowHide;