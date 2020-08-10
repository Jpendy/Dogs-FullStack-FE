const { getAllDogs } = require('./dogSelectors');


describe('dog selectors', () => {
  it('it gets all dogs with getAllDogs selector', () => {
    const state = {
      dogs: [{
        name: 'Leo',
        breed: 'Black Lab',
        temperament: 'Calm',
        color: 'Black'
      }]
    };
    
    const dogs = getAllDogs(state);
    expect(dogs).toEqual([{
      name: 'Leo',
      breed: 'Black Lab',
      temperament: 'Calm',
      color: 'Black'
    }]);
  });
});
