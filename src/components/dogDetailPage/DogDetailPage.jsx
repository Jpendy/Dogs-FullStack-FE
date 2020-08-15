import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogById, patchDog, deleteDog } from '../../services/dogFetches';
import { deleteDogAction } from '../../actions/dogActions';
import styles from './DogDetailPage.css';

export default function DogDetailPage() {
  const dispatch = useDispatch();
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

  const handleClick = () => {
    deleteDog(id);
    dispatch(deleteDogAction(id));
  };

  return (
    <>
      <section className={styles.DogSection} >
        <h3>{dog.name}</h3>
        <p>Breed: {dog.breed}</p>
        <p>Temperament: {dog.temperament}</p>
        <p>Color: {dog.color}</p>
      </section>
      
      <form className={styles.Form} onSubmit={handleSubmit} >
        <input placeholder='name' type='text' value={name} name='name' onChange={({ target }) => setName(target.value)} />
        <input placeholder='breed' type='text' value={breed} name='breed' onChange={({ target }) => setBreed(target.value)} />
        <input placeholder='temperament' type='text' value={temperament} name='temperament' onChange={({ target }) => setTemperament(target.value)} />
        <input placeholder='color' type='text' value={color} name='color' onChange={({ target }) => setColor(target.value)} />
        <button>Update Dog</button>
      </form>
      <button  onClick={handleClick} >Delete Dog</button>
    </>
  );
}
