const { setDogList, addNewDog } = require('../actions/dogActions');
import { reducer } from '../reducers/appReducer';

describe('app reducer', () => {
  it('it sets dog list state with SET_DOG_LIST', () => {

    const state = {
      dogs: []
    };

    const action = setDogList([{
      name: 'Leo',
      breed: 'Black Lab',
      temperament: 'Calm',
      color: 'Black'
    }]);

    const newState = reducer(state, action);
    expect(newState).toEqual({
      dogs: [{
        name: 'Leo',
        breed: 'Black Lab',
        temperament: 'Calm',
        color: 'Black'
      }] });
  });

  it('it adds a new dog with ADD_NEW_DOG', () => {

    const state = {
      dogs: []
    };

    const action = addNewDog({
      name: 'Leo',
      breed: 'Black Lab',
      temperament: 'Calm',
      color: 'Black'
    });

    const newState = reducer(state, action);
    expect(newState).toEqual({
      dogs: [{
        name: 'Leo',
        breed: 'Black Lab',
        temperament: 'Calm',
        color: 'Black'
      }] });
  });
});
