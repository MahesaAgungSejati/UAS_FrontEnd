// // Import React dan useState dari React library
// import React, { useState } from 'react';

// // Import CSS style sheets
// import "./Login.css"

// // Import gambar-gambar
// import user_icon from '../images/person.png'
// import email_icon from '../images/email.png'
// import password_icon from '../images/password.png'

// // Komponen Login
// const Login = () => {
//   // State untuk menyimpan username, password, dan status login
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Fungsi untuk meng-handle perubahan username
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   // Fungsi untuk meng-handle perubahan password
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Fungsi untuk meng-handle login
//   const handleLogin = () => {
//     // Perform login logic here (e.g., send request to backend API)
//     // For simplicity, we will just check if username and password are not empty
//     if (username !== "" && password !== "") {
//       setLoggedIn(true);
//       console.log("Login successful!");
//     } else {
//       console.log("Username and password are required!");
//     }
//   };

//   // Return JSX
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{loggedIn ? 'Welcome, ' + username + '!' : 'Login'}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {loggedIn ? null : (
//           <div>
//             <div className="form-group">
//               <label>Username:</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Export komponen Login
// export default Login;
