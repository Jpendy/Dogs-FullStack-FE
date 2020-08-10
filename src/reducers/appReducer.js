import { SET_DOG_LIST } from '../actions/dogActions';

export const initialState = {
  dogs: []
};

export const reducer = (state, action) => {
  switch(action.type){
    case SET_DOG_LIST:
      return { ...state, dogs: action.payload };
    default:
      return state;
  }
}; 
