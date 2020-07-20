import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";
import photo_001 from './img/certificate.png';

export const Sertificate = (props) => {
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
                        <li><Link to="About">О Нас &gt;</Link></li>
                        <li>Сертификат</li>
                    </ul>
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Сертификат</h2>
                    </article>
                    <article className="htextmob__580 marginbot2010">
                        <h4>Сертификат</h4>
                    </article>
                    <article className="textleft certificate__section marginbot4020">
                        <h3 className="marginbot2010">Дорогие Покупатели!</h3>
                        <h4 className="marginbot2010">Ниже приведены условия использования Сертификата на скидку 10%</h4>
                        <h4 className="marginbot4020">Данный сертификат является документом на предъявителя, а значит скидкой 10%
                    смогут воспользоваться также Ваши друзья и родные.</h4>
                        <h4 className="marginbot4020">Скидка 10% действует на все товары, представленные в интернет-магазине
                    audiovideomir.com.ua, кроме виниловых пластинок и компакт-дисков.</h4>
                        <h4 className="marginbot4020">Скидка 10% не суммируется с другими скидками и акциями.</h4>
                        <h4 className="marginbot4020">Сертификат не подлежит возврату и обмену на денежные средства.</h4>
                        <h4 className="marginbot4020">После предоставления скидки сертификат изымается у предъявителя.</h4>
                        <h4 className="marginbot4020">Сертификат имеет срок действия, который указан на самом Сертификате.</h4>
                        <h4 className="marginbot4020">Компания «АУДИО ВИДЕО МИР» оставляет за собой право изменять условия
                    использования данного Сертификата путем размещения новых условий на этой странице.</h4>
                        <div className="certificate__img marginbot2010 textcenter">
                            <img src={photo_001} alt="" />
                        </div>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}