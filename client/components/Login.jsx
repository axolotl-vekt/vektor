import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';


function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();


    const [ cookies, setCookies ] = useCookies(["username"]);

    const handleCookies = () => {
        setCookies('username', loginData.username, {path: '/', secure: true})
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLogin({...loginData, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('login: ', username, password);
        
        try {
            const loginInfo = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        }

        const reponse = await fetch('/api/login', loginInfo);
        const data = await reponse.json();
        console.log('sent to the front', data.verified);

        if(data.verified) { 
        console.log('login success');
        //props.onFormSwitch('home');
        navigate('/homepage'); 
      }
    } catch(error) {
        console.log('err sending post request', error);
    }
 }
        
    return(
    <div className="auth-form-container" style={{transitionDelay: '100ms'}} >
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name = "username"
          placeholder="Username"
          onChange = {(e) => setUsername(e.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{userNameError}</label>
        <input
          type="password"
          name = "password"
          placeholder="Password"
          onChange = {(e) => setPassword(e.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
        <button 
          type="submit"
        >Login</button>
      </form>
        <Link to="/signup">
          <button className="link-btn">    
            No account? SignUp here!
          </button>
        </Link>
    </div>
    )
}
export default Login;