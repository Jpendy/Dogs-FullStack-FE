
export const getDogs = () => {
  return fetch('http://localhost:7890/api/v1/dogs/')
    .then(res => res.json());
};
