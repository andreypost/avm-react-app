import React from 'react';
import { Link } from 'react-router-dom';

export default class OfferCard extends React.Component {
    componentDidMount() {
        // console.log(this.props.datos)
    }
    render() {
        return (
            <div className="item offer__card">
                <img src={this.props.datos.image} alt="" />
                <div className="flexcol">
                    <Link to="">{this.props.datos.title}</Link>
                    <h6>{this.props.datos.text}</h6>
                    <p>{this.props.datos.date}</p>
                </div>
            </div>
        )
    }
}