import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
// import { createStore } from 'redux';
import icons from './icons.svg';
import { Header } from './components/Header';
import { HitsSection } from './components/HitsSection';
// import dataHits from './components/dataHits';
// import { CardProduct } from './components/CardProduct';
// import { CardDiscount } from './components/CardDiscount';
import dataOffer from './components/dataOffer';
import { CardOffer } from './components/CardOffer';
import dataProducers from './components/dataProducers';
import { NewsSection } from './components/NewsSection';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";
import photo_00 from './img/MaskGroup0.png';
import photo_01 from './img/MaskGroup1.png';
import photo_02 from './img/MaskGroup2.jpg';
import photo_03 from './img/MaskGroup3.jpg';
import photo_04 from './img/MaskGroup4.jpg';
import photo_05 from './img/MaskGroup5.jpg';
import photo_004 from './img/Logo_19.png';
import photo_005 from './img/Logo_20.png';
import photo_006 from './img/Logo_21.png';
import photo_007 from './img/Logo_22.png';
import photo_008 from './img/Logo_23.png';
import photo_009 from './img/Logo_24.png';
import photo_010 from './img/Logo_25.png';
// const MyCounter = (state = 0, action) => {
//   switch (action.type) {
//       case 'INCREMENT':
//           return state + 1
//       case 'DECREMENT':
//           return state - 1
//       default:
//           return state
//   }
// }
// let myStore = createStore(MyCounter)
// myStore.subscribe(() => console.log(myStore.getState()))
// myStore.dispatch({ type: 'INCREMENT' })
// myStore.dispatch({ type: 'INCREMENT' })
// myStore.dispatch({ type: 'DECREMENT' })

