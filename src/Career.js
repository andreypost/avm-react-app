import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
// import { ModalsPro } from "./components/ModalsPro";
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const Career = (props) => {
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
                        <li>Вакансии</li>
                    </ul>
                    <article className="textleft jobs__article marginbot4020">
                        <h1 className="marginbot2010">Вакансии</h1>
                        <p className="bold marginbot2010">"Самая хорошая работа – это высокооплачиваемое хобби." Генри Форд</p>
                        <p className="marginbot2010">Интернет-магазин АУДИО ВИДЕО МИР приглашает на работу любителей и
                        профессионалов в области Hi-Fi и Hi-End акустики, аудио и видео техники. В настоящее время открыты
                    следующие вакансии:</p>
                        <h2 className="marginbot2010">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео Техника»</h2>
                        <p className="marginbot4020">Компания «АУДИО ВИДЕО МИР» в связи с расширением отдела продаж объявляет
                    конкурс на позицию: <span className="bold">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео
                        Техника»</span> (г. Киев, возможна удаленная работа)</p>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Требования к кандидатам:</li>
                            <li>Опыт в продажах / применении Hi-Fi аудио и видео продукции</li>
                            <li>Высокий уровень культуры (письменной и устной)</li>
                            <li>Способность терпеливо и качественно взаимодействовать с клиентами, доводить сделки до конца</li>
                            <li>Умение перевести клиента из «случайного» в «постоянные»</li>
                            <li>Высшее образование</li>
                            <li>Знание компьютерной техники на уровне пользователя, основных офисных программ (Word, Excel)</li>
                            <li>Приветствуются знания устройства сайтов, умение наполнять сайт контентом</li>
                            <li>Отсутствие вредных привычек</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Функциональные обязанности:</li>
                            <li>Взаимоотношения с клиентами: переговоры, проведение встреч, выезд на объекты, заключение договоров,
                    организация доставки, поддержка длительных взаимоотношений с клиентом</li>
                            <li>Поиск новых клиентов</li>
                            <li>Документооборот продаж</li>
                            <li>Анализ рынка, поиск новых поставщиков, развитие дилерской сети</li>
                            <li>При необходимости: заполнение сайта контентом, обработка прайс-строк в Excel и
                        CMS</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Личные качества:</li>
                            <li>Ответственность и честность</li>
                            <li>Коммуникабельность</li>
                            <li>Целеустремленность и умение планировать</li>
                            <li>Внимательность и усидчивость</li>
                            <li>Умение работать в команде и соблюдать субординацию</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Условия сотрудничества:</li>
                            <li>Стабильная компания, работающая на рынке Hi-Fi и Hi-End техники уже более 15 лет</li>
                            <li>Хорошая возможность карьерного роста – в данный момент компания находится на этапе расширения</li>
                            <li>Заработная плата: ставка (по результатам собеседования) + % от чистой прибыли</li>
                            <li>Оплата телефонных разговоров</li>
                            <li>Участие в тематических конференциях и тренингах</li>
                        </ul>
                        <p className="marginbot4020">Просьба высылать развернутое резюме с пометкой в теме <span
                            className="bold">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео Техника»</span> и
                указанием уровня ожидаемой заработной платы на e-mail: <a href="mailto:sales@audiovideomir.com.ua" className="underline"> sales@audiovideomir.com.ua</a></p>
                        <h2 className="marginbot4020">Составитель обзоров по тематике «Hi-Fi Аудио и Видео Техника»</h2>
                        <p className="marginbot4020">Требуется <span className="bold">Составитель обзоров по тематике «Hi-Fi Аудио и
                    Видео Техника»</span> для наполнения интернет-магазина (г. Киев, возможна удаленная работа)</p>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Требования к кандидатам:</li>
                            <li>Опыт в составлении интернет-обзоров</li>
                            <li>Активный пользователь Hi-Fi и Hi-End аудио и видео продукции (продажа / использование / установка /
                        консультации / хобби)</li>
                            <li>Знание английского языка (выше среднего / технический)</li>
                            <li>Отсутствие вредных привычек</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Функциональные обязанности:</li>
                            <li>Составление уникальных качественных обзоров по тематике «Hi-Fi Аудио и Видео Техника» (фото, видео,
                        текст)</li>
                            <li>Перевод на русский язык зарубежных обзоров, компиляция, рерайтинг</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Личные качества:</li>
                            <li>Ответственность и исполнительность</li>
                            <li>Внимательность и аккуратность</li>
                            <li>Дисциплинированность и усидчивость</li>
                        </ul>
                        <ul className="diskOutside marginbot4020">
                            <li className="marginbot2010">Условия сотрудничества:</li>
                            <li>Стабильная компания, работающая на рынке Hi-Fi и Hi-End техники уже более 15 лет</li>
                            <li>Хорошая возможность карьерного роста – в данный момент компания находится на этапе расширения</li>
                            <li>Заработная плата: по результатам собеседования</li>
                            <li>График работы: с 09.00 до 18.00, пятидневная рабочая неделя</li>
                        </ul>
                        <p className="marginbot4020">Просьба высылать развернутое резюме с пометкой в теме <span
                            className="bold">Составитель обзоров по тематике «Hi-Fi Аудио и Видео Техника»</span> и
                указанием уровня ожидаемой заработной платы на e-mail: <a href="mailto:sales@audiovideomir.com.ua" className="underline"> sales@audiovideomir.com.ua</a></p>
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