import React from 'react';
import { Link } from 'react-router-dom';

export default class NewsCard extends React.Component {
    componentDidMount() {
        // console.log(this.props.datos)
    }
    render() {
        return (
            <div className="item news__card">
                <img src={this.props.datos.image} alt="" />
                <div className="flexcol">
                    <Link to="">{this.props.datos.title}</Link>
                    <h6>{this.props.datos.text}</h6>
                    <div className="news__viewed flexcenter justbeet">
                        <p>{this.props.datos.date}</p>
                        <p className="flexcenter"><i></i>43</p>
                        <a href="" className="news__href">Подробнее</a>
                    </div>
                </div>
            </div>
        )
    }
}