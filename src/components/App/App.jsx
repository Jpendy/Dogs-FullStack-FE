import React from 'react';
import MainContainer from '../../containers/MainContainer';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import DogDetailPage from '../dogDetailPage/DogDetailPage';
import PrivateRoute from '../../components/auth/PrivateRoute';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/signup' component={Signup} />
        <PrivateRoute exact path='/main-container' component={MainContainer} />
        <PrivateRoute exact path='/main-container/:id' component={DogDetailPage} />
      </Switch>
    </Router>);
}
  
