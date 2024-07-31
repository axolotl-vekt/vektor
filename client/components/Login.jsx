import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';


function Login() {
    const [ loginData, setLogin ] = useState({
        username:'',
        password:'',
    });

    const [ cookies, setCookies ] = useCookies(["username"]);

    const handleCookies = () => {
        //setting the cookie and setting our cookie to be valid on any URL path
        setCookies('username', loginData.username, {path: '/', secure: true})
    }

    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLogin({...loginData, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // check what route for get request for login
        try {
            const loginInfo = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(loginData)
        })
        if (loginInfo.ok) {
            handleCookies()
            navigate('/homepage')
        }
        else {
            navigate('/')
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
                    <form className='loginInputForm' onSubmit={handleSubmit}>
                        <div className='loginLabelDiv'>
                            <label >Username: </label>
                        </div>
                        <div >
                            <input className='loginInput' type='text' name='username' placeholder='Enter Username' onChange={handleChange} value= {loginData.username}></input>
                        </div>
                        <div className='loginLabelDiv'>
                            <label >Password: </label>
                        </div>
                        <div>
                            <input className='loginInput' type='password' name = 'password' placeholder='Enter Password' onChange={handleChange}
                            value = {loginData.password}></input>
                        </div>
                        <div className='loginBtn'>
                            <button type='submit'><strong>Sign in</strong></button>
                        </div>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
            <div >
                <h3 id="overlay">Vektor</h3>
                <img className='loginImg' src="https://pics.craiyon.com/2023-06-26/5c43832150134eb99cdee5fde6ffa06b.webp" alt="" />
            </div>
        </div>
    )
}
export default Login;