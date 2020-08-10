import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../services/dogFetches';
import { setDogList } from '../actions/dogActions';
import DogList from '../components/dogList/DogList';
import NewDogForm from '../components/newDogForm/NewDogForm';
import { getAllDogs } from '../selectors/dogSelectors';


export default function MainContainer() {
  const dispatch = useDispatch();
  const dogs = useSelector(getAllDogs);

  useEffect(() => {
    getDogs()
      .then(dogs => dispatch(setDogList(dogs)));
  }, [dogs]);

  return (
    <>
      <DogList />
      <NewDogForm />
    </>
  );
}
