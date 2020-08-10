import React from 'react';
import { useSelector } from 'react-redux';
import { getAllDogs } from '../../selectors/dogSelectors';
import { deleteDog } from '../../services/dogFetches';

export default function DogList() {
  const dogList = useSelector(getAllDogs);

  const listElement = dogList.map(({ name, breed, temperament, color, _id }, i) => (
    <li key={i}>
      <h3>{name}</h3>
      <p>Breed: {breed}</p>
      <p>Temperament: {temperament}</p>
      <p>Color: {color}</p>
      <button onClick={() => {deleteDog(_id);}} >Delete</button>
    </li>
  ));
  return (
    <ul>
      {listElement}
    </ul>
  );
}
