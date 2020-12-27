import React,{useEffect} from 'react';

const Modal = ({modalContent,closeModal})=>{

  useEffect(() => {
    setTimeout(()=>{
      closeModal()
    },2500)
  })
  return (
    <div className='alert alert-warning' role="alert">
      {modalContent}
    </div>
  )
}

export default Modal;