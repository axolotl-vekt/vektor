import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//inspo from star wars units
const useInput = ({ start }) => {
  const [value, setValue] = useState(start);
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return [value, onChange];
};


function FoodLog(props) {
  
  const username = props.getCookie('username');
  const [date, setDate] = useInput('');
  const [bloodSugar, setBloodSugar] = useInput('');
  const [sysPressure, setSysPressure] = useInput('');
  const [diaPressure, setDiaPressure] = useInput('');
  const [time, setTime] = useInput('');

  const navigate = useNavigate();
  const saveEntry = async (e) => {
    e.preventDefault();
    const body = {
      username,
      date,
      bloodSugar,
      sysPressure,
      diaPressure,
      time
    };
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      const response = await fetch('http://localhost:3000/api/entry', options)
      const data = await response.json();
      console.log('Data Posted: ', data);
      navigate('/homepage');
    } catch (error) {
        console.error('Error in front-end:', error.message);
    }
  };

  const today = new Date();

  return (props.trigger) ? (
    <div className="entries-form-container">
    <form className='entries-form' onSubmit={saveEntry}>
      <div className='entries'>
        <label className="dateLabel">
          Date: {today.toLocaleDateString()}
        </label>
        <label className='bloodSugarInput'>
          Blood Sugar:
          <input className="inputBar"
            value={bloodSugar} 
            onChange={(e)=>setBloodSugar(e.target.value)}>
          </input> <p className='paragraphBP'>mg/dL</p>
        </label>
        <label className='bloodPressure'>
          Blood Pressure:
          <input className='inputBar'
            value={sysPressure}
            onChange={(e)=>setSysPressure(e.target.value)}
          ></input> <p className='paragraphBP'>/</p>
          <input className='inputBar'
            value={diaPressure}
            onChange={(e)=>setDiaPressure(e.target.value)}
          ></input> <p className='paragraphBP'>mmHg</p>
        </label>
        {/* <label>
          Time: <input value={time || ''} onChange={setTime}></input>
        </label> */}
        <p>Before or After meal?</p>
        {/* link to where you can see the images */}
        <Link to='/foodlog'>Meal Log</Link>
        <button className='save-entry-btn' onClick={saveEntry}>
          Save Entry
        </button>
        <button className='popup-close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        { props.children }
      </div>
    </form>

    </div>
  ) : '';
}

export default FoodLog;
