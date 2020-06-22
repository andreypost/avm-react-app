import React from 'react';
import { Link } from 'react-router-dom';

export const NewsCard = (props) => {
    return (
        <div className="item news__card">
            <img src={props.datos.image} alt="" />
            <div className="flexcol">
                <Link to="">{props.datos.title}</Link>
                <h6>{props.datos.text}</h6>
                <div className="news__viewed flexcenter justbeet">
                    <p>{props.datos.date}</p>
                    <p className="flexcenter"><i></i>43</p>
                    <a href=" " className="news__href">Подробнее</a>
                </div>
            </div>
        </div>
    )
}