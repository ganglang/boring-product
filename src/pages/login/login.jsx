import React,{Component} from 'react';
import Input from '../../components/input/input';
import MyButton from '../../components/button/button';
import {loginIn} from '../../action/login';
import {connect} from 'react-redux';
import './login.scss';
class Login extends Component{
    constructor(props){
        super(props);
    }

    backFrom= ()=>{
        let fromPath = this.props.location.state.from.pathname; //获取from的路径
        this.props.history.push(fromPath); //路由跳转   
    }

    render(){
        return (
            <div className="login-page">
                <div className="center">
                <div className="input-box">
                    <Input>
                        <div className="label">用户名</div>
                        <input type="text" placeholder="请填写用户名"/>
                    </Input>
                    <Input>
                        <div className="label">密码</div>
                        <input type="password" placeholder="请填写密码"/>
                    </Input>
                </div>
                <MyButton touch={this.props.loginIn.bind(this,this.backFrom)}>登录</MyButton>
                </div> 
            </div>
        )
    }
}

export default connect(state=>({Login:state.Login}),{loginIn})(Login);