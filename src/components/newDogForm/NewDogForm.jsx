import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDog } from '../../services/dogFetches';
import { addNewDog } from '../../actions/dogActions';
import { useCurrentUser } from '../../hooks/AuthContext';

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
      <form onSubmit={handleSubmit} >
        <label>Name: 
          <input type='text' name='name' onChange={({ target }) => setName(target.value)} />
        </label>
        <label>Breed: 
          <input type='text' name='breed' onChange={({ target }) => setBreed(target.value)} />
        </label>
        <label>Temperament: 
          <input type='text' name='temperament' onChange={({ target }) => setTemperament(target.value)} />
        </label>
        <label>Color: 
          <input type='text' name='color' onChange={({ target }) => setColor(target.value)} />
        </label>
        <button>Create New Dog</button>
      </form>
    </div>
  );
}

