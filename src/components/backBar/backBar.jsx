import React,{Component} from 'react';
import {Icon} from 'antd';
import './backBar.scss';
class BackBar extends Component{
    constructor(props){
        super(props);
    }

    back=()=>{
        this.props.history.goBack();
    }

    render(){
        return (
            <div className="back-bar">
                <span className="icon" onClick={this.back}><Icon type="left" /></span>
                {this.props.title}
                <span className="other">{this.props.children}</span>
            </div>
        )
    }
}

export default BackBar;