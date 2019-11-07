import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewss } from '../action/home'
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
            </div>
        )
    }
}
export default connect(state => ({ news: state.home.news }), { getNewss })(Home);