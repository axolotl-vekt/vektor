import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

//inspo from star wars units
const useInput = ({ start }) => {
  const [value, setValue] = useState(start);
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return [value, onChange];
};


function NewEntry(props) {
  
  const username = props.getCookie('username');
  const [image, setImage] = useState('');
  // const [date, setDate] = useInput('');
  const [bloodSugar, setBloodSugar] = useInput('');
  const [sysPressure, setSysPressure] = useInput('');
  const [diaPressure, setDiaPressure] = useInput('');
  const [time, setTime] = useInput('');
  const [fasting, setFasting] = useState(false)

  const handleFasting = (e) => {
    fasting ? setFasting(false) : setFasting(true)
  }

  const navigate = useNavigate();
  const saveEntry = async (e) => {
    e.preventDefault();
    const body = {
      username,
      image,
      date,
      bloodSugar,
      fasting,
      sysPressure,
      diaPressure,
      time
    };
    try {
      const response = await fetch('http://localhost:3000/api/entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);
      console.log('Data Posted!');
      navigate('/homepage')
    } catch (error) {
      console.error('Error in front-end:', error.message);
    }
  };

  const date = new Date();

  return (props.trigger) ? (
    <div className='bg-blue-500 w-5/12 rounded-lg'>
    <form className='entries-container p-4'>
      <div className='entries'>
        {image === '' || image === null ? ('') : 
        (<img width={250} height={250} src={image} alt='Recipe Image' />
        )}
        <label className='flex'>
          Date: {date.toLocaleDateString()}
        </label>
        <label className='flex items-center'>
          Blood Sugar:
          <input className='flex w-1/6 rounded-lg border-solid border-sky-700 m-1' value={bloodSugar || ''} onChange={setBloodSugar}></input> <p>mg/dL</p>
          <div><Checkbox color='default' onClick={handleFasting}></Checkbox>Fasting</div>
        </label>
        <label className='flex items-center'>
          Blood Pressure:
          <input className='w-1/6 rounded-lg border-solid border-sky-700 m-1'
            value={sysPressure || ''}
            onChange={setSysPressure}
          ></input> <p className='paragraphBP'>/</p>
          <input className='w-1/6 rounded-lg border-solid border-gray-600 m-1'
            value={diaPressure || ''}
            onChange={setDiaPressure}
          ></input> <p className='paragraphBP'>mmHg</p>
        </label>
        <Link to='/foodlog'>Food Log</Link>
        <div id='newEntryBtns' className='flex justify-center'>
          <button className='bigButtons mx-2' onClick={saveEntry}>
            Save Entry
          </button>
          <button className='bigButtons mx-2' onClick={() => props.setTrigger(false)}>Close</button>
          { props.children }
        </div>
      </div>
    </form>
    </div>
  ) : '';
}

export default NewEntry;
