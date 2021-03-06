import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './pages/home/home';
import Personal from './pages/personal/personal';
import Classify from './pages/classify/classify';
import Login from './pages/login/login';
import Tab from './pages/tab/tab';
import AuthorizedRoute from './components/authorizedRoute/authorizedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <AuthorizedRoute path="/personal" component={Personal}></AuthorizedRoute>
            <AuthorizedRoute path="/classify" component={Classify}></AuthorizedRoute>
            <Route path="/login" component={Login}></Route>
            <Route path="/tab" component={Tab}></Route>
            <Redirect from='*' to='/home'  />
        </Switch>
      </Router>            
    </div>
  );
}

export default App;
