import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Header from './components/Header';
import cardData from './cardData';
import offerData from './offerData';
import ProductCard from './components/ProductCard';
import DiscountCard from './components/DiscountCard';
import OfferCard from './components/OfferCard';
import Footer from './components/Footer';
import ModalsPro from "./components/ModalsPro";
import photo_001 from './img/MaskGroup1.png';
import photo_002 from './img/MaskGroup2.png';
import photo_003 from './img/MaskGroup3.png';
// import photo_004 from './img/Image1.png';
// import photo_005 from './img/audio_world.png';
// import photo_006 from './img/audio_world.png';


export default class Main extends React.Component {
  componentDidMount() {
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
    //   $('.owl-carousel.producers__img').owlCarousel({
    //     loop: true,
    //     rewind: true,
    //     margin: 10,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     navText: false,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         768: {
    //             items: 3
    //         },
    //         1024: {
    //             items: 4
    //         },
    //         1280: {
    //             items: 5
    //         }
    //     }
    // })

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
  }
  render() {
    return (
      <>
        <Header />
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
            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
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
          </section>
          <section className="carousel__section">
            <div id="tabsMainPage">
              <div className="tabs__caption global__hgroup flexcenter justbeet">
                <hgroup className="flexbet">
                  <h2 className="tab active" data-tab="hits" data-href="_bestsellers.html">ХИТ ПРОДАЖ</h2>
                  <h2 className="tab" data-tab="sales" data-href="_all_stocks.html">АКЦИИ</h2>
                  <h2 className="tab" data-tab="novelty" data-href="_new_items.html">НОВИНКИ</h2>
                  <h2 className="tab" data-tab="stocks" data-href="_markdown.html">УЦЕНКА</h2>
                </hgroup>
                <a href="_bestsellers.html">Все товары</a>
              </div>
              <div className="tabs__content">
                <article className="tabs__block active" data-tab="hits">
                  <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
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
                </article>
                <article className="tabs__block" data-tab="sales">
                  <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
                    responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                    <ProductCard datos={cardData[7]} />
                    <DiscountCard datos={cardData[6]} />
                    <ProductCard datos={cardData[5]} />
                    <DiscountCard datos={cardData[4]} />
                    <ProductCard datos={cardData[3]} />
                    <DiscountCard datos={cardData[2]} />
                    <ProductCard datos={cardData[1]} />
                    <DiscountCard datos={cardData[0]} />
                  </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="novelty">
                  <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
                    responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                    <DiscountCard datos={cardData[1]} />
                    <ProductCard datos={cardData[2]} />
                    <DiscountCard datos={cardData[3]} />
                    <ProductCard datos={cardData[4]} />
                    <DiscountCard datos={cardData[5]} />
                    <ProductCard datos={cardData[6]} />
                    <DiscountCard datos={cardData[7]} />
                    <ProductCard datos={cardData[0]} />
                  </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="stocks">
                  <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
                    responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                    <DiscountCard datos={cardData[0]} />
                    <ProductCard datos={cardData[7]} />
                    <DiscountCard datos={cardData[6]} />
                    <ProductCard datos={cardData[5]} />
                    <DiscountCard datos={cardData[4]} />
                    <ProductCard datos={cardData[3]} />
                    <DiscountCard datos={cardData[2]} />
                    <ProductCard datos={cardData[1]} />
                  </OwlCarousel>
                </article>
              </div>
            </div>
          </section>
          <article className="offer__special">
            <section className="carousel__section">
              <hgroup className="global__hgroup flexbet">
                <h2>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
                <a href="_category.html">Все товары</a>
              </hgroup>
              <article>
                <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
                  responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                  <OfferCard datos={offerData[0]} />
                  <OfferCard datos={offerData[1]} />
                  <OfferCard datos={offerData[2]} />
                  <OfferCard datos={offerData[3]} />
                  <OfferCard datos={offerData[4]} />
                  <OfferCard datos={offerData[5]} />
                  <OfferCard datos={offerData[6]} />
                  <OfferCard datos={offerData[7]} />
                </OwlCarousel>
              </article>
            </section>
          </article>


          <article className="mailing__article">
            <section>
              <form action="" id="mailingForm" className="flexbet">
                <hgroup>
                  <h2>ПОДПИСАТЬСЯ НА РАССЫЛКУ</h2>
                  <h3>Хотите первым узнавать об акциях и распродажах?</h3>
                </hgroup>
                <input type="text" placeholder="Имя" required />
                <input type="email" placeholder="Email" required />
                <button form="mailingForm">ПОДПИСАТЬСЯ</button>
              </form>
            </section>
          </article>
        </main>
        <Footer />
        <ModalsPro pathname={this.props.history.location.pathname} />
      </>
    );
  }
}
