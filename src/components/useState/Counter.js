import React, { useState } from "react";

const Counter = () => {
  const [value , setValue] = useState(0);

  const reset = () =>{
    setValue(0);
  };
  const decreaseCount = () =>{
    setValue(value - 1)
  };
  const reset_complex = () => {
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState = 0;
      });
    },1000);
  };
  const decreaseCount_complex = () => {
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState - 1;
      });
    },1000);
  };
  const increase_complex_count = () => {
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState + 1;
      });
    },1000);
  };
  return(
    <React.Fragment>
      <section className='col-12 col-md-7'>
        <h1> Simple Counter </h1>
        <h3>{value} </h3>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {decreaseCount}> Decrease </button>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {reset}> Reset </button>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {()=> setValue(value +1)}> Increase </button>
      </section>
      <section className='col-12 col-md-7'>
        <h1> Complex Counter </h1>
        <h3>{value} </h3>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {decreaseCount_complex}> Decrease </button>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {reset_complex}> Reset </button>
        <button className='btn btn-md btn-outline-info mr-1' onClick = {increase_complex_count}> Increase </button>
      </section>
    </React.Fragment>
  );
};
export default Counter;