import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import icons from './icons.svg';
import { Header } from './components/Header';
import { HitsSection } from './components/HitsSection';
import cardData from './components/cardData';
import { ProductCard } from './components/ProductCard';
import { DiscountCard } from './components/DiscountCard';
import offerData from './offerData';
import { OfferCard } from './components/OfferCard';
import { NewsSection } from './components/NewsSection';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";
import photo_001 from './img/MaskGroup1.png';
import photo_002 from './img/MaskGroup2.png';
import photo_003 from './img/MaskGroup3.png';
import photo_004 from './img/Logo_19.png';
import photo_005 from './img/Logo_20.png';
import photo_006 from './img/Logo_21.png';
import photo_007 from './img/Logo_22.png';
import photo_008 from './img/Logo_23.png';

export const Main = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const showContentTabs = (container) => {
      if (!container) return
      let tabs = container.querySelector('.tabs__caption'),
        currentTab = container.querySelector('.active'),
        content = container.querySelector('.tabs__content'),
        currentContent = content.querySelector('.active')
      tabs.onclick = (e) => {
        let tab = e.target.closest('.tab')
        if (!tab || tab.classList.contains('active')) return
        let blocks = content.querySelectorAll('.tabs__block')
        for (let block of blocks) {
          if (block.dataset.tab === tab.dataset.tab) {
            block.classList.add('active')
            currentContent.classList.remove('active')
            currentContent = block
            if (container.querySelector('A')) {
              container.querySelector('A').href = tab.dataset.href
            }
          }
        }
        currentTab.classList.remove('active')
        currentTab = tab
        currentTab.classList.add('active')
      }
    }
    showContentTabs(document.getElementById('tabsMainPage'))
    const forbidScrollNav = (elem) => {
      if (!elem) return
      let uls = elem.querySelectorAll('ul'),
        second = elem.querySelectorAll('.nav__second'),
        third = elem.querySelectorAll('.nav__third'),
        secondLinks = elem.querySelectorAll('.nav__second>li>a')
      for (let ul of uls) {
        ul.previousElementSibling.classList.add('active')
      }
      for (let dos of second) {
        dos.onmouseover = () => {
          document.body.style.overflowY = 'hidden'
          document.body.style.paddingRight = `${6}px`
          dos.onmouseout = () => {
            document.body.style.overflowY = ''
            document.body.style.paddingRight = `${0}px`
          }
        }
      }
      const addMargin = () => {
        for (let a of secondLinks) {
          a.classList.add('marginRight')
        }
      }
      const removeMargin = () => {
        for (let a of secondLinks) {
          a.classList.remove('marginRight')
        }
      }
      const addRight = () => {
        for (let tres of third) {
          tres.style.right = 40.35 + '%'
        }
      }
      const removeRight = () => {
        for (let tres of third) {
          tres.style.right = 40 + '%'
        }
      }
      for (let tres of third) {
        tres.onmouseover = () => {
          for (let dos of second) {
            dos.style.overflowY = 'hidden'
          }
          addMargin()
          addRight()
          tres.onmouseout = (e) => {
            for (let dos of second) {
              dos.style.overflowY = 'scroll'
            }
            removeMargin()
            removeRight()
          }
        }
      }
    }
    forbidScrollNav(document.querySelector('.nav__first'))
  }, [])
  return (
    <>
      <Header>
        <Link to="Category" className="header__iconcatalog flexcenter">
          <svg>
            <use xlinkHref={`${icons}#diamonds`}>
            </use>
          </svg>
            Каталог товаров</Link>
        <></>
      </Header>
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
              <div className="carousel-item active">
                <a href=" ">
                  <img src={photo_001} className="d-block w-100" alt="..." />
                </a>
              </div>
              <div className="carousel-item">
                <a href=" ">
                  <img src={photo_002} className="d-block w-100" alt="..." />
                </a>
              </div>
              <div className="carousel-item">
                <a href=" ">
                  <img src={photo_003} className="d-block w-100" alt="..." />
                </a>
              </div>
              <div className="carousel-item">
                <a href=" ">
                  <img src={photo_001} className="d-block w-100" alt="..." />
                </a>
              </div>
              <div className="carousel-item">
                <a href=" ">
                  <img src={photo_002} className="d-block w-100" alt="..." />
                </a>
              </div>
              <div className="carousel-item">
                <a href=" ">
                  <img src={photo_003} className="d-block w-100" alt="..." />
                </a>
              </div>
            </div>
            <ol className="carousel-indicators banner__imgbottom">
              <li data-target="#carouselIndex" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndex" data-slide-to="1"></li>
              <li data-target="#carouselIndex" data-slide-to="2"></li>
              <li data-target="#carouselIndex" data-slide-to="3"></li>
              <li data-target="#carouselIndex" data-slide-to="4"></li>
              <li data-target="#carouselIndex" data-slide-to="5"></li>
              <a href="_all_stocks.html" className="flexcenter">Все акции</a>
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
        <section className="carousel__section">
          <hgroup className="global__hgroup flexbet">
            <h2>ПРОСМОТРЕННЫЕ ТОВАРЫ</h2>
            <a href="_viewed_products.html">Все товары</a>
          </hgroup>
          <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
            responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
            <ProductCard datos={cardData[0]} />
            <DiscountCard datos={cardData[1]} />
            <ProductCard datos={cardData[2]} />
            <DiscountCard datos={cardData[3]} />
            <ProductCard datos={cardData[4]} />
            <DiscountCard datos={cardData[5]} />
            <ProductCard datos={cardData[6]} />
            <DiscountCard datos={cardData[7]} />
          </OwlCarousel>
          <article className="main__addicons flexcenter alignstart flexwrap">
            <div className="main__dialer flexcol">
              <div><i></i></div>
              <h4>Официальный дилер</h4>
              <h5>с 1999 года</h5>
            </div>
            <div className="main__room flexcol">
              <div><i></i></div>
              <h4>Прослушивание</h4>
              <h5>в новом шоу-руме</h5>
            </div>
            <div className="main__expert flexcol">
              <div><i></i></div>
              <h4>Ваш личный эксперт</h4>
              <h5>поможет с выбором цена/качество</h5>
            </div>
            <div className="main__prices flexcol">
              <div><i></i></div>
              <h4>Доступные цены</h4>
              <h5>на рынке аудио-видео техники</h5>
            </div>
          </article>
          <HitsSection />
        </section>
        <article className="offer__special">
          <section className="carousel__section">
            <hgroup className="global__hgroup flexbet">
              <h2>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
              <Link to="Category">Все товары</Link>
            </hgroup>
            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
              responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              <OfferCard datos={offerData[0]} />
              <OfferCard datos={offerData[1]} />
              <OfferCard datos={offerData[2]} />
              <OfferCard datos={offerData[0]} />
              <OfferCard datos={offerData[1]} />
              <OfferCard datos={offerData[2]} />
              <OfferCard datos={offerData[0]} />
              <OfferCard datos={offerData[1]} />
              <OfferCard datos={offerData[2]} />
            </OwlCarousel>
          </section>
        </article>
        <article className="producers__section">
          <section className="carousel__section">
            <hgroup className="global__hgroup flexbet">
              <h2>ПРОИЗВОДИТЕЛИ</h2>
              <a href="_all_manufacturers.html">Все производители</a>
            </hgroup>
            <OwlCarousel className="owl-carousel producers__img owl-theme" loop={true} rewind={true} margin={10} nav={false} dots={false} autoplay={true} navText={false}
              responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              <div className="item">
                <img src={photo_004} alt="" />
              </div>
              <div className="item">
                <img src={photo_005} alt="" />
              </div>
              <div className="item">
                <img src={photo_006} alt="" />
              </div>
              <div className="item">
                <img src={photo_007} alt="" />
              </div>
              <div className="item">
                <img src={photo_008} alt="" />
              </div>
              <div className="item">
                <img src={photo_004} alt="" />
              </div>
              <div className="item">
                <img src={photo_005} alt="" />
              </div>
              <div className="item">
                <img src={photo_006} alt="" />
              </div>
            </OwlCarousel>
            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
              responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
              <div className="item producers__card">
                <a href=" ">A</a>
                <a href=" ">Accurate Audio</a>
                <a href=" ">Accustic Arts</a>
                <a href=" ">Acer</a>
                <a href=" ">Acoustic Energy</a>
                <a href=" ">Acoustic Revive</a>
                <a href=" ">Acoustic Solid</a>
              </div>
              <div className="item producers__card">
                <a href=" ">B</a>
                <a href=" ">B&W</a>
                <a href=" ">Bang & Olufsen</a>
                <a href=" ">Barco</a>
                <a href=" ">Barefoot Sound</a>
                <a href=" ">BC Acoustique</a>
                <a href=" ">BDI</a>
              </div>
              <div className="item producers__card">
                <a href=" ">C</a>
                <a href=" ">Cabasse</a>
                <a href=" ">Cambridge Audio</a>
                <a href=" ">Campfire Audio</a>
                <a href=" ">Canon</a>
                <a href=" ">Canton</a>
                <a href=" ">Cardas</a>
              </div>
              <div className="item producers__card">
                <a href=" ">D</a>
                <a href=" ">Dali</a>
                <a href=" ">Datasat</a>
                <a href=" ">Davis</a>
                <a href=" ">Definitive Technology</a>
                <a href=" ">Dell</a>
                <a href=" ">Denon </a>
              </div>
              <div className="item producers__card">
                <a href=" ">E</a>
                <a href=" ">E-MU</a>
                <a href=" ">EAR Yoshino</a>
                <a href=" ">Earthquake</a>
                <a href=" ">Ecosse</a>
                <a href=" ">EgglestonWorks</a>
                <a href=" ">Elac</a>
              </div>
              <div className="item producers__card">
                <a href=" ">F</a>
                <a href=" ">Fender</a>
                <a href=" ">Fibaro</a>
                <a href=" ">FIIO</a>
                <a href=" ">FilmoScope</a>
                <a href=" ">Finite Elemente</a>
                <a href=" ">Fischer Audio</a>
              </div>
              <div className="item producers__card">
                <a href=" ">G</a>
                <a href=" ">Gamut</a>
                <a href=" ">Gauder Akustic</a>
                <a href=" ">Genelec</a>
                <a href=" ">GigaWatt</a>
                <a href=" ">Goertz</a>
                <a href=" ">Gold Note</a>
              </div>
              <div className="item producers__card">
                <a href=" ">H</a>
                <a href=" ">Hamilex</a>
                <a href=" ">Hannl Vinyl Care</a>
                <a href=" ">Hannspree</a>
                <a href=" ">Harbeth</a>
                <a href=" ">Harman Kardon</a>
                <a href=" ">Harman Kardon Multimedia</a>
              </div>
              <div className="item producers__card">
                <a href=" ">I</a>
                <a href=" ">iBasso</a>
                <a href=" ">Ibiza</a>
                <a href=" ">ICE</a>
                <a href=" ">iEast</a>
                <a href=" ">IFI</a>
                <a href=" ">Imerge</a>
              </div>
              <div className="item producers__card">
                <a href=" ">J</a>
                <a href=" ">Jadis</a>
                <a href=" ">JAMO</a>
                <a href=" ">Jarre</a>
                <a href=" ">JBL</a>
                <a href=" ">Jbl Multimedia</a>
                <a href=" ">JBL Pro</a>
              </div>
              <div className="item producers__card">
                <a href=" ">K</a>
                <a href=" ">Kalista</a>
                <a href=" ">KEF</a>
                <a href=" ">Kennerton</a>
                <a href=" ">Kenwood</a>
                <a href=" ">Kimber Kable</a>
                <a href=" ">Kinera</a>
              </div>
              <div className="item producers__card">
                <a href=" ">L</a>
                <a href=" ">L.K.S. Audio</a>
                <a href=" ">Lars && Ivan</a>
                <a href=" ">Lasmex</a>
                <a href=" ">Lautsenn</a>
                <a href=" ">Lector</a>
                <a href=" ">Lehmannaudio</a>
              </div>
              <div className="item producers__card">
                <a href=" ">M</a>
                <a href=" ">Mac Audio</a>
                <a href=" ">Magico</a>
                <a href=" ">Magnat</a>
                <a href=" ">Magnum Dynalab</a>
                <a href=" ">Manley</a>
                <a href=" ">Marantz</a>
              </div>
              <div className="item producers__card">
                <a href=" ">N</a>
                <a href=" ">NAD</a>
                <a href=" ">Nagaoka</a>
                <a href=" ">Naim</a>
                <a href=" ">Nakamichi</a>
                <a href=" ">Nativ</a>
                <a href=" ">NBS</a>
              </div>
              <div className="item producers__card">
                <a href=" ">O</a>
                <a href=" ">Octave</a>
                <a href=" ">Oehlbach</a>
                <a href=" ">Okki Nokki</a>
                <a href=" ">Olive</a>
                <a href=" ">OmniMount</a>
                <a href=" ">Onkyo</a>
              </div>
              <div className="item producers__card">
                <a href=" ">P</a>
                <a href=" ">Panasonic</a>
                <a href=" ">Paradigm</a>
                <a href=" ">Parasound</a>
                <a href=" ">Partington</a>
                <a href=" ">Pass Labs</a>
                <a href=" ">Pathos</a>
              </div>
              <div className="item producers__card">
                <a href=" ">Q</a>
                <a href=" ">Q Acoustics</a>
                <a href=" ">QLS</a>
                <a href=" ">QSC</a>
                <a href=" ">Quad</a>
                <a href=" ">Questyle</a>
              </div>
              <div className="item producers__card">
                <a href=" ">R</a>
                <a href=" ">Radiotehnika</a>
                <a href=" ">Radius</a>
                <a href=" ">RBH</a>
                <a href=" ">Real Cable</a>
                <a href=" ">Rega</a>
                <a href=" ">REL</a>
              </div>
              <div className="item producers__card">
                <a href=" ">S</a>
                <a href=" ">S.M.S.L</a>
                <a href=" ">SAEC</a>
                <a href=" ">Samsung</a>
                <a href=" ">Sanyo</a>
                <a href=" ">Schnepel</a>
                <a href=" ">Schroers & Schroers</a>
              </div>
              <div className="item producers__card">
                <a href=" ">T</a>
                <a href=" ">T+A</a>
                <a href=" ">T-Peos</a>
                <a href=" ">Taga Harmony</a>
                <a href=" ">Tannoy</a>
                <a href=" ">Tascam</a>
                <a href=" ">Teac</a>
              </div>
              <div className="item producers__card">
                <a href=" ">U</a>
                <a href=" ">uCube</a>
                <a href=" ">Ultralink</a>
                <a href=" ">Ultrasone</a>
                <a href=" ">Unison Research</a>
                <a href=" ">Urbanears</a>
                <a href=" ">URC</a>
              </div>
              <div className="item producers__card">
                <a href=" ">V</a>
                <a href=" ">V-Moda</a>
                <a href=" ">VAC</a>
                <a href=" ">Van Den Hul</a>
                <a href=" ">Velodyne</a>
                <a href=" ">Vestax</a>
                <a href=" ">Vibrapod</a>
              </div>
              <div className="item producers__card">
                <a href=" ">W</a>
                <a href=" ">Wadia</a>
                <a href=" ">Wharfedale</a>
                <a href=" ">Whizzer</a>
                <a href=" ">WHT</a>
                <a href=" ">Wilson Audio</a>
                <a href=" ">Wilson-Benesch</a>
              </div>
              <div className="item producers__card">
                <a href=" ">X</a>
                <a href=" ">XLO</a>
              </div>
              <div className="item producers__card">
                <a href=" ">Y</a>
                <a href=" ">Yamaha</a>
                <a href=" ">Yba</a>
                <a href=" ">Your Day</a>
                <a href=" ">YUIN</a>
                <a href=" ">YuLong</a>
              </div>
              <div className="item producers__card">
                <a href=" ">Z</a>
                <a href=" ">Zappiti</a>
                <a href=" ">Zesto Audio</a>
                <a href=" ">Zingali</a>
                <a href=" ">ZMF</a>
              </div>
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
