import React from 'react';
import Cards from './Cards'
import Navbar from './Navbar'

/** 
 * Renders a link to the memory game
 * */
function MemoryGame() {
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

export default MemoryGame
