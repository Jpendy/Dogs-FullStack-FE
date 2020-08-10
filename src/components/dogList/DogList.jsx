import React from 'react';
import { useSelector } from 'react-redux';
import { getAllDogs } from '../../selectors/dogSelectors';

export default function DogList() {
  const dogList = useSelector(getAllDogs);

  const listElement = dogList.map(({ name, breed, temperament, color }, i) => (
    <li key={i}>
      <h3>{name}</h3>
      <p>Breed: {breed}</p>
      <p>Temperament: {temperament}</p>
      <p>Color: {color}</p>

    </li>
  ));
  return (
    <ul>
      {listElement}
    </ul>
  );
}
