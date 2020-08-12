import React, { useContext } from 'react';

export const AuthContext = React.createContext();

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

// export const useIsCurrentUser = () => {
//   const currentUser = useCurrentUser();
//   currentUser && history.push('/main-container');
//   return;
// };
