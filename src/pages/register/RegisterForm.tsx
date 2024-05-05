
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert('Please fill out all fields');
      return;
    }
    console.log('Registration Data:', { username, email, password });

    setUsername('');
    setEmail('');
    setPassword('');

    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button variant='outlined' type="submit">Register</Button>
    </form>
  );
};
export default RegisterForm