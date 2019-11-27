import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Redirect,Route} from 'react-router-dom';
class AuthorizedRoute extends Component{

    constructor(props){
        super(props);
        this.state={
            Component:this.props.component
        }
    }

    render(){
        return (
            <div>
                {this.props.login.login?<Component />:<Redirect to="/login"/>}    
            </div>
        )
    }
}

export default connect(state=>({login:state.login}),{})(AuthorizedRoute);