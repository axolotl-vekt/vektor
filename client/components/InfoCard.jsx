import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function InfoCard() {







  return (
    <div className='entries-container'>
      Entries
      <div className='entries'>
        <p>Date:</p>
        <p>Blood sugar:</p>
        <p>Blood Pressure:</p>
        <p>Time:</p>
        <p>Before or After meal?</p>
        <Link to="/foodlog">Log Meal</Link>
      </div>
    </div>
  );
}

export default InfoCard;
