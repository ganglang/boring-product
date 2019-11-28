import React, { Component } from 'react'
import NavBar from '../../components/navBar/navBar';
import './personal.scss';
import {Drawer,Icon} from 'antd';
import BackBar from '../../components/backBar/backBar';
import MyButton from '../../components/button/button'; 
import {connect} from 'react-redux';
import {loginOut} from '../../action/login';
class Personal extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }

    onOpen=()=>{
        this.setState({
            visible:true
        })
    }

    onClose=()=>{
        this.setState({
            visible:false
        })
    }

    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        console.log("personal");
        console.log(this.props);
        return ( 
            <div className="personal-page page">
                <BackBar title="个人中心">
                    <span onClick={this.onOpen}><Icon type="unordered-list" /></span>
                </BackBar> 
                <Drawer
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer> 
                <NavBar/>
                <MyButton touch={this.props.loginOut.bind(this)}>退出登录</MyButton>
                <MyButton touch={this.goBack.bind(this)}>返回上一页</MyButton>
            </div>
        )
    }
}

export default connect(state=>({Login:state.Login}),{loginOut})(Personal);