import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);


  return (
    <AuthContext.Provider value={{ currentUser }} >

    </AuthContext.Provider>
  );
}
