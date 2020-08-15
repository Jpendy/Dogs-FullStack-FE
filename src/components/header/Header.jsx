import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser, useLogout } from '../../hooks/AuthContext';
import styles from './Header.css';

export default function Header() {
  const currentUser = useCurrentUser();
  const logout = useLogout();

  if(currentUser) return (
    <section className={styles.HeaderLoggedIn} > 
      <section className={styles.leftSection} >
        <Link className={styles.HomeLink} to='/dogs' >Home</Link>
        <h3 style={{ textAlign: 'center' }} >{`Welcome ${currentUser.username}`}</h3>
      </section>
      <button onClick={logout} >Log Out</button>
    </section>
  );

  return (
    <section className={styles.HeaderLoggedOut} >   
      <Link className={styles.Link}  to='signup' >Sign Up</Link> 
      <Link className={styles.Link} to='login' >Login</Link>   
    </section>
  );
}
