import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Login() {
    const [ loginData, setLogin ] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;

    }
        
    return(
        <div>
            <div className='loginContainer'>
                <div className='loginCard'>
                    <h2 className='loginTitle'>Login</h2>
                    <p>Don't have an account? <a href="">SignUp</a></p>
                    <form className='loginInputForm'>
                        <div className='loginLabelDiv'>
                            <label >Username: </label>
                        </div>
                        <div >
                            <input className='loginInput' type='text' onChange={handleChange}></input>
                        </div>
                        <div className='loginLabelDiv'>
                            <label >Password: </label>
                        </div>
                        <div>
                            <input className='loginInput' type='text' onChange={handleChange}></input>
                        </div>
                        <div className='loginBtn'>
                            <Link to='/homepage'>
                            <button>Sign in</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;