import React,{Component} from 'react';
import './button.scss';
class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="btn-box">
            <div className="btn" onClick={this.props.touch}>
                {this.props.children}
            </div>   
        </div>
        )
    }
}

export default Button;