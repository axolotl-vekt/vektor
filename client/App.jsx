import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';

function App() {
    return(
        <Router>
            <Routes>
                <Route exact path ='/' element={<Login />}/>
                <Route exact path='/homepage' element={<Homepage />} />
            </Routes>
        </Router>
    )
}

export default App;
