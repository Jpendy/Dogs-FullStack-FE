import React from 'react';
import { useAuthError } from '../../hooks/AuthContext';

export default function AuthError() {
  const authError = useAuthError();
  if(!authError) return null;

  return (
    <p style={{ color: 'red' }}> {authError.message}</p>
  );
}