const Main = (props) => {
  // const handleDecriment = () => {
  //   myStore.dispatch({ type: 'DECREMENT' })
  // }
  // const handleIncrement = () => {
  //   myStore.dispatch({ type: 'INCREMENT' })
  // }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header pathname={props.history.location.pathname}>
        <Link to="Category" className="header__iconcatalog flexcenter">
          <svg>
            <use xlinkHref={`${icons}#diamonds`}>
            </use>
          </svg>
            Каталог товаров</Link>
        <></>
      </Header>
      {/* <h3 onClick={handleDecriment}>my store --</h3> */}
      {/* <h3 onClick={handleIncrement}>my store ++</h3> */}
      <main>
        <section className="banner__section flexcenter">
          <div className="nav__catalog relative">
            <ul className="nav__first">
              <li><a href=" ">Домашние кинотеатры</a>
                <ul className="nav__second">
                  <li><a href=" ">Домашний кинотеатр 5.0</a>
                    <ul className="nav__third">
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 5.1</a>
                    <ul className="nav__third">
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                  <li><a href=" ">AV ресиверы</a></li>
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Экраны для проекторов</a></li>
                  <li><a href=" ">AV процессоры</a></li>
                  <li><a href=" ">AV усилители</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                  <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                  <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Экраны для проекторов</a></li>
                  <li><a href=" ">AV процессоры</a></li>
                  <li><a href=" ">AV усилители</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                </ul>
              </li>

              <li><a href=" ">Акустические системы, HiFi/HiEnd</a>
                <ul className="nav__second">
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Экраны для проекторов</a></li>
                  <li><a href=" ">AV процессоры</a></li>
                  <li><a href=" ">AV усилители</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                  <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>

              <li><a href=" ">Стерео Системы, HiFI/HiEnd</a>
                <ul className="nav__second">
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>

              <li><a href=" ">Виниловые проигрыватели</a>
                <ul className="nav__second">
                  <li><a href=" ">Домашний кинотеатр 5.0</a>
                    <ul className="nav__third">
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 5.1</a>
                    <ul className="nav__third">
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                  <li><a href=" ">AV ресиверы</a></li>
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Экраны для проекторов</a></li>
                  <li><a href=" ">AV процессоры</a></li>
                  <li><a href=" ">AV усилители</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                  <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>

              <li><a href=" ">Кабели, HiFi/Hiend</a>
                <ul className="nav__second">
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>

              <li><a href=" ">Наушники и портатив</a>
                <ul className="nav__second">
                  <li><a href=" ">Домашний кинотеатр 5.0</a>
                    <ul className="nav__third">
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 5.1</a>
                    <ul className="nav__third">
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                  <li><a href=" ">AV ресиверы</a></li>
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Домашний кинотеатр 5.0</a></li>
                      <li><a href=" ">Домашний кинотеатр 5.1</a></li>
                      <li><a href=" ">Домашний кинотеатр 7.0</a></li>
                      <li><a href=" ">AV ресиверы</a></li>
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                      <li><a href=" ">Видеопроекторы</a></li>
                      <li><a href=" ">Экраны для проекторов</a></li>
                      <li><a href=" ">AV процессоры</a></li>
                      <li><a href=" ">AV усилители</a></li>
                      <li><a href=" ">Аксессуары</a></li>
                      <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                      <li><a href=" ">Телевизоры и видеостены</a></li>
                      <li><a href=" ">Blu - ray ресивер</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Экраны для проекторов</a></li>
                  <li><a href=" ">AV процессоры</a></li>
                  <li><a href=" ">AV усилители</a></li>
                  <li><a href=" ">Аксессуары</a></li>
                  <li><a href=" ">DVD проигрыватели и ресиверы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>

              <li><a href=" ">Профессиональное оборудование</a>
                <ul className="nav__second">
                  <li><a href=" ">Цифровые медиаплееры</a></li>
                  <li><a href=" ">Звуковые проекторы</a></li>
                  <li><a href=" ">Blu - ray проигрыватели</a>
                    <ul className="nav__third">
                      <li><a href=" ">Цифровые медиаплееры</a></li>
                      <li><a href=" ">Звуковые проекторы</a></li>
                      <li><a href=" ">Blu - ray проигрыватели</a></li>
                    </ul>
                  </li>
                  <li><a href=" ">Видеопроекторы</a></li>
                  <li><a href=" ">Телевизоры и видеостены</a></li>
                  <li><a href=" ">Blu - ray ресивер</a></li>
                </ul>
              </li>
              <li><Link to="Category" className="lastItem">Все категории</Link></li>
            </ul>
          </div>
          <div id="carouselIndex" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {[photo_00, photo_01, photo_02, photo_03, photo_04, photo_05].map((img, i) =>
                i === 0 ?
                  <div className="carousel-item active" key={img}>
                    <a href=" ">
                      <img src={img} className="d-block w-100" alt="..." />
                    </a>
                  </div> :
                  <div className="carousel-item" key={img}>
                    <a href=" ">
                      <img src={img} className="d-block w-100" alt="..." />
                    </a>
                  </div>
              )}
            </div>
            <ol className="carousel-indicators banner__imgbottom">
              <li data-target="#carouselIndex" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndex" data-slide-to="1"></li>
              <li data-target="#carouselIndex" data-slide-to="2"></li>
              <li data-target="#carouselIndex" data-slide-to="3"></li>
              <li data-target="#carouselIndex" data-slide-to="4"></li>
              <li data-target="#carouselIndex" data-slide-to="5"></li>
              <Link to="Actions" className="flexcenter" replace>Все акции</Link>
            </ol>
            <a className="carousel-control-prev" href="#carouselIndex" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndex" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <section className="header__navmob">
          <h3 className="navmob__catalogue">Каталог товаров</h3>
        </section>
        <section className="carousel__section vieded__section">
          {/* <div className="global__hgroup flexbet">
            <h2>ПРОСМОТРЕННЫЕ ТОВАРЫ</h2>
            <a href="_viewed_products.html">Все товары</a>
          </div>
          <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
            responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
          </OwlCarousel> */}
          <article className="main__addicons flexcenter alignstart flexwrap black">
            <div className="flexcol">
              <svg>
                <use xlinkHref={`${icons}#star`}></use>
              </svg>
              <h4 className="px13_580">Официальный дилер</h4>
              <p>с 1999 года</p>
            </div>
            <div className="flexcol">
              <svg>
                <use xlinkHref={`${icons}#sound`}></use>
              </svg>
              <h4 className="px13_580">Прослушивание</h4>
              <p>в новом шоу-руме</p>
            </div>
            <div className="flexcol">
              <svg>
                <use xlinkHref={`${icons}#expert`}></use>
              </svg>
              <h4 className="px13_580">Ваш личный эксперт</h4>
              <p>поможет с выбором цена/качество</p>
            </div>
            <div className="flexcol">
              <svg>
                <use xlinkHref={`${icons}#prices`}></use>
              </svg>
              <h4 className="px13_580">Доступные цены</h4>
              <p>на рынке аудио-видео техники</p>
            </div>
          </article>
          <HitsSection />
        </section>
        <article className="offer__special">
          <section className="carousel__section">
            <div className="global__hgroup flexbet">
              <h2>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
              <Link to="Actions">Все товары</Link>
            </div>
            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
              responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              {dataOffer.map((card, i) =>
                <CardOffer key={i} datos={card} />
              )}
            </OwlCarousel>
          </section>
        </article>
        <article className="producers__section">
          <section className="carousel__section">
            <div className="global__hgroup flexbet">
              <h2>ПРОИЗВОДИТЕЛИ</h2>
              <Link to="Manufacturers">Все производители</Link>
            </div>
            <OwlCarousel className="owl-carousel producers__img owl-theme" loop={true} rewind={true} margin={10} nav={false} dots={false} autoplay={true} navText={false}
              responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              {[photo_004, photo_005, photo_006, photo_007, photo_008, photo_009, photo_010].map(img =>
                <div className="item" key={img}>
                  <img src={img} alt="" />
                </div>
              )}
            </OwlCarousel>
            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
              responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              {dataProducers.map((list, index) =>
                <div className="item producers__card" key={index}>
                  {Object.values(list).map(val =>
                    <a href=" " key={val}>{val}</a>
                  )}
                </div>
              )}
            </OwlCarousel>
          </section>
        </article>
        <NewsSection />
        <SeoMailing />
      </main>
      <Footer />
      <ModalsPro pathname={props.history.location.pathname} />
    </>
  )
}
export default Main