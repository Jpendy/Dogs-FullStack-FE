import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/AuthContext';

export default function Header() {
  const currentUser = useCurrentUser();

  if(currentUser) return ( 
    <h3 style={{ textAlign: 'center' }} >{`Welcome ${currentUser.username}`}</h3>
  );

  return (
    <>   
      <Link to='signup' >Sign Up</Link> 
      <Link to='login' >Login</Link>   
    </>
  );
}
