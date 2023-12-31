import React, { useState } from 'react';
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
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/foodlog');
  };
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
      <FoodLog trigger={buttonPopup} setTrigger={setButtonPopup}></FoodLog>
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
