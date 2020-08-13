import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDog } from '../../services/dogFetches';
import { addNewDog } from '../../actions/dogActions';
import { useCurrentUser } from '../../hooks/AuthContext';
import styles from './newDogForm.css';

export default function NewDogForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [temperament, setTemperament] = useState('');
  const [color, setColor] = useState('');

  const currentUser = useCurrentUser();

  const handleSubmit = e => {
    e.preventDefault();

    postDog({
      user: currentUser._id,
      name,
      breed,
      temperament,
      color
    })
      .then(dog => dispatch(addNewDog(dog)));
  };

  return (
    <div>
      <form className={styles.Form} onSubmit={handleSubmit} >
        <input placeholder='name' type='text' name='name' onChange={({ target }) => setName(target.value)} />
        <input placeholder='breed' type='text' name='breed' onChange={({ target }) => setBreed(target.value)} />
        <input placeholder='temperament' type='text' name='temperament' onChange={({ target }) => setTemperament(target.value)} />
        <input placeholder='color' type='text' name='color' onChange={({ target }) => setColor(target.value)} />
        <button>Create New Dog</button>
      </form>
    </div>
  );
}

