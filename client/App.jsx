import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FoodLog from './components/FoodLog';
import Games from './components/Games';
import MemoryGame from './components/MemoryGame';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/homepage" element={<Homepage />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/foodlog" element={<FoodLog />} />
      <Route exact path="/games" element={<Games />} />
      <Route exact path="/memoryGame" element={<MemoryGame />} />
=======
      <Route exact path='/' element={<Login />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/foodlog' element={<FoodLog />} />
      <Route exact path='/games' element={<Games />}/>
      <Route exact path='/memoryGame' element={<MemoryGame />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
>>>>>>> 5399c7ee6420fe0a7fa076d97493ecd8a65d0aac
    </Routes>
  );
}

export default App;
