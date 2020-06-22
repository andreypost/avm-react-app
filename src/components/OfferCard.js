import React from 'react';
import { Link } from 'react-router-dom';

export const OfferCard = (props) => {
    return (
        <div className="item offer__card">
            <img src={props.datos.image} alt="" />
            <div className="flexcol">
                <Link to="">{props.datos.title}</Link>
                <h6>{props.datos.text}</h6>
                <p>{props.datos.date}</p>
            </div>
        </div>
    )
}