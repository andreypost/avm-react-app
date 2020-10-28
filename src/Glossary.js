import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { BoxGlossary } from './components/BoxGlossary';
import dataGlossary from './components/dataGlossary';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

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
                <section className="glossary__section textleft">
                    <h1 className="marginbot2010">Глоссарий</h1>
                    <article className="glossary__list flexcenter justcenter flexwrap textcenter">
                        <a href=" ">A</a>
                        <a href=" ">B</a>
                        <a href=" ">C</a>
                        <a href=" ">D</a>
                        <a href=" ">E</a>
                        <a href=" ">F</a>
                        <a href=" ">G</a>
                        <a href=" ">H</a>
                        <a href=" ">I</a>
                        <a href=" ">J</a>
                        <a href=" ">K</a>
                        <a href=" ">L</a>
                        <a href=" ">M</a>
                        <a href=" ">N</a>
                        <a href=" ">O</a>
                        <a href=" ">P</a>
                        <a href=" ">Q</a>
                        <a href=" ">R</a>
                        <a href=" ">S</a>
                        <a href=" ">T</a>
                        <a href=" ">U</a>
                        <a href=" ">V</a>
                        <a href=" ">W</a>
                        <a href=" ">X</a>
                        <a href=" ">Y</a>
                        <a href=" ">Z</a>
                    </article>
                    <article className="glossary__articles">
                        <BoxGlossary datos={dataGlossary[0]} />
                        <BoxGlossary datos={dataGlossary[1]} />
                        <BoxGlossary datos={dataGlossary[2]} />
                        <BoxGlossary datos={dataGlossary[3]} />
                        <BoxGlossary datos={dataGlossary[4]} />
                        <BoxGlossary datos={dataGlossary[5]} />
                        <BoxGlossary datos={dataGlossary[6]} />
                        <BoxGlossary datos={dataGlossary[7]} />
                        <BoxGlossary datos={dataGlossary[8]} />
                        <BoxGlossary datos={dataGlossary[9]} />
                        <BoxGlossary datos={dataGlossary[10]} />
                        <BoxGlossary datos={dataGlossary[11]} />
                        <BoxGlossary datos={dataGlossary[12]} />
                        <BoxGlossary datos={dataGlossary[13]} />
                        <BoxGlossary datos={dataGlossary[14]} />
                        <BoxGlossary datos={dataGlossary[15]} />
                        <BoxGlossary datos={dataGlossary[16]} />
                        <BoxGlossary datos={dataGlossary[17]} />
                        <BoxGlossary datos={dataGlossary[18]} />
                        <BoxGlossary datos={dataGlossary[19]} />
                        <BoxGlossary datos={dataGlossary[20]} />
                        <BoxGlossary datos={dataGlossary[21]} />
                        <BoxGlossary datos={dataGlossary[22]} />
                        <BoxGlossary datos={dataGlossary[23]} />
                        <BoxGlossary datos={dataGlossary[24]} />
                        <BoxGlossary datos={dataGlossary[25]} />
                    </article>
                    <nav className="pagination__global flexcenter justcenter">
                        <a className="pagination__prev" href=" "> </a>
                        <div className="pagination__list flexcenter juststart">
                            <a className="pagination__item" href=" ">1</a>
                            <p>...</p>
                            <a className="pagination__item active" href=" ">1</a>
                            <a className="pagination__item" href=" ">2</a>
                            <a className="pagination__item" href=" ">3</a>
                            <p>...</p>
                            <a className="pagination__item" href=" ">11</a>
                        </div>
                        <a className="pagination__next" href=" "> </a>
                    </nav>
                </section>
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}