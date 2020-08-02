import React from 'react';
import { Link } from 'react-router-dom';

export const CardPromo = (props) => {
    return (
        <div className="promo__offer flexcol">
            <div className="flexcenter">
                <img src={props.datos.image} alt="" />
            </div>
            <div className="textleft promo__offerheader">
                <div className="flexcol promo__description">
                    <Link to="">{props.datos.title}</Link>
                    <h5>{props.datos.text}</h5>
                </div>
                <div className="flexcenter justbeet promo__href">
                    <p>{props.datos.valid}</p>
                    <a href=" ">Подробнее</a>
                </div>
            </div>
        </div>
    )
}