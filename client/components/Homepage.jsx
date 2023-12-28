import React, { useEffect, useState } from 'react';

function Homepage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(console.error)
  }, [])


  return(
  <div className="hp-body">
    <h1 className="hp-header">Homepage</h1>
    <button id="entry-btn">New Entry</button>
    <div className="entries-container">
      <button id="delete-btn">Delete</button>
      <div className="entries">
        {/* <p>Date:</p>
        <p>Blood Sugar:</p>
        <p>Blood Pressure:</p>
        <p>Before Or after Eating?</p> */}
        <form>

          <div>
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" />
          </div>
          <br></br>

          <div>
            <label htmlFor="blood-sugar">Blood Sugar:</label>
            <input type="text" id="blood-sugar" />
          </div>
          <br></br>
          <div>
            <label htmlFor="blood-pressure">Blood Pressure:</label>
            <input type="text" id="blood-sugar" />
          </div>
          <br></br>
          <div>
            <label htmlFor="food-entry">Before or After eating? <br></br> If after, log food:</label>
            <input type="text" id="food-entry" />
          </div>  

        </form>

        <button type="submit" className="submit-btn">Submit</button>

      </div>
    </div>
  </div>
  )
}

export default Homepage;
