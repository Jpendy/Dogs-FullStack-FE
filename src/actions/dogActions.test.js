const { setDogList, SET_DOG_LIST, addNewDog, ADD_NEW_DOG } = require('./dogActions');

describe('dog actions', () => {
  it('it makes a payload with setDogList action function', () => {
    const action = setDogList([{
      name: 'Leo',
      breed: 'Black Lab',
      temperament: 'Calm',
      color: 'Black'
    }]);    

    expect(action).toEqual({
      type: SET_DOG_LIST,
      payload: [{
        name: 'Leo',
        breed: 'Black Lab',
        temperament: 'Calm',
        color: 'Black'
      }]
    });

  });

  it('it makes a payload with setDogList action function', () => {
    const action = addNewDog([{
      name: 'Leo',
      breed: 'Black Lab',
      temperament: 'Calm',
      color: 'Black'
    }]);    

    expect(action).toEqual({
      type: ADD_NEW_DOG,
      payload: [{
        name: 'Leo',
        breed: 'Black Lab',
        temperament: 'Calm',
        color: 'Black'
      }]
    });

  });
});
