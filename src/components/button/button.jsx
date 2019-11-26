import React,{Component} from 'react';
import './button.scss';
class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="btn-box">
            <div className="btn">
                {this.props.children}
            </div>   
        </div>
        )
    }
}

export default Button;