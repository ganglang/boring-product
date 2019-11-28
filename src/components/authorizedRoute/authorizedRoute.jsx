import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Redirect,Route} from 'react-router-dom';
class AuthorizedRoute extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let Component=this.props.component; //可以拿到传过来要渲染的组件
        //console.log("auth-login:"+this.props.login.login);
        //console.log("auth-path0:"+this.props.path);
        let login=this.props.Login.login;
        //console.log(this.props);
        //console.log("auth-route"+JSON.stringify(this.props));
        return (
            //此种写法正确
            <Route render={ props=>{
               return login?
               <Component {...props}/>:
               <Redirect to={{"pathname":"/login",state:{from:props.location}}}/>
            }}>          
            </Route>

            //此种写法亦正确,但在Component组件里，返回上一页的this.props.history.goBack();无法使用
            /*<div>
                {login?
                <Component {...this.props}/>:
                <Redirect to={{"pathname":"/login",state:{from:this.props.location}}}/>}
            </div>*/

            //此种写法不对
            /*<Route render={ props=>{
                console.log("path0:"+this.props.path); //可以拿到AuthorizedRoute的path属性
                return login?
                <Component {...props}/>:
                <Redirect to="/login" {...props}/>
            }}>          
            </Route>*/ //在Redirect组件里传props过去，在login页面是无法拿到想传过去的props的

            
        )
    }
}

export default connect(state=>({Login:state.Login}),{})(AuthorizedRoute);