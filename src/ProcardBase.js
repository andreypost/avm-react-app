import React, { useEffect } from 'react';
// import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
// import cardData from './components/cardData';
// import { ProductCard } from './components/ProductCard';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer'
import { ModalsPro } from "./components/ModalsPro";
// import photo_001 from './img/MaskGroup1.png';
// import photo_002 from './img/MaskGroup2.png';
// import photo_003 from './img/MaskGroup3.png';
// import photo_004 from './img/Image1.png';

export const ProcardBase = (props) => {
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
                <li><a href="_all_manufacturers.html">Производители &gt;</a></li>
                <li>Минисистема Marshall Acton Black</li>
            </ul>
        </section>
       
        <SeoMailing />
      </main>
      <Footer />
      <ModalsPro pathname={props.history.location.pathname} />
    </>
  )
}