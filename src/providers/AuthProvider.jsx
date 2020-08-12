import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin, fetchVerify } from '../services/auth';

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const authService = (serviceFn, ...args) => {
    return serviceFn(...args)
      .then(user => setCurrentUser(user));
  };

  const signup = (username, password) => authService(fetchSignup, username, password);
  const login = (username, password) => authService(fetchLogin, username, password);

  useEffect(() => {
    setCurrentUser(null);
    fetchVerify()
      .then(user => user === 'undefined' ? setCurrentUser(user) : setCurrentUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, login }} >
      {children}
    </AuthContext.Provider>
  );
}
