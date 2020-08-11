import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllDogs } from '../../selectors/dogSelectors';
import { deleteDog } from '../../services/dogFetches';
import styles from './DogList.css';

export default function DogList() {
  const dogList = useSelector(getAllDogs);

  const listElement = dogList.map(({ name, _id }, i) => (
    <li key={i} className={styles.ListItem} >

      <Link to={`/${_id}`} >
        <h3>{name}</h3>
      </Link>
      
      <button onClick={() => {deleteDog(_id);}} >Delete</button>
    </li>
  ));
  return (
    <ul>
      {listElement}
    </ul>
  );
}
