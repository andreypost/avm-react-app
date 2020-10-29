import React from 'react';
import { Link } from 'react-router-dom';

export const CardCategory = (props) => {
    return (
        <div className="flexcol justcenter catergory__box">
            <img src={props.datos.image} alt="" />
            <Link to="">{props.datos.title}</Link>
            <h3>(товаров: <span>{Math.floor(Math.random() * (15 - 1000 + 1)) + 1000}</span>)</h3>
        </div>
    )
}