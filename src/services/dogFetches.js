
export const getDogs = () => {
  return fetch('http://localhost:7890/api/v1/dogs/', {
    credentials: 'include'
  })
    .then(res => res.json());
};

export const getDogById = id => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    credentials: 'include'
  })
    .then(res => res.json());
};

export const postDog = (dogObj) => {
  return fetch('http://localhost:7890/api/v1/dogs/', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogObj) 
  })
    .then(res => res.json());
};

export const deleteDog = id => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  })
    .then(res => res.json());
};

export const patchDog = (id, dogObj) => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogObj) 
  })
    .then(res => res.json());
};
