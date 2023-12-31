import React from 'react';
import Cards from './Cards'
import Navbar from './Navbar'

function GameBoard() {
  return (
    <div>
      <Navbar />
      <div className='gameContainer'>
        <h1 className='gameName'>Memory Game</h1>
        <Cards />
      </div>
    </div>
    
  )
}

export default GameBoard