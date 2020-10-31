import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dataGlossary from './dataGlossary';

export const BoxGlossary = (props) => {
    useEffect(() => {
        document.querySelector('.glossary__articles ').onclick = (e) => {
            if (e.target.tagName === 'A') {
                dataGlossary[26].image = e.target.parentNode.parentNode.querySelector('img').src
                dataGlossary[26].title = dataGlossary[26].header = e.target.innerHTML
                dataGlossary[26].text = e.target.nextSibling.innerHTML
            }
        }

    })
    return (
        <div className={"tabsBlock flexcenter " + props.datos.class} id={props.datos.id} data-tab={props.datos.id}>
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