import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FoodLog from './components/FoodLog';
<<<<<<< HEAD
import Quotes from './components/Quotes';
=======
import Games from './components/Games';
import MemoryGame from './components/MemoryGame';
>>>>>>> dev

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/foodlog' element={<FoodLog />} />
<<<<<<< HEAD
      <Route exact path='/quotes' element={<Quotes />} />
=======
      <Route exact path='/games' element={<Games />}/>
      <Route exact path='/memoryGame' element={<MemoryGame />} />
>>>>>>> dev
    </Routes>
  );
}

export default App;
