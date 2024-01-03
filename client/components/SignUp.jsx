import React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (data) => {
        data.preventDefault();

        try{
          const reqOpts = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, password, firstName, lastName})
          };

          const reponse = await fetch('/api/signup', reqOpts);
          const data = await reponse.json();
          
          console.log('=> req sent to front', data);
          console.log('=> res data.verified', data.verified);
    
          if(data.verified) { 
            console.log('login success');
            //props.onFormSwitch('home');
            navigate('/homepage'); 
          }
        } catch (error) {
          console.log('err getting database');
        }
      };

    return(
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit"
        >Register</button>
      </form>
      <Link to="/login">
        <button
        className="link-btn" 
        >I made a terrible mistake, I have an account!
        </button>
        </Link>
    </div>
    )
}

export default SignUp;