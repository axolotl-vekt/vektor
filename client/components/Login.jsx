import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const [ loginData, setLogin ] = useState({
        username:'',
        password:'',
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLogin(...loginData, [name] =value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // check what route for get request for login
        try {
            const loginInfo = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (loginInfo.success) {
            navigate('/homepage')
        }
        else {
            navigate('/login')
        }
    } catch(error) {
        console.error('Error in fetching data ', error)
    }
 }
        
    return(
        <div className='loginPageContainer'>
            <div className='loginContainer'>
                <div className='loginCard'>
                    <h2 className='loginTitle'>Login</h2>
                    <p>Don't have an account? <Link to="signUp">SignUp</Link></p>
                    <form className='loginInputForm' onSubmit={handleSubmit}>
                        <div className='loginLabelDiv'>
                            <label >Username: </label>
                        </div>
                        <div >
                            <input className='loginInput' type='text' placeholder='Enter Username' onChange={handleChange} value= {loginData.username}></input>
                        </div>
                        <div className='loginLabelDiv'>
                            <label >Password: </label>
                        </div>
                        <div>
                            <input className='loginInput' type='text' placeholder='Enter Password' onChange={handleChange}
                            value = {loginData.password}></input>
                        </div>
                        <div className='loginBtn'>
                            <button type='submit'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;