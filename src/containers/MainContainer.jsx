import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../services/dogFetches';
import { setDogList } from '../actions/dogActions';
import DogList from '../components/dogList/DogList';
import NewDogForm from '../components/newDogForm/NewDogForm';
import usePagination from '../hooks/paginationHook';

export default function MainContainer() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(null);
  const { page, PageButtons } = usePagination(totalPages);
 
  useEffect(() => {
    getDogs(page)
      .then(({ dogs, totalPages }) => {
        dispatch(setDogList(dogs));
        setTotalPages(totalPages);
      });
  }, [page]);

  return (
    <>
      <NewDogForm />
      <PageButtons />
      <DogList />
      <PageButtons />
    </>
  );
}
