import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
    return(
        <Router>
            <Routes>
                <Route exact path ='/' element={<Login />}/>
                <Route exact path ='/homepage' element={<Homepage />}/>
            </Routes>
        </Router>
    )
}

export default App;
