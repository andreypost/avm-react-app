import React from 'react';
import { Link } from 'react-router-dom';

export const BoxGlossary = (props) => {
    const handleSetGlossaryIndex = (e) => {
        localStorage.setItem('glossaryIndex', e.target.closest('.tabsBlock').dataset.index)
    }
    return (
        <div className={"tabsBlock flexcenter " + props.datos.class} id={props.datos.id} data-tab={props.datos.id} data-index={props.datos.index}>
            <div>
                <Link to="GlossaryInner"><img src={props.datos.image} onClick={handleSetGlossaryIndex} alt="" /></Link>
            </div>
            <div>
                <Link to="GlossaryInner" onClick={handleSetGlossaryIndex}>{props.datos.title}</Link>
                <p>{props.datos.text}</p>
            </div>
        </div>
    )
}