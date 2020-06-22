import React from 'react';
// import { Link } from "react-router-dom";
import Header from './components/Header';
import { Catalogue } from './components/Catalogue';
import SeoMailing from './components/SeoMailing';
import Footer from './components/Footer';
import ModalsPro from "./components/ModalsPro";


export default class Category extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <Header>
          <Catalogue />
          <section className="header__navmob">
              <h3 className="navmob__catalogue">Каталог товаров</h3>
          </section>
        </Header>
        <main>
          <SeoMailing />
        </main>
        <Footer />
        <ModalsPro />
      </>
    );
  }
}
