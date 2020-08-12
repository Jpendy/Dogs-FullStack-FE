import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser, useLogout } from '../../hooks/AuthContext';
import styles from './Header.css';

export default function Header() {
  const currentUser = useCurrentUser();
  const logout = useLogout();

  if(currentUser) return (
    <section className={styles.HeaderLoggedIn} > 
      <h3 style={{ textAlign: 'center' }} >{`Welcome ${currentUser.username}`}</h3>
      <button onClick={logout} >Log Out</button>
    </section>
  );

  return (
    <section className={styles.HeaderLoggedOut} >   
      <Link to='signup' >Sign Up</Link> 
      <Link to='login' >Login</Link>   
    </section>
  );
}
