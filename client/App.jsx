import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
    return(
        <Router>
            <Routes>
                <Route exact path ='/' element={<Login />}/>
                <Route exact path='/homepage' element={<Homepage />} />
                <Route exact path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default App;
