import React, { useState } from 'react';
import { useSignup, useCurrentUser } from '../../hooks/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();
  const history = useHistory();

  const currentUser = useCurrentUser();
  currentUser && history.push('/main-container');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password)
      .then(() => history.push('/main-container'));
  };

  return (
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
      <button>Sign Up</button>
    </form>
  );
}
