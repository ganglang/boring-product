import React,{Component} from 'react';
import './input.scss';
class Input extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="input-group">
            {this.props.children}
        </div>
        )
    }
}

export default Input;