import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../services/dogFetches';
import { setDogList } from '../actions/dogActions';
import DogList from '../components/dogList/DogList';
import NewDogForm from '../components/newDogForm/NewDogForm';

export default function MainContainer() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    getDogs()
      .then(dogs => dispatch(setDogList(dogs)));
  }, []);

  return (
    <>
      <DogList />
      <NewDogForm />
    </>
  );
}
