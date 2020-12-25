import React, { useState } from "react";
import data from '../../data';

const ArrayState = () =>{
  const [people,setPeople]  = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople);
  };
  return(
    <React.Fragment>
      {people.map((person)=> {
        const {id,name} = person;
        return(
          <div key={id} className='card'>
            <h4>  {name} </h4>
            <button type='button' className='btn btn-md btn-info' onClick={()=>removeItem(id)}>
              Delete Item
            </button>
          </div>
        )
      })}
      <button className='btn btn-lg btn-danger' onClick={()=> setPeople([])} >Clear All</button>
    </React.Fragment>
  );
};

export default ArrayState;