import React from 'react'

function Modal({ isOpen, onClose, children, onSubmit }) {
  if (!isOpen) return null;
  return (
    <div className='flex flex-col bg-blue-500 rounded-lg place-content-center'>
      {children}
        <div className='content-center'>
          <button onClick={onSubmit} className='modalBtn'>Submit</button>
          <button onClick={onClose} className='modalBtn'>Close</button>
        </div>
    </div>
  )
}

export default Modal
