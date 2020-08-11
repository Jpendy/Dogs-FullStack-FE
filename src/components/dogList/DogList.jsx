import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs } from '../../selectors/dogSelectors';
import { deleteDog } from '../../services/dogFetches';
import styles from './DogList.css';
import { deleteDogAction } from '../../actions/dogActions';

export default function DogList() {
  const dispatch = useDispatch();
  const dogList = useSelector(getAllDogs);

  const handleClick = id => {
    deleteDog(id);
    dispatch(deleteDogAction(id));
  };

  const listElement = dogList.map(({ name, _id }, i) => (
    <li key={i} className={styles.ListItem} >

      <Link to={`/${_id}`} >
        <h3>{name}</h3>
      </Link>

      <button onClick={() => handleClick(_id)} >Delete</button>
    </li>
  ));
  return (
    <ul>
      {listElement}
    </ul>
  );
}
