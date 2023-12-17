import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Logika pendaftaran bisa ditambahkan di sini

    // Navigasi ke halaman '/home' setelah pendaftaran berhasil
    history.push('/i/home');

    alert('Registration successful!');
  };

  const handleSignInClick = () => {
    // Navigasi kembali ke halaman login
    history.push('/');
  };

  return (
    <form className="lr-form-container" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
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
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        required
      />
      <button type="submit" className="alternative-button">Sign Up</button>
      <p>Already have an account? <span onClick={handleSignInClick}>Sign In</span></p>
    </form>
  );
};

export default Register;
