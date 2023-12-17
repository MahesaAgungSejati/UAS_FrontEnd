import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginRegister.css";
import Register from './Register';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigasi ke halaman '/home'
    history.push('/i/home');

    alert('Login successful!');
  };

  const Register = () => {
    // Navigasi ke halaman pendaftaran (gantilah '/register' dengan rute yang sesuai)
    history.push('/Registers');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome back!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      <button type="submit" className="custom-button">Sign In</button>
      <p>Don't have an account? <span onClick={Register}>Sign Up</span></p>
    </form>
  );
};

export default LoginRegister;
