import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";
import photo_001 from './img/contacticon_01.png';
import photo_002 from './img/contacticon_02.png';
import photo_003 from './img/contacticon_03.png';

export const Contacts = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
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
                        <li>Контакты</li>
                    </ul>
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Контактная информация</h2>
                    </article>
                    <article className="htextmob__580 marginbot2010">
                        <h4>Контакты</h4>
                    </article>
                    <article className="textleft contacts__section marginbot4020">
                        <div className="contacts__attention marginbot4020">
                            <h3>Внимание!</h3>
                            <h3>Это важное объявление о особых графиках-праздники и т.д.</h3>
                        </div>
                        <div className="contacts__address marginbot4020">
                            <h2 className="marginbot2010">Адрес офиса Адрес шоурума:</h2>
                            <div className="flexstart">
                                <img src={photo_001} alt="" />
                                <div>
                                    <h3>03191 г.Киев </h3>
                                    <h3>ул. Максимовича, 26</h3>
                                    <h4>* Просим заранее согласовывать время визита с менеджером</h4>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__workmode marginbot4020">
                            <h2 className="marginbot2010">Режим работы:</h2>
                            <div className="flexstart">
                                <img src={photo_002} alt="" />
                                <div>
                                    <h3>График приема онлайн заявок - <span className="bold">24/7</span></h3>
                                    <h3>График работы кол-центра - <span className="bold">09:00 - 22:00</span></h3>
                                    <h3>График работы шоу-рума - <span className="bold">10:00 - 19:00</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__showroom marginbot4020">
                            <h3>Так как ассортимент интернет-магазина очень широк - мы не можем разместить в шоу-руме.</h3>
                            <h3>Поэтому желательно согласовывать Ваш визит заранее.</h3>
                        </div>
                        <div className="contacts__delivery flexstart marginbot4020">
                            <img src={photo_003} alt="" />
                            <div>
                                <h3>Доставка товара по Киеву: с <span className="bold">09:00 до 22:00</span> все дни недели</h3>
                                <h3>Доставка товара по Украине: по режиму работы транспортных компаний, <a href=" ">детальнее</a>
                                </h3>
                            </div>
                        </div>
                        <article className="contacts__social">
                            <div className="contacts__call">
                                <h2>Контактные телефоны</h2>
                                <a href="tel:0509309378">(050) 930-93-78</a>
                                <a href="tel:0677608203">(067) 760-82-03</a>
                                <a href="tel:0630301967">(063) 030-19-67</a>
                                <a href="tel:0442277684">(044) 227-76-84</a>
                            </div>
                            <div className="contacts__mass">
                                <h2>Мессенджеры</h2>
                                <a href="tel:">audiovideomir1</a>
                                <a href="tel:">Audiovideomir</a>
                                <a href="tel:0674467700">0674467700</a>
                            </div>
                            <div className="contacts__mail">
                                <h2>Email</h2>
                                <a href="mailto:sales@audiovideomir.com.ua">sales@audiovideomir.com.ua</a>
                            </div>
                        </article>
                        <article className="contacts__form textcenter">
                            <form action="" id="feedbackForm">
                                <hgroup>
                                    <h1>ФОРМА ОБРАТНОЙ СВЯЗИ</h1>
                                    <h4 className="marginbot2010">Если у Вас возникли какие-либо вопросы, пожелания или предложения,
                                а также жалобы или претензии, напишите нам об этом, пожалуйста</h4>
                                    <h4>Мы постараемся решить Ваш вопрос в кратчайшие сроки.</h4>
                                </hgroup>
                                <label htmlFor="name">Имя</label>
                                <input type="text" name="name" placeholder="Юрий" required="" />
                                <label htmlFor="phone">Номер телефона</label>
                                <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required="" />
                                <label htmlFor="comment">Комментарий</label>
                                <textarea name="comment" rows="5" className="flexcenter"></textarea>
                                <button form="feedbackForm">ЗАПИСАТЬСЯ</button>
                            </form>
                        </article>
                        <article className="flexcenter widthDesk">
                            <iframe frameBorder="0" height="420" marginHeight="0" marginWidth="0" scrolling="no"
                                src="https://maps.google.com/maps?width=1364&amp;height=420&amp;hl=en&amp;q=%D1%83%D0%BB.%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87%D0%B0%2C%2026+(%D0%90%D1%83%D0%B4%D0%B8%D0%BE%20%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%20%D0%9C%D0%B8%D1%80)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                width="1364" title="mapAddress"></iframe>
                        </article>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}