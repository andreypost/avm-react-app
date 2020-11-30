import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { BoxGlossary } from './components/BoxGlossary';
import dataGlossary from './components/dataGlossary';
import { Footer } from './components/Footer';
// import { ModalsPro } from "./components/ModalsPro";
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const Glossary = (props) => {
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
                        <li>Глоссарий</li>
                    </ul>
                </section>
                <section id="manufacturesLinks" className="glossary__section textleft">
                    <h1 className="marginbot2010">Глоссарий</h1>
                    <article className="tabsCaption glossary__list flexcenter justcenter flexwrap textcenter">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((lit, i) =>
                            i === 0 ? <HashLink key={lit} to={`#${lit}`} className="tabLink active" data-tab={lit}>{lit}</HashLink> :
                                <HashLink key={lit} to={`#${lit}`} className="tabLink" data-tab={lit}>{lit}</HashLink>
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
            <Suspense fallback={<div>Loading...</div>}>
                <ModalsPro pathname={props.history.location.pathname} />
            </Suspense>
        </>
    )
}