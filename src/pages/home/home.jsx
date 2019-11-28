import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewss } from '../../action/home';
import NavBar from '../../components/navBar/navBar';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNewss();
    }

    render() {
        return (
            <div >
            home
            <NavBar/>  
            </div>
        )
    }
}
export default connect(state => ({ news: state.Home.news }), { getNewss })(Home);