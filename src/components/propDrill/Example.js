import React,{useState} from 'react';
import data from '../../data';

const PropDrill = () =>{
  const [people,setPeople] = useState(data);
  const removePerson = (id) =>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id)
    })
  }
  return(
    <section>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({people , removePerson}) =>{
  return(
    <>
      {people.map((person)=> {
        return <SinglePerson key={person.id}  {...person} removePerson={removePerson} />
      })}
    </>
  )
};

const SinglePerson = ({id,name,removePerson})=>{
  return (
    <div className='list-group'>
      <h2 className='list-group-item mt-2'>
        <span className='item-text float-left'>
          {name}
        </span>
        <span className='float-right'>
          <button className='btn btn-md btn-danger' 
                  onClick={()=>removePerson(id)}> <i className='fa fa-times'></i> </button>
        </span>
      </h2>
    </div>
  )
}

export default PropDrill;
