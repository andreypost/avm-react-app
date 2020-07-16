import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";


export const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header>
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

          
        </section>
        <SeoMailing />
      </main>
      <Footer />
      <ModalsPro />
    </>
  )
}
