import React, { useState } from 'react';
import { useLogin, useCurrentUser } from '../../hooks/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';
import AuthError from './AuthError';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = useLogin();

  const currentUser = useCurrentUser();
 
  if(currentUser) return <Redirect to="/dogs" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
      .then(() => history.push('/dogs'));
  };

  return (
    <>
      <AuthError />
      <form onSubmit={handleSubmit} >
        <input type='text' 
          name='username'
          value={username} 
          placeholder='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <input type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}
