import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/AuthContext';

const PrivateRoute = props => {
  const currentUser = useCurrentUser();
  if(!currentUser) return <Redirect to='login' />;

  return <Route {...props} />;
};

export default PrivateRoute;
