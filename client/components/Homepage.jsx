import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import InfoCard from './InfoCard';
import FoodLog from './FoodLog';
import SugarGraph from './SugarGraph';
import BloodPressureGraph from './BloodPressureGraph'
import Navbar from './Navbar'

function Homepage() {


  const cards = [];
  // for (let i = 0; i < 3; i++) {
  //   cards.push(<InfoCard key={crypto.randomUUID()}/>);
  // }
  const [buttonPopup, setButtonPopup] = useState(false);
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/homepage/bloodsugar')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const formattedData = data.map(item => {
        const dateObject = new Date(item.date);
        const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
        const formattedDate = dateObject.toLocaleString('en-US', options);
        return {...item, date: formattedDate}
      })
      setData(formattedData)
    })
    .catch(console.log('Error displaying entries on homepage'))
  })
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/foodlog');
  };
  function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
  
    return null;
  }
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='graphs'>
        <SugarGraph />
        <BloodPressureGraph />
      </div>
      <button id='newEntry-btn' onClick={() => setButtonPopup(true)}>New Entry</button>
      <div className='card-container'>{cards}</div>
      <FoodLog trigger={buttonPopup} setTrigger={setButtonPopup} getCookie={getCookie}></FoodLog>
      <div className='entriesContainer'>
        {data.map(item => (
          <div key={item._id} className='entriesHomepage'>
            <div>{item.date}</div>
            <div>Blood Sugar: {item.bloodSugar} mg/dL</div>
            <div>Blood Pressure: {item.sysPressure} / {item.diaPressure} mmHg</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function Homepage() {
//   return(
//   <div>
//     <h1 className="hp-header">Homepage</h1>
//     <div className="entries-container">Entries
//       <div className="entries">
//         <p>Date:</p>
//         <p>Blood sugar:</p>
//         <p>Blood Pressure:</p>
//         <p>Time:</p>
//         <p>Before or After meal?</p>
//       </div>
//     </div>
//   </div>
//   )
// }

export default Homepage;
