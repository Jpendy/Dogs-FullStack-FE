import { get, del, post, patch } from './requests';

export const getDogs = () => {
  return get('/api/v1/dogs/');
};

export const postDog = dogObj => {
  return post('/api/v1/dogs/', dogObj);
};

export const getDogById = id => {
  return get(`/api/v1/dogs/${id}`);
};

export const deleteDog = id => {
  return del(`/api/v1/dogs/${id}`);
};

export const patchDog = (id, dogObj) => {
  return patch(`/api/v1/dogs/${id}`, dogObj);
};
