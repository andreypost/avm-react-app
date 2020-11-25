import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { BoxGlossary } from './components/BoxGlossary';
import dataGlossary from './components/dataGlossary';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

export const Glossary = (props) => {
    let alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    useEffect(() => {
        window.scrollTo(0, 0)
        document.querySelector('.glossary__articles ').onclick = (e) => {
            if (e.target.tagName === 'A') {
                for (let i = 0; i < alfa.length; i++) {
                    if (alfa[i] === e.target.closest('.tabsBlock').id) dataGlossary.index = i
                }
            }
        }
    })
    return (
        <>
            <Header pathname={props.history.location.pathname}>
                <Catalogue />
                <section className="header__navmob">
                    <h3 className="navmob__catalogue">Каталог товаров</h3>
                </section>
            </Header>
            <main>
                <section>
                    <ul className="flexstart breadcrumbs flexwrap">
                        <li><Link to="/">Главная &gt;</Link></li>
                        <li>Глоссарий</li>
                    </ul>
                </section>
                <section id="manufacturesLinks" className="glossary__section textleft">
                    <h1 className="marginbot2010">Глоссарий</h1>
                    <article className="tabsCaption glossary__list flexcenter justcenter flexwrap textcenter">
                        {alfa.map((list,i) =>
                            i === 0 ? <HashLink key={list} to={`#${list}`} className="tabLink active" data-tab={list}>{list}</HashLink> :
                            <HashLink key={list} to={`#${list}`} className="tabLink" data-tab={list}>{list}</HashLink>
                        )}
                    </article>
                    <article className="tabsContent glossary__articles">
                        {dataGlossary.map((box, i) =>
                            <BoxGlossary key={box.id} datos={dataGlossary[i]} />
                        )}
                    </article>
                </section>
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}