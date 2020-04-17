import React from 'react';
// import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'
import ModalsPro from "./components/ModalsPro";
import photo_001 from './img/MaskGroup1.png';
import photo_002 from './img/MaskGroup2.png';
import photo_003 from './img/MaskGroup3.png';
import photo_004 from './img/MaskGroup0.png';
// import photo_005 from './img/audio_world.png';
// import photo_006 from './img/audio_world.png';


export default class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
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

    // $('.owl-carousel').owlCarousel({
    //     loop: false,
    //     rewind: true,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     autoplay: false,
    //     navText: false,
    //     // autoplayHoverPause: false,
        // responsive: {
        //     0: {
        //         items: 2
        //     },
        //     768: {
        //         items: 3
        //     },
        //     1024: {
        //         items: 4
        //     },
        //     1280: {
        //         items: 5
        //     }
        // }
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
                    <img src={photo_004} className="d-block w-100" alt="..." />
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
            <article>
              <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind margin={10} nav dots={false} autoplay={false} navText={false}
              responsive={ {0: { items: 2 }, 768:{ items: 3 },  1024:{ items: 4 }, 1280:{ items: 5 }} }>
              {/* <OwlCarousel className="owl-carousel owl-theme" loop={false} margin={10} nav responsive={ "0"= "{ items: 2 }", 768:{ items: 3 }, 1024:{ items: 4 }, 1280:{ items: 5 }}> */}

                <div className="item products__card" >
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        {/* <i className="products__credit"></i> */}
                        <img src="./img/Groupe464.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe465.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__video"></i> */}
                        <img src="./img/Groupe466.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe467.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare" data-product="id"></i>
                      <i className="products__love" data-product="id"></i>
                    </div>
                  </div>
                  <img src="./img/Image1.png" alt="" />
                  <div className="description__card">
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <a href=" " className="products__comments">Оставить отзыв</a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="flexcol alignstart">
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <i className="discount__log selfnend relative" data-product="">Хочу скидку!</i>
                      <a href=" " className="products__buy" data-product="">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

                <div className="item discount__card">
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        <i className="products__credit"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__gift"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__video"></i>
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare"></i>
                      <i className="products__love"></i>
                    </div>
                  </div>
                  <img src="./img/Image2.png" alt="" />
                  <div className="description__card">
                    <p className="discount__sales marginbot2010">Акция! Честный кредит до 24 месяцев. Акция! Акция!
                    Честный кредит
                    до
                        24 месяцев. Акция! Акция! Честный кредит до 24 месяцев. Акция!</p>
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <div className="products__rating flexcenter ">
                      <input type="radio" name="productName01" id="productName01_01" /><label
                        htmlFor="productName01_01"></label>
                      <input type="radio" name="productName01" id="productName01_02" /><label
                        htmlFor="productName01_02"></label>
                      <input type="radio" name="productName01" id="productName01_03" /><label
                        htmlFor="productName01_03"></label>
                      <input type="radio" name="productName01" id="productName01_04" /><label
                        htmlFor="productName01_04"></label>
                      <input type="radio" name="productName01" id="productName01_05" /><label
                        htmlFor="productName01_05"></label>
                    </div>
                    <a href=" " className="products__comments">Отзывов: <span>30</span></a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="products__info flexcol alignstart">
                      <h5 className="discount__price flexcenter relative">112 120<span>&nbsp;грн</span></h5>
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <a href=" " className="products__buy">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

                <div className="item products__card" >
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        {/* <i className="products__credit"></i> */}
                        <img src="./img/Groupe464.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe465.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__video"></i> */}
                        <img src="./img/Groupe466.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe467.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare" data-product="id"></i>
                      <i className="products__love" data-product="id"></i>
                    </div>
                  </div>
                  <img src="./img/Image1.png" alt="" />
                  <div className="description__card">
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <a href=" " className="products__comments">Оставить отзыв</a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="flexcol alignstart">
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <i className="discount__log selfnend relative" data-product="">Хочу скидку!</i>
                      <a href=" " className="products__buy" data-product="">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

                <div className="item discount__card">
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        <i className="products__credit"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__gift"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__video"></i>
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare"></i>
                      <i className="products__love"></i>
                    </div>
                  </div>
                  <img src="./img/Image2.png" alt="" />
                  <div className="description__card">
                    <p className="discount__sales marginbot2010">Акция! Честный кредит до 24 месяцев. Акция! Акция!
                    Честный кредит
                    до
                        24 месяцев. Акция! Акция! Честный кредит до 24 месяцев. Акция!</p>
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <div className="products__rating flexcenter ">
                      <input type="radio" name="productName02" id="productName02_01" /><label
                        htmlFor="productName02_01"></label>
                      <input type="radio" name="productName02" id="productName02_02" /><label
                        htmlFor="productName02_02"></label>
                      <input type="radio" name="productName02" id="productName02_03" /><label
                        htmlFor="productName02_03"></label>
                      <input type="radio" name="productName02" id="productName02_04" /><label
                        htmlFor="productName02_04"></label>
                      <input type="radio" name="productName02" id="productName02_05" /><label
                        htmlFor="productName02_05"></label>
                    </div>
                    <a href=" " className="products__comments">Отзывов: <span>30</span></a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="products__info flexcol alignstart">
                      <h5 className="discount__price flexcenter relative">112 120<span>&nbsp;грн</span></h5>
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <a href=" " className="products__buy">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

                <div className="item products__card" >
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        {/* <i className="products__credit"></i> */}
                        <img src="./img/Groupe464.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe465.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__video"></i> */}
                        <img src="./img/Groupe466.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        {/* <i className="products__gift"></i> */}
                        <img src="./img/Groupe467.png" alt="" />
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare" data-product="id"></i>
                      <i className="products__love" data-product="id"></i>
                    </div>
                  </div>
                  <img src="./img/Image1.png" alt="" />
                  <div className="description__card">
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <a href=" " className="products__comments">Оставить отзыв</a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="flexcol alignstart">
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <i className="discount__log selfnend relative" data-product="">Хочу скидку!</i>
                      <a href=" " className="products__buy" data-product="">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

                <div className="item discount__card">
                  <div className="flexbet">
                    <div className="flexcenter">
                      <div className="products__icon relative">
                        <i className="products__credit"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__gift"></i>
                        <div className="products__popup flexcol">
                          <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                          <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                          <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                          Частями"
                                </h6>
                          <h6>Доступный кредитный лимит</h6>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                      <div className="products__icon relative">
                        <i className="products__video"></i>
                        <div className="products__popup flexcol">
                          <h4>Посмотреть видео:</h4>
                          <a href=" ">Подробнее</a>
                        </div>
                      </div>
                    </div>
                    <div className="flexcenter">
                      <i className="products__compare"></i>
                      <i className="products__love"></i>
                    </div>
                  </div>
                  <img src="./img/Image2.png" alt="" />
                  <div className="description__card">
                    <p className="discount__sales marginbot2010">Акция! Честный кредит до 24 месяцев. Акция! Акция!
                    Честный кредит
                    до
                        24 месяцев. Акция! Акция! Честный кредит до 24 месяцев. Акция!</p>
                    <a href="_procard_base.html" className="products__name">Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap
                        Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</a>
                  </div>
                  <div className="flexcenter juststart">
                    <div className="products__rating flexcenter ">
                      <input type="radio" name="productName03" id="productName03_01" /><label
                        htmlFor="productName03_01"></label>
                      <input type="radio" name="productName03" id="productName03_02" /><label
                        htmlFor="productName03_02"></label>
                      <input type="radio" name="productName03" id="productName03_03" /><label
                        htmlFor="productName03_03"></label>
                      <input type="radio" name="productName03" id="productName03_04" /><label
                        htmlFor="productName03_04"></label>
                      <input type="radio" name="productName03" id="productName03_05" /><label
                        htmlFor="productName03_05"></label>
                    </div>
                    <a href=" " className="products__comments">Отзывов: <span>30</span></a>
                  </div>
                  <div className="products__div flexbet alignend">
                    <div className="products__info flexcol alignstart">
                      <h5 className="discount__price flexcenter relative">112 120<span>&nbsp;грн</span></h5>
                      <h3 className="products__price flexcenter">105
                            120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                    </div>
                    <div className="flexcol">
                      <a href=" " className="products__buy">КУПИТЬ</a>
                    </div>
                  </div>
                  <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
                </div>

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
