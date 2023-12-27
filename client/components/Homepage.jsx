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

export default Homepage;
