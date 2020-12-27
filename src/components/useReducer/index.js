import React , {useState , useReducer} from 'react';
import Modal from './Modal'
import './try.css'
import reducer from "./reducer"
const Index = () =>{
  const defaultState ={
      people:[],
      isModalOpen : false,
      modalContent : ''
    }
  //hooks
  const [name , setName] = useState('')
  const [state ,dispatch] = useReducer(reducer,defaultState)
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = {
        id: new Date().getTime().toString(),
        name 
      }
      dispatch({type: 'ADD_ITEM',payload:newItem})
      setName('')
    } else{
      dispatch({type:'NO_ITEM'})
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  //jsx
  return (
    <React.Fragment>
      <div className='container' >
        <div className='row'>
            <div className='col-12'>
              {state.isModalOpen &&  <Modal closeModal={closeModal} modalContent={state.modalContent} />}
            </div>
          <div className='col-12 col-md-8 text-center mt-5'>
            <form onSubmit={handleSubmit} className='mt-2'>
              <div className='form-group' >
                <label className='form-label mr-2'>Enter Data</label>
                < input  type='text' 
                          value={name}
                          onChange={(e)=>setName(e.target.value)}/>
              </div>
            <button type='submit' className='btn btn-md btn-danger'>ADD</button>
            </form>
            {state.people.map((person)=>{
              const {id,name} = person
              return(
                <div className='list-group'>
                  <div className='list-group-item bg-light mt-1' key={id}>
                      <h2>
                        <span className='item-text float-left'>
                          {name}
                        </span>
                        <span className='float-right'>
                          <button className='btn btn-md btn-danger' 
                                  onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}> <i className='fa fa-times'></i> </button>
                        </span>
                      </h2>
                  </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Index;