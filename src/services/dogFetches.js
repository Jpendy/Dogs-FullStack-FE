import { get, del, post, patch } from './requests';

export const postDog = dogObj => post('/api/v1/dogs/', dogObj);

export const getDogs = (page = 1) => get(`/api/v1/dogs?page=${page}`);

export const getDogById = id => get(`/api/v1/dogs/${id}`);

export const patchDog = (id, dogObj) => patch(`/api/v1/dogs/${id}`, dogObj);

export const deleteDog = id => del(`/api/v1/dogs/${id}`);


