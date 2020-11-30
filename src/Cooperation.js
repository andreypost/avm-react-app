import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
// import { ModalsPro } from "./components/ModalsPro";
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const Cooperation = (props) => {
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
                        <li>Сотрудничество</li>
                    </ul>
                    <article className="textleft cooperation__article marginbot4020">
                        <h1 className="marginbot2010">Сотрудничество</h1>
                        <h3 className="bold marginbot2010">Дизайнерам и архитекторам, а также застройщикам, строителям, прорабам,
                    электрикам…</h3>
                        <p className="marginbot4020">Если Вы дизайнер или архитектор, или каким-либо другим образом принимаете
                        участие в строительстве или ремонте зданий и помещений, и Вы ищете возможности дополнительного
                    заработка и интересной деятельности, то наше предложение сотрудничества – именно для Вас!</p>
                        <p className="marginbot4020">Звуковое оформление помещения целесообразно продумывать еще на этапе
                        строительства. Ведь на акустику помещения влияет не только расстановка мебели и техники, но и
                        соотношение размеров комнаты (длина, ширина, высота), наличие или отсутствие звукопоглощения,
                        посторонние шумы, отделочные материалы, и прочее. К тому же, такие элементы, как кабели
                        (акустические, электрические, межблочные, сабвуферные), ниши и короба для встраиваемой акустики,
                        коробки для регуляторов громкости, лучше заложить в помещении еще до чистовой отделки во избежание
                    дополнительных расходов на повторную отделку.</p>
                        <p className="marginbot2010">Таким образом, предлагая Вашему клиенту заранее позаботиться о звуковом
                        оформлении, а также видео-оформлении его помещения, Вы уже существенно экономите деньги, время и
                        энергию Вашего клиента. А гибкая система скидок в нашем магазине Аудио Видео Мир, станет
                    дополнительным приятным бонусом для Вас и Вашего клиента.</p>
                        <h3 className="bold marginbot2010">Корпоративным клиентам</h3>
                        <p className="marginbot4020">оптовые цены и индивидуальный подход к каждому проекту. Наши специалисты
                        всегда готовы ответить на все Ваши вопросы, и составить удобный план сотрудничества, учитывающий все
                    Ваши пожелания.</p>
                        <p className="marginbot2010">Магазин Аудио Видео Мир работает с такими организациями, как частные фирмы,
                        банки, государственные учреждения, учебные заведения, а также предприятия развлекательной сферы:
                    кинотеатры, кафе, рестораны, торговые комплексы, концертные залы.</p>
                        <h3 className="bold marginbot2010">Поставщикам</h3>
                        <p className="marginbot4020">Мы постоянно стремимся расширять ассортимент предлагаемой аудио- и
                    видеотехники. Поэтому будем рады новым взаимовыгодным предложениям сотрудничества.</p>
                        <p className="marginbot2010">Мы также рассмотрим предложения по сотрудничеству в отношении новых видов
                    товаров и областей, прямо или косвенно связанных с аудио- и видео- сферой.</p>
                        <h3 className="bold marginbot2010">Карьера с нами</h3>
                        <p className="marginbot2010">Если Вы специалист в области монтажа, инсталляции, подключения,
                        программирования или ремонта аудио- и видеотехники, и хотите работать в команде профессионалов, то
                    мы рады предложить Вам взаимовыгодное сотрудничество и постоянный поток заказов.</p>
                        <h3 className="bold marginbot2010">По вопросам сотрудничества с компанией АУДИО ВИДЕО МИР:</h3>
                        <p className="marginbot4020">Пожалуйста, присылайте Ваши вопросы и предложения на email: <a
                            href="mailto:sales@audiovideomir.com.ua" className="underline"> sales@audiovideomir.com.ua</a> с пометкой
                «Сотрудничество».</p>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <Suspense fallback={<div>Loading...</div>}>
                <ModalsPro pathname={props.history.location.pathname} />
            </Suspense>
        </>
    )
}