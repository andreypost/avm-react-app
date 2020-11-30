import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import dataGlossary from './components/dataGlossary';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

const GlossaryInner = (props) => {
    let index = localStorage.getItem('glossaryIndex') || 0
    useEffect(() => {
        window.scrollTo(0, 0)
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
                        <li><Link to="Glossary">Глоссарий &gt;</Link></li>
                        <li>{dataGlossary[index].title}</li>
                    </ul>
                </section>
                <section className="glossaryinner__section textleft">
                    <h1 className="marginbot2010">{dataGlossary[index].header}</h1>
                    <p className="marginbot2010">{new Date().getDate()} 20 марта 2019</p>
                    <div className="glossaryinner__header">
                        <img src={dataGlossary[index].image} alt="" />
                    </div>
                    <p>{dataGlossary[index].text}</p>
                    <div className="glossaryinner__imgbox flexcenter">
                        <img src={dataGlossary[index].image} alt="" />
                    </div>
                    <p>{dataGlossary[index].text}</p>
                </section>
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}
export default GlossaryInner