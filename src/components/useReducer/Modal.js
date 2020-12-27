import React,{useEffect} from 'react';

const Modal = ({modalContent,closeModal})=>{

  useEffect(() => {
    setTimeout(()=>{
      closeModal()
    },2000)
  })
  return (
    <div className='alert alert-warning ' role="alert">
      {modalContent}
    </div>
  )
}

export default Modal;