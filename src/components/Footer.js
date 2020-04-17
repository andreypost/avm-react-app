import React from 'react';
import { Link } from "react-router-dom";
import photo_001 from '../img/audio_world02.png';

class Footer extends React.Component {
    componentDidMount() {
        const toggleAllLists = (elems) => {
            if (!elems) return
            for (let elem of elems) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    elem.firstElementChild.classList.toggle('none')
                    elem.lastElementChild.classList.toggle('block')
                    elem.nextElementSibling.classList.toggle('block')
                }
            }
        }
        toggleAllLists(document.querySelectorAll('.global__href'))
        document.getElementById('arrowUp').onclick = () => {
            window.scrollBy({
                top: -window.scrollY,
                behavior: 'smooth'
            })
        }
        window.addEventListener('scroll', () => {
            document.getElementById('arrowUp').hidden = document.documentElement.clientHeight / 2 > document.documentElement.scrollTop
        })
    }
    render() {
        return (
            <>
                <footer>
                    <section className="footer__section">
                        <div className="footer__desk flexcol">
                            <div className="flexbet">
                                <div>
                                    <img src={photo_001} alt="" />
                                </div>
                                <ul className="flexcenter">
                                    <li><a href="_category.html">Каталог товаров</a></li>
                                    <li><a href="_glossary.html">Глоссарий</a></li>
                                    <li><Link to="Services">Услуги</Link></li>
                                    <li><a href="_listening_room.html">Зал прослушивания</a></li>
                                    <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                                    <li><a href="_installment_plan.html">Рассрочка</a></li>
                                    <li><a href="_all_stocks.html">Акции</a></li>
                                    <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                                    <li><a href="_about_us.html">О Нас</a></li>
                                </ul>
                            </div>
                            <h6>Доставка по Киеву и Украине, России и Казахстану, Белоруссии, основные города: Алушта, Белая
                            Церковь, Бердянск, Винница, Днепродзержинск, Донецк, Евпатория, Житомир, Запорожье,
                            Ивано-Франковск, Измаил, Илльичевск, Каменец-Подольский, Керчь, Кировоград, Ковель, Краматорск,
                            Кременчуг, Кривой Рог, Лисичанск, Лубны, Луганск, Луцк, Львов, Макеевка, Мариуполь, Мелитополь,
                            Николаев, Никополь, Миргород, Могилев-Подольский, Мукачево, Нежин, Одесса, Павлоград, Полтава,
                            Ровно, Севастополь, Северодонецк, Симферополь, Славута, Смела, Сумы, Тернополь, Ужгород, Умань,
                            Феодосия, Харьков, Херсон, Хмельницький, Черкассы, Черновцы, Чернигов, Шостка, Ялта, Москва,
             Минск, Могилев, Гомель и другие.</h6>
                        </div>
                        <div className="footer__mob">
                            <div className="horizont"></div>
                            <ul>
                                <li className="global__list"><a href=" "
                                    className="global__href footer__href flexcenter">Покупателям<i></i><i></i></a>
                                    <ul>
                                        <li><a href="_category.html">Каталог товаров</a></li>
                                        <li><a href="_glossary.html">Глоссарий</a></li>
                                        <li><Link to="Services">Услуги</Link></li>
                                        <li><a href="_listening_room.html">Зал прослушивания</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="horizont"></div>
                            <ul>
                                <li className="global__list"><a href=" "
                                    className="global__href footer__href flexcenter">Информация<i></i><i></i></a>
                                    <ul>
                                        <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                                        <li><a href="_installment_plan.html">Рассрочка</a></li>
                                        <li><a href="_all_stocks.html">Акции</a></li>
                                        <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                                        <li><a href="_about_us.html">О Нас</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="horizont"></div>
                        </div>
                        <div className="footer__social flexcenter justcenter">
                            <a href=" "><i className="footer__insta"></i></a>
                            <a href=" "><i className="footer__face"></i></a>
                            <a href=" "><i className="footer__tube"></i></a>
                            <a href=" "><i className="footer__tweet"></i></a>
                        </div>
                        <h5>Copyright © 1999-2020 Pear Solution</h5>
                    </section>
                </footer>
                <i id="arrowUp" hidden=""></i>
            </>
        )
    }
}
export default Footer;
