import React,{Component} from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
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
                <Button>登录</Button>
            </div>
        )
    }
}

export default Login;