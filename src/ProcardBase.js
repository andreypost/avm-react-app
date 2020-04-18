import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Link } from "react-router-dom";
import Header from './components/Header';
import cardData from './cardData';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer'
import ModalsPro from "./components/ModalsPro";
// import photo_001 from './img/MaskGroup1.png';
// import photo_002 from './img/MaskGroup2.png';
// import photo_003 from './img/MaskGroup3.png';
// import photo_004 from './img/Image1.png';

export default class ProcardBase extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return(
            <>
            <Header />
            <main>
              <section className="header__navmob">
                <h3 className="navmob__catalogue">Каталог товаров</h3>
              </section>
              <section className="carousel__section">
                <hgroup className="global__hgroup flexbet">
                  <h2>ПРОСМОТРЕННЫЕ ТОВАРЫ</h2>
                  <a href="_viewed_products.html">Все товары</a>
                </hgroup>
                <article>
                  <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
                  responsive={ {0: { items: 2 }, 768:{ items: 3 },  1024:{ items: 4 }, 1280:{ items: 5 }} }>
    
                  <ProductCard datos={cardData[0]} />
    
                  </OwlCarousel>
    
                </article>
              </section>
            </main>
            <Footer />
            <ModalsPro pathname={this.props.history.location.pathname} />
          </>
        );
    }
}