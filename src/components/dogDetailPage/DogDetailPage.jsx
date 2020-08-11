import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDogById, patchDog, deleteDog } from '../../services/dogFetches';

export default function DogDetailPage() {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [temperament, setTemperament] = useState('');
  const [color, setColor] = useState('');


  useEffect(() => {
    getDogById(id)
      .then(dog => {
        setDog(dog);
        setName(dog.name);
        setBreed(dog.breed);
        setTemperament(dog.temperament);
        setColor(dog.color);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    patchDog(id, {
      name,
      breed,
      temperament,
      color
    })
      .then(dog => setDog(dog));
  };


  return (
    <>
      <h3>{dog.name}</h3>
      <p>Breed: {dog.breed}</p>
      <p>Temperament: {dog.temperament}</p>
      <p>Color: {dog.color}</p>

      <form onSubmit={handleSubmit} >
        <label>Name:
          <input type='text' value={name} name='name' onChange={({ target }) => setName(target.value)} />
        </label>
        <label>Breed: 
          <input type='text' value={breed} name='breed' onChange={({ target }) => setBreed(target.value)} />
        </label>
        <label>Temperament: 
          <input type='text' value={temperament} name='temperament' onChange={({ target }) => setTemperament(target.value)} />
        </label>
        <label>Color: 
          <input type='text' value={color} name='color' onChange={({ target }) => setColor(target.value)} />
        </label>
        <button>Update Dog</button>
      </form>
      <button  onClick={() => {deleteDog(id);}} >Delete Dog</button>
    </>
  );
}
