import React, { useState } from "react";

const ObjectState = () =>{
  const [person , setPerson] = useState({
    name : 'peter',
    age : 25 ,
    msg : 'Random message here'
  })

  const changeMsg = () =>{
    setPerson({...person,msg: 'Hello World from Object. [USING spread operator is fun n OP] '})
  }
  return(
    <React.Fragment>
      <div className='col-12 col-md-5 offset-md-2'>
        <h3> {person.name} </h3>
        <h3> {person.age} </h3>
        <h6> {person.msg} </h6>

        <button className='btn btn-lg btn-primary' onClick ={changeMsg} > Change message </button>
      </div>
    </React.Fragment>
  );
};


export default ObjectState;