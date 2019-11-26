import React,{Component} from 'react';
import NavBar from '../../components/navBar/navBar';
class Classify extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                选择
                <NavBar/>
            </div>
        )
    }
}

export default Classify;