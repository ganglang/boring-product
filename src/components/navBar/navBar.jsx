import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './navBar.scss';
class NavBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
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
        )
    }
}

export default NavBar;