import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function usePagination(totalPages) {
  const location = useLocation();
  const history = useHistory();
  const page = Number((new URLSearchParams(location.search)).get('page') || 1);

  const PageButtons = () => (
    <>
      <button disabled={page <= 1} name='previous' onClick={() => history.push(`?page=${page - 1}`)} >&lt;</button>
      <span>{`${page} / ${totalPages}`}</span>
      <button disabled={page >= totalPages} name='next' onClick={() => history.push(`?page=${page + 1}`)} >&gt;</button>
    </>
  );
  
  return { 
    page,
    PageButtons
  };
}
