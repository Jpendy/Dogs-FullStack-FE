import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin, fetchVerify, fetchLogout } from '../services/auth';

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (username, password) => authService(fetchSignup, username, password);
  const login = (username, password) => authService(fetchLogin, username, password);
  const logout = () => authService(fetchLogout).then(() => setCurrentUser(null));

  useEffect(() => {
    setCurrentUser(null);
    fetchVerify()
      .then(user => setCurrentUser(user))
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authLoading, authError, signup, login, logout }} >
      {children}
    </AuthContext.Provider>
  );
}
