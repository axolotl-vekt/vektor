import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar'


function User() {
   /**Game navigation bar for the top of the website. */
  /**link to MemoryGame.jsx - which we see the memory game title plus brain image*/

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  function getCookie(name) {
    /**place the data into an array */
    const cookies = document.cookie.split('; ');
    console.log('COOKIES', cookies)
    /**iterate through the cookies array */
    for (const cookie of cookies) {
      /**checks if the array contains '=' and removes it*/
      const [cookieName, cookieValue] = cookie.split('=');
      /**if cookieName matches name, then we will return the cookieValue */
      if (cookieName === name) {
        return cookieValue;
      }
    }
    /**else return null */
    return null;
  }
  const usernameCookie = getCookie('username')
  console.log(usernameCookie)
  const getUserInfo = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ username: usernameCookie }),
      };
      console.log('getting user information for ', usernameCookie);

      const response = await fetch('http://localhost:3000/api/getUser', requestOptions);
      const data = await response.json();
      if (!response.ok) console.log('ERROR, not 200');
      console.log('async call for data', data);
      setUserInfo(data);
      console.log('user info', userInfo);
    } catch (error) {
      console.log(error, 'error accessing database');
    }
  };

  useEffect(() => {
    console.log('useEffect is working!');
    getUserInfo();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', userInfo);
  }

  return (
  <center>
    <Navbar />
    <h1>
      Welcome to Invektus!
    </h1>
    <div onSubmit={handleSubmit}>
        <label className='userInfo'><br/><br/>
          First Name:
          <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
          />
        </label><br/><br/>

        <label>
          Last Name: 
          <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleChange}
          />
        </label><br/><br/>

        <label>
          Username: 
          <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
          />
        </label><br/><br/>

        <label>
          Phone Number: 
          <input
          type="text"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
          />
        </label><br/><br/>

        <label>
          Email: 
          <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          />
        </label><br/><br/>
    <button type="submit">Save</button>
    </div>
  </center>
  )
}

export default User

{/* <div className='oneGame'>
Your Info: <br></br>
First Name: firstName<br></br>
Last Name: lastName<br></br>
Username: username<br></br>
Phone Number: phone<br></br>
Email: email<br></br>
Opt in to text messages?<br></br>
Yes No
</div> */}


//     // <div>
//     //   <Navbar />
//     //   <div>
//     //     <h1> Welcome to Invektus</h1>
//     //     <div className='oneGame'>
//     //         Your Info: <br></br>
//     //         First Name: firstName<br></br>
//     //         Last Name: lastName<br></br>
//     //         Username: username<br></br>
//     //         Phone Number: phone<br></br>
//     //         Email: email<br></br>
//     //         Opt in to text messages?<br></br>
//     //         Yes No
//     //     </div>
//     //   </div>
//     // </div>








// function User ({ userInfo }) {
//   const { firstName, lastName, username, phone } = userInfo;
//   const [optInToTextMessages, setOptInToTextMessages] = useState(false);

//   const handleOptInChange = (value) => {
//     setOptInToTextMessages(value === 'Yes');
//   };

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <h1>Welcome to Invektus</h1>
//         <div className='oneGame'>
//           <h2>Your Info:</h2>
//           <ul>
//             <li><strong>First Name:</strong> {firstName}</li>
//             <li><strong>Last Name:</strong> {lastName}</li>
//             <li><strong>Username:</strong> {username}</li>
//             <li><strong>Phone Number:</strong> {phone}</li>
//           </ul>
//           <p><strong>Opt in to text messages?</strong></p>
//           <label>
//             <input
//               type="radio"
//               value="Yes"
//               checked={optInToTextMessages}
//               onChange={() => handleOptInChange('Yes')}
//             /> Yes
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="No"
//               checked={!optInToTextMessages}
//               onChange={() => handleOptInChange('No')}
//             /> No
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }