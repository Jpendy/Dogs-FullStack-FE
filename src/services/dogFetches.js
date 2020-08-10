
export const getDogs = () => {
  return fetch('http://localhost:7890/api/v1/dogs/')
    .then(res => res.json());
};

export const postDog = dogObj => {
  fetch('http://localhost:7890/api/v1/dogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dogObj) 
  });
};

export const deleteDog = id => {
  fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
    method: 'DELETE'
  });
};
