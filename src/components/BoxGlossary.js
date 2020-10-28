import React from 'react';
import { Link } from 'react-router-dom';

export const BoxGlossary = (props) => {
    return (
        <div className="flexcenter">
            <div>
                <img src={props.datos.image} alt="" />
            </div>
            <div>
                <Link to="GlossaryInner">{props.datos.title}</Link>
                <p>{props.datos.text}</p>
            </div>
        </div>
    )
}