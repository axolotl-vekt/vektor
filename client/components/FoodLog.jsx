import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Draggable from 'react-draggable';

function FoodLog(props) {
  
  // const username = props.getCookie(username); //not sure what this is -sean 20240103
  // // const username = "sean"
  // console.log("username:", username)
  const [entryData, setEntryData] = useState({
    username: "",
    date: "",
    time: "",
    bloodSugar: "",
    sysPressure: "",
    diaPressure: "",
  })

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("EntryData found at handleSubmit:", entryData)
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(entryData),
      };

      const response = await fetch('http://localhost:3000/api/entry', options)
      console.log('Entry Posted successfully ', response);
      navigate('/homepage');
    } catch (error) {
      console.error('Error in front-end:', error.message);
    }
  };

  const today = new Date();

  return (props.trigger) ? (
    <Draggable>
      <div className="entries-form-container" component="form">
        <form className='entries-form' onSubmit={handleSubmit}>
          <div className='entries'>
            <label className="dateLabel"> Date & Time: {/*today.toLocaleDateString()*/}
              <input className="inputBar" 
                    type="date"
                    name="date"
                    value={entryData.date} 
                    onChange={handleChange}/>
              <input className="inputBar" 
                  type="time"
                  name="time"
                  value={entryData.date} 
                  onChange={handleChange}/>
            </label>
            <label className='bloodSugarInput'> Blood Sugar:
              <input className="inputBar"
                  name='bloodSugar'
                  value={entryData.bloodSugar} 
                  onChange={handleChange}>
              </input> 
              <p className='paragraphBP'>mg/dL</p>
            </label>
            <label className='bloodPressure'>
              Blood Pressure:
              <input className='inputBar'
                  name='sysPressure'
                  value={entryData.sysPressure}
                  onChange={handleChange}>
              </input> 
              <p className='paragraphBP'>/</p>
              <input className='inputBar'
                  name='diaPressure'
                  value={entryData.diaPressure}
                  onChange={handleChange}>
              </input> 
              <p className='paragraphBP'>mmHg</p>
            </label>
          {/* <label>
            Time: <input value={time || ''} onChange={setTime}></input>
          </label> */}
          {/* <p>Before or After meal?</p> */}
          {/* link to where you can see the images */}
          <Link to='/foodlog'>Meal Log</Link>
          <button className='save-entry-btn' onChange={handleChange}>
            Save Entry
          </button>
          <button className='popup-close-btn' onClick={() => props.setTrigger(false)}>Close</button>
          { props.children }
        </div>
      </form>

      </div>
    </Draggable>

  ) : '';
}

export default FoodLog;
