import React from 'react';

function Homepage() {
  return(
  <div>
    <h1 className="hp-header">Homepage</h1>
    <div className="entries-container">Entries
      <div className="entries">
        <p>Date:</p>
        <p>Blood sugar:</p>
        <p>Blood Pressure:</p>
        <p>Time:</p>
        <p>Before or After meal?</p>
      </div>
    </div>
  </div>
  )
}

export default Homepage;
