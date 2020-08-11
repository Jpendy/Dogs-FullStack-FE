import React, { useContext } from 'react';

const AuthContext = React.createContext();

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};
