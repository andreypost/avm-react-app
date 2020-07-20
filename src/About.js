import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

export const About = (props) => {
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
                        <li>О нас</li>
                    </ul>
                    <article className="htextmob_768 marginbot2010">
                        <h4>О нас</h4>
                    </article>
                    <article className="textleft aboutus__section marginbot4020">
                        <div className="flexcenter aboutus__links marginbot4020 textcenter">
                            <Link to="Sertificate">СЕРТИФИКАТ</Link>
                            <Link to="Career">ВАКАНСИИ</Link>
                            <Link to="Cooperation">СОТРУДНИЧЕСТВО</Link>
                        </div>
                        <h3 className="marginbot2010">Будущее принадлежит тем, кто верит в свою мечту и целенаправленно идет к ней!</h3>
                        <h4 className="marginbot4020"><span className="bold">Компания «АУДИО ВИДЕО МИР»</span> – это команда
                    профессионалов в области Hi-Fi и Hi-End аудио-видео техники. Уже более 20 лет мы успешно
                    консультируем, подбираем, проектируем и устанавливаем акустическое и аудиовизуальное оборудование.
                    Наша цель – приносить радость Клиенту, улучшая его настоящее или создавая для него новый мир
                    натурального звука и превосходного изображения, используя весь наш опыт и мастерство.</h4>
                        <h4 className="marginbot4020">Многолетний опыт работы позволяет нам учесть все особенности и тонкости
                        устанавливаемой техники. Мы научились точно подбирать элементы, учитывая стиль жизни Заказчика, его
                        индивидуальные пожелания и потребности, а также архитектуру, дизайн, размеры и технические
                    особенности помещений.</h4>
                        <h4 className="marginbot4020">В результате, такой тщательный подход к реализации проектов позволил нам стать
                    настоящими специалистами в гармоничном сочетании техники, человека и помещения</h4>
                        <h4 className="marginbot4020"><span className="bold">Компания «АУДИО ВИДЕО МИР»</span> претворит ваши цели и
                    желания в жизнь. Наши архитекторы и дизайнеры интерьеров помогут сотворить пространство комфорта и
                    расслабления, восхищения и удовлетворения для Вас, Вашей семьи и друзей.</h4>
                        <h4 className="marginbot4020">Наши специалисты установят оборудование на объектах любой сложности: квартиры,
                        коттеджи и пент-хаузы, офисы, магазины и супермаркеты, развлекательные центры, рестораны и бары,
                        конференц-залы, фитнесс центры и сауны, гостиницы и банки. Мы учтем все особенности помещения для
                    получения максимального качества аудио-видео эффектов от установленного оборудования.</h4>
                        <h4 className="marginbot4020">Нами остались довольны сотрудники и директора, как крупных международных
                        корпораций, так и местных компаний: “DSV”, “Prime Moving”, банк «Национальный Стандарт», игровые
                    автоматы «Максбет».</h4>
                        <h4>Мы трудимся для того, чтобы вы наслаждались результатом! :)</h4>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}