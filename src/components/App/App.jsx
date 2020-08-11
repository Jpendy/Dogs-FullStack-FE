import React from 'react';
import MainContainer from '../../containers/MainContainer';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import DogDetailPage from '../dogDetailPage/DogDetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/:id' component={DogDetailPage} />
      </Switch>
    </Router>);
}
  
