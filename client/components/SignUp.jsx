import React from 'react';
import { useState } from 'react'

function SignUp() {
    const [ signUp, setSignUp ] = useState({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
    })
    const handleChange = (e) => {
        e.preventDefault();
        try {
            const { name, value } = e.target;
            setSignUp(...signUp, [name]=value)
        } catch(error) {
            console.error('error occurred in extracting values from form')
        }
    }

    const handleSubmit = async (e) => {
        const userInfo = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUp)
        })
    }
    return(
        <div>
            <div>
                <form className='signUpForm' onSubmit={handleSubmit}>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;