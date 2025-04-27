import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'madhu' && password === 'honey') {
      onLoginSuccess();
    } else {
      setError('Oops! Wrong credentials, try again!');
    }
  };

  return (
    <div className="login-container">
      <h2>🎉 Friendship, Fun & Birthdays Await! 🎂</h2>
      <p className="intro-text">Welcome to the special place where memories are made, and celebrations never end! 😄</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your awesome username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (shh... it's a secret! 😉)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login & Celebrate!</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
