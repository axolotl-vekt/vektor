import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('=> login: ', username, password);
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
      setUserNameError("Please enter a valid username")
    }
  
    if("" === password) {
      setPasswordError("Please enter a password")
    }
  
    if (password.length < 4) {
      setPasswordError("The password must be 4 characters or longer")
    }

    try {
      const loginInfo = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      };

      const reponse = await fetch('/api/login', loginInfo);
      const data = await reponse.json();
      console.log('sent to the front', data.verified);

      if (data.verified) {
        console.log('login success');
        navigate('/homepage');
      } else {
        setUserNameError('');
        setPasswordError('Wrong Password')
      }
    } catch (error) {
      console.log('err sending post request', error);
    }
  };

  return (
    <div className="auth-form-container" style={{ transitionDelay: '100ms' }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={'inputBox'}
        />
        {userNameError && <div className="error"> {userNameError} </div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={'inputBox'}
        />
        {passwordError && <div className="error"> {passwordError} </div>}
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">
        <button className="link-btn">No account? SignUp here!</button>
      </Link>
    </div>
  );
}
export default Login;
