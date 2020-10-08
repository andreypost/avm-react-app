import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';

export const Footer = () => {
    useEffect(() => {
        document.getElementById('arrowUp').onclick = () => {
            window.scrollBy({
                top: -window.scrollY,
                behavior: 'smooth'
            })
        }
        window.addEventListener('scroll', () => {
            document.getElementById('arrowUp').hidden = document.documentElement.clientHeight / 2 > document.documentElement.scrollTop
        })
    }, [])
    return (
        <footer>
            <section className="footer__section">
                <div className="footer__desk flexcol">
                    <div className="flexbet">
                        <div>
                            <Link to="/" replace>
                                <svg>
                                    <use xlinkHref={`${icons}#logo`}></use>
                                </svg>
                            </Link>
                        </div>
                        <ul className="flexcenter">
                            <li><Link to="Category" replace>Каталог товаров</Link></li>
                            <li><a href="_glossary.html">Глоссарий</a></li>
                            <li><Link to="Services" replace>Услуги</Link></li>
                            <li><Link to="Hall" replace>Зал прослушивания</Link></li>
                            <li><Link to="Delivery" replace>Оплата и доставка</Link></li>
                            <li><Link to="Credit" replace>Рассрочка</Link></li>
                            <li><Link to="Actions" replace>Акции</Link></li>
                            <li><Link to="Warranty" replace>Гарантия и сервис</Link></li>
                            <li><Link to="About" replace>О Нас</Link></li>
                        </ul>
                    </div>
                    <p>Доставка по Киеву и Украине, России и Казахстану, Белоруссии, основные города: Алушта, Белая
                    Церковь, Бердянск, Винница, Днепродзержинск, Донецк, Евпатория, Житомир, Запорожье,
                    Ивано-Франковск, Измаил, Илльичевск, Каменец-Подольский, Керчь, Кировоград, Ковель, Краматорск,
                    Кременчуг, Кривой Рог, Лисичанск, Лубны, Луганск, Луцк, Львов, Макеевка, Мариуполь, Мелитополь,
                    Николаев, Никополь, Миргород, Могилев-Подольский, Мукачево, Нежин, Одесса, Павлоград, Полтава,
                    Ровно, Севастополь, Северодонецк, Симферополь, Славута, Смела, Сумы, Тернополь, Ужгород, Умань,
                    Феодосия, Харьков, Херсон, Хмельницький, Черкассы, Черновцы, Чернигов, Шостка, Ялта, Москва,
             Минск, Могилев, Гомель и другие.</p>
                </div>
                <div className="footer__mob">
                    <div className="horizont"></div>
                    <ul>
                        <li className="global__list"><a href=" "
                            className="global__href footer__href flexcenter">Покупателям<i></i><i></i></a>
                            <ul>
                                <li><Link to="Category" replace>Каталог товаров</Link></li>
                                <li><a href="_glossary.html">Глоссарий</a></li>
                                <li><Link to="Services" replace>Услуги</Link></li>
                                <li><Link to="Hall" replace>Зал прослушивания</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="horizont"></div>
                    <ul>
                        <li className="global__list"><a href=" "
                            className="global__href footer__href flexcenter">Информация<i></i><i></i></a>
                            <ul>
                                <li><Link to="Delivery" replace>Оплата и доставка</Link></li>
                                <li><Link to="Credit" replace>Рассрочка</Link></li>
                                <li><Link to="Actions" replace>Акции</Link></li>
                                <li><Link to="Warranty" replace>Гарантия и сервис</Link></li>
                                <li><Link to="About" replace>О Нас</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="horizont"></div>
                </div>
                <div className="footer__social flexcenter justcenter">
                    <a href=" ">
                        <svg>
                            <use xlinkHref={`${icons}#insta`}></use>
                        </svg>
                    </a>
                    <a href=" ">
                        <svg>
                            <use xlinkHref={`${icons}#facebook`}></use>
                        </svg>
                    </a>
                    <a href=" ">
                        <svg>
                            <use xlinkHref={`${icons}#youtube`}></use>
                        </svg>
                    </a>
                    <a href=" ">
                        <svg>
                            <use xlinkHref={`${icons}#telegram`}></use>
                        </svg>
                    </a>
                </div>
                <p>Copyright © 1999-2020 Pear Solution</p>
            </section>
            <i id="arrowUp" hidden=""></i>
        </footer>
    )
}
