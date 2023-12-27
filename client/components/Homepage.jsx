import React from 'react';
import InfoCard from './InfoCard';

function Homepage() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(<InfoCard key={crypto.randomUUID()}/>);
  }

  return (
    <div>
      <h1 className='hp-header'>Homepage</h1>
      <div className='card-container'>{cards}</div>
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
