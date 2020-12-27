import React , {useState , useReducer} from 'react';
import Modal from './Modal'

const Index = () =>{
  //variable setups
  const reducer = (state,action)=>{
    // console.log(state);
    if(action.type === 'ADD_ITEM'){
      const newPeople = [...state.people , action.payload];
      return {
        ...state,
        people:newPeople,
        isModalOpen: true,
        modalContent: 'item added'
      }
    }
    if(action.type === 'NO_ITEM'){
      return{
        ...state,
        isModalOpen:true,
        modalContent : 'Please Enter some Value'
      }
    }
    if(action.type === 'CLOSE_MODAL'){
      return {
        ...state,
        isModalOpen:false
      }
    }
    throw new Error ('no matching action type');
  }

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
          <div className='col-12 col-md-8 text-center mt-5'>
            {state.isModalOpen &&  <Modal closeModal={closeModal} modalContent={state.modalContent} />}
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
                <div className='card bg-light m-2' key={id}>
                  <h2 className=''>{name}</h2>
                  <button className='btn btn-md btn-danger' > <i class="fa fa-trash"></i> </button>
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