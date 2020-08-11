
export const SET_DOG_LIST = 'SET_DOG_LIST';
export const setDogList = payload => ({
  type: SET_DOG_LIST,
  payload
});

export const ADD_NEW_DOG = 'ADD_NEW_DOG';
export const addNewDog = payload => ({
  type: ADD_NEW_DOG,
  payload
});

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDogAction = id => ({
  type: DELETE_DOG,
  payload: id
});
