import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Users {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [users, setUsers] = useState<Users>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    console.log('Login Data:', users);
    setUsers({ username: '', password: '' });

    navigate('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <Input type="text" name="username" value={users.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <Input type="password" name="password" value={users.password} onChange={handleChange} />
        </div>
        <Button variant="outlined" type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;