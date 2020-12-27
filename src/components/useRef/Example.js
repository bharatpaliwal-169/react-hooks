import React , { useRef } from 'react';
const Example = ()=> {
  const refContainer = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value);

  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className=' form-group'>
          <input  className='form-group-item' type='text' ref={refContainer}/>
          <button type='submit' className='btn btn-lg btn-danger'>Submit</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Example;