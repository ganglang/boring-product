import React from 'react';
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom';
import Home from './pages/home';
import Personal from './pages/personal';
import Classify from './pages/classify';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/personal" component={Personal}></Route>
            <Route path="/classify" component={Classify}></Route>
            <Redirect from='*' to='/home'  />
        </Switch>
        <div className="navBar">
          <ul>
            <li>
              <NavLink to="/home">
                  <div className="nav-icon"></div>
                  <div className="nav-font">首页</div>
              </NavLink> 
            </li>
            <li>
              <NavLink to="/classify">
                  <div className="nav-icon"></div>
                  <div className="nav-font">选择</div>
              </NavLink> 
            </li>
            <li>
              <NavLink to="/personal">
                <div className="nav-icon"></div>
                <div className="nav-font">个人中心</div>
              </NavLink> 
            </li>
          </ul>
        </div>
      </Router>            
    </div>
  );
}

export default App;
