import React, { Component } from "react";
import './newsList.scss';
class NewsList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="new-box">
                    {this.props.news.map(item =>{
                        return (
                            <div className="new-item">
                                <a href={item.url} className="new-link">
                                    <div className="new-img" style={{backgroundImage:url(item.thumbnail_pic_s)}}></div>
                                    <div className="new-info">
                                        <div className="new-title">{item.title}</div>
                                        <div className="new-date-author">
                                            <div className="new-date">{item.date}</div>
                                            <div className="new-author">{item.author_name}</div>
                                        </div>
                                    </div>
                                </ a>
                            </div>
                        )
                    })} 
                </div>
        )
    }
}

export default NewsList;