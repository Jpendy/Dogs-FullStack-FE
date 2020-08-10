import { createStore } from 'redux';
import { reducer, initialState } from './reducers/appReducer';

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
