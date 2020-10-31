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
                        {/* <a href=" ">A</a>
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
                        <a href=" ">Z</a> */}
                        <HashLink to="#A" className="tabLink active" data-tab="A">A</HashLink>
                        <HashLink to="#B" className="tabLink" data-tab="B">B</HashLink>
                        <HashLink to="#C" className="tabLink" data-tab="C">C</HashLink>
                        <HashLink to="#D" className="tabLink" data-tab="D">D</HashLink>
                        <HashLink to="#E" className="tabLink" data-tab="E">E</HashLink>
                        <HashLink to="#F" className="tabLink" data-tab="F">F</HashLink>
                        <HashLink to="#G" className="tabLink" data-tab="G">G</HashLink>
                        <HashLink to="#H" className="tabLink" data-tab="H">H</HashLink>
                        <HashLink to="#I" className="tabLink" data-tab="I">I</HashLink>
                        <HashLink to="#J" className="tabLink" data-tab="J">J</HashLink>
                        <HashLink to="#K" className="tabLink" data-tab="K">K</HashLink>
                        <HashLink to="#L" className="tabLink" data-tab="L">L</HashLink>
                        <HashLink to="#M" className="tabLink" data-tab="M">M</HashLink>
                        <HashLink to="#N" className="tabLink" data-tab="N">N</HashLink>
                        <HashLink to="#O" className="tabLink" data-tab="O">O</HashLink>
                        <HashLink to="#P" className="tabLink" data-tab="P">P</HashLink>
                        <HashLink to="#Q" className="tabLink" data-tab="Q">Q</HashLink>
                        <HashLink to="#R" className="tabLink" data-tab="R">R</HashLink>
                        <HashLink to="#S" className="tabLink" data-tab="S">S</HashLink>
                        <HashLink to="#T" className="tabLink" data-tab="T">T</HashLink>
                        <HashLink to="#U" className="tabLink" data-tab="U">U</HashLink>
                        <HashLink to="#V" className="tabLink" data-tab="V">V</HashLink>
                        <HashLink to="#W" className="tabLink" data-tab="W">W</HashLink>
                        <HashLink to="#X" className="tabLink" data-tab="X">X</HashLink>
                        <HashLink to="#Y" className="tabLink" data-tab="Y">Y</HashLink>
                        <HashLink to="#Z" className="tabLink" data-tab="Z">Z</HashLink>
                    </article>
                    <article className="tabsContent glossary__articles">
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
                </section>
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}