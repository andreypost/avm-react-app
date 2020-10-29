import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import dataGategory from './components/dataGategory';
import { CardCategory } from './components/CardCategory';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";


export const Category = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
            <li>Каталог товаров</li>
          </ul>

          <article className="category__section">
            <h1 className="marginbot4020">Каталог товаров</h1>
            <article className="box__grid">
              <CardCategory datos={dataGategory[0]} />
              <CardCategory datos={dataGategory[1]} />
              <CardCategory datos={dataGategory[2]} />
              <CardCategory datos={dataGategory[3]} />
              <CardCategory datos={dataGategory[4]} />
              <CardCategory datos={dataGategory[5]} />
              <CardCategory datos={dataGategory[6]} />
            </article>
          </article>
        </section>
        <SeoMailing />
      </main>
      <Footer />
      <ModalsPro pathname={props.history.location.pathname} />
    </>
  )
}
