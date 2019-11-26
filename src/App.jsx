import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './pages/home/home';
import Personal from './pages/personal/personal';
import Classify from './pages/classify/classify';
import Login from './pages/login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/personal" component={Personal}></Route>
            <Route path="/classify" component={Classify}></Route>
            <Route path="/login" component={Login}></Route>
            <Redirect from='*' to='/home'  />
        </Switch>
      </Router>            
    </div>
  );
}

export default App;
