import React,{useState,useContext} from 'react';
import data from '../../data';

const PersonContext = React.createContext();


const ContextAPI = () =>{
  const [people,setPeople] = useState(data);
  const removePerson = (id) =>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id)
    })
  }
  return(
    <PersonContext.Provider value={{removePerson , people}}>
      <section>
        <h1>Context & prop Drill</h1>
        <List />
      </section>
    </PersonContext.Provider>
  )
}

const List = () =>{
  const mainData = useContext(PersonContext);
  return(
    <>
      {mainData.people.map((person)=> {
        return <SinglePerson key={person.id}  {...person}  />
      })}
    </>
  )
};

const SinglePerson = ({id,name})=>{
  const {removePerson} = useContext(PersonContext);
  // console.log(context);
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

export default ContextAPI;
