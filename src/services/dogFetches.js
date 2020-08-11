
export const getDogs = () => {
  return fetch('http://localhost:7890/api/v1/dogs/')
    .then(res => res.json());
};

export const getDogById = id => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`)
    .then(res => res.json());
};

export const postDog = dogObj => {
  return fetch('http://localhost:7890/api/v1/dogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogObj) 
  })
    .then(res => res.json());
};

export const deleteDog = id => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json());
};

export const patchDog = (id, dogObj) => {
  return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogObj) 
  })
    .then(res => res.json());
};
