import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return(
        <Router>
            <Routes>
                <Route exact path ='/login' element={<Login />}/>
                <Route exact path ='/homepage' element={<Homepage />}/>
            </Routes>
        </Router>
    )
}

export default App;
