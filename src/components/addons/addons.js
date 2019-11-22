import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './addons.css';
class Addons extends Component{

    constructor(props){
        super(props);
        this.state={
            navStatus:false
        }
    }

    toggleNav(){
        this.setState({
            navStatus:!this.state.navStatus
        })
    }

    render(){
        return (
            <div>
                <div className="topBar" onClick="toggleNav()">切换</div>
                <ReactCSSTransitionGroup
                    transitionName="fadeLeft"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {
                        this.state.navStatus?(
                        <div>
                            <NavLink to="/home">首页</NavLink>
                            <NavLink to="/classify">分类</NavLink>
                            <NavLink to="/personal">个人中心</NavLink>
                        </div>):null
                    }
                </ReactCSSTransitionGroup>
            </div> 
        )
    }
}