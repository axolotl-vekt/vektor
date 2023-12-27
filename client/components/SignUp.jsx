import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [ signUp, setSignUp ] = useState({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        try {
            const { name, value } = e.target;
            setSignUp({...signUp, [name]:value})
        } catch(error) {
            console.error('error occurred in extracting values from form')
        }
    }
    const handleCancel = (e) => {
        navigate('/')
    }

    const handleSubmit = async (e) => {
        try {
            const userInfo = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUp)
            })
            if (userInfo.ok) {
                navigate('/homepage')
            }
        } catch (error) {
            console.error('Error in signing up')
        }
    }
    return(
        <div>
            <div className='signUpPageContainer'>
                <div className='signUpCard'>
                    <h2 className='signUpTitle'>Create an Account</h2>
                    <form method='post' className='signUpForm' onSubmit={handleSubmit}>
                        <div >
                            <input className='signUpInput' type='text' name='firstName' placeholder='First Name' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='text' name='lastName' placeholder='Last Name' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='text' name='username' placeholder='Create Username' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='text' name='password' placeholder='Create Password' onChange={handleChange}></input>
                        </div>
                        <div className='signUpButtons'>
                            <button className='signUpSubmitBtn' type='submit'>Submit</button>
                            <button className='signUpCancelBtn' type='button' onClick={handleCancel}>Cancel</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;