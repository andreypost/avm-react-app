import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';

export const Catalogue = () => {
    useEffect(() => {
        const forbidScrollNav = (elem) => {
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
            <article className="header__listindex relative">
                <Link to="Category" className="header__iconcatalog flexcenter" replace>
                    <svg>
                        <use xlinkHref={`${icons}#diamonds`}></use>
                    </svg>
                                Каталог товаров</Link>
                <div className="noneDesk header__navlist">
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
                            <li><Link to="Category" className="lastItem" replace>Все категории</Link></li>
                        </ul>
                    </div>
                </div>
            </article>
            <div className="header__shadow"></div>
        </>
    )
}
