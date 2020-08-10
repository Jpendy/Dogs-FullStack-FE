const { setDogList, SET_DOG_LIST } = require('./dogActions');

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
});
