import React, { useEffect, Suspense, lazy } from 'react';
// import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import dataHits from './components/dataHits';
// import { ProductCard } from './components/ProductCard';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer'
// import { ModalsPro } from "./components/ModalsPro";
// import photo_001 from './img/MaskGroup1.png';
// import photo_002 from './img/MaskGroup2.png';
// import photo_003 from './img/MaskGroup3.jpg';
// import photo_004 from './img/Image1.png';
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const ProcardBase = (props) => {
  let index = localStorage.getItem('cardIndex') || 0
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const handle = () => {
  //   console.log(localStorage.getItem('cardIndex'))
  //   localStorage.removeItem('cardIndex')
  // }
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
                <li><Link to="Category">Каталог товаров &gt;</Link></li>
                <li>{dataHits[index].title}</li>
            </ul>
        </section>
       
        <SeoMailing />
      </main>
      <Footer />
      <Suspense fallback={<div className="header__shadow block"></div>}>
        <ModalsPro pathname={props.history.location.pathname} />
      </Suspense>
    </>
  )
}