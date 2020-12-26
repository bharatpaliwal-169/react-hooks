import React, { useState } from 'react';
import './forms.css';

const MultipleInputs = () => {
  const[person , setPerson] = useState({firstName:'',email:'',age:''})
  const [people, setPeople] = useState([]);

  const handleChange = (e) =>{
    const name  = e.target.name;
    const value = e.target.value;
    //dynamic property of object
    setPerson({...person,[name]: value})
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(person.firstName  &&  person.age && person.email){
      const newPerson = {...person , id: new Date().getTime().toString()}
      setPeople([...people,newPerson])
      setPerson({firstName:'',email:'',age:''})
    } else{
      window.alert('Please fill each and every field!!')
    }
  };
  return (
    <React.Fragment>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default MultipleInputs;