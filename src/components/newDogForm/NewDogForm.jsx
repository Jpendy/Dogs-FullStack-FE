import React, { useState } from 'react';
import { postDog } from '../../services/dogFetches';

export default function NewDogForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [temperament, setTemperament] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    postDog({
      name,
      breed,
      temperament,
      color
    });
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

