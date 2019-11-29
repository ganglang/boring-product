import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewss } from '../../action/home';
import NavBar from '../../components/navBar/navBar';
import NewsList from '../../components/newsList/newsList';
import './home.scss';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            news:[]
        }
    }

    componentWillMount() {
        this.props.getNewss();
    }

    render() {
        return (
            <div className="home-page">
                {this.props.news.length!=0?<NewsList news={this.props.news}/>:<div>新闻列表为空</div>}
                <NavBar/>  
            </div>
        )
    }
}
export default connect(state=>({...state.Home}),{getNewss})(Home);