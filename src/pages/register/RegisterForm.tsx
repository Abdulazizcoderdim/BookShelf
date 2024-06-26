
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
      alert('Please enter all information');
      return;
    }
    console.log('Registration Data:', { username, email, password });

    setUsername('');
    setEmail('');
    setPassword('');

    navigate('/login');
  };

  return (
    <form className='register__form' onSubmit={handleSubmit}>
      <div className='register__input'>
        <label>Username:</label>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='register__input'>
        <label>Email:</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='register__input'>
        <label>Password:</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button variant='outlined' type="submit">Register</Button>
    </form>
  );
};
export default RegisterForm