import React from 'react'

function Modal({ isOpen, onClose, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value})
  }
  if (!isOpen) return null;
  return (
    <div className='flex flex-col bg-blue-500 rounded-lg justify-center items-center'>
      <div className='p-2'>
        <form>
          <div>
            <label>Blood Sugar</label>
            <input type='text' onChange={handleChange} name='bloodSugar' className='w-1/6 rounded-lg'/> mg/dL
          </div>
          <div>
            <label>Blood Pressure</label>
            <input type='text' onChange={handleChange} name='sysPressure' className='w-1/6 rounded-lg'/> / <input type='text' onChange={handleChange} name='diaPressure' className='w-1/6 rounded-lg'/> mmHg
          </div>
        </form>
      </div>
      <div className='flex justify-center'>
        <button onClick={onSubmit} className='bigButtons mx-2'>Submit</button>
        <button onClick={onClose} className='bigButtons mx-2'>Close</button>
      </div>
    </div>
  )
}

export default Modal
