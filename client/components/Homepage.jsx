import React from 'react';
import InfoCard from './InfoCard';

function Homepage() {

  const cards = []
  for (let i = 0; i<3; i++){
    cards.push(<InfoCard />)
  }

  return (
    <div>
      {cards}
    </div>
  );
}

export default Homepage;
