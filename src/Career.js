import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

export const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Header>
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
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Вакансии</h2>
                    </article>
                    <article className="htextmob__580 marginbot2010">
                        <h4>Вакансии</h4>
                    </article>
                    <article className="textleft jobs__section marginbot4020">
                        <h3 className="marginbot2010">"Самая хорошая работа – это высокооплачиваемое хобби." Генри Форд</h3>
                        <h4 className="marginbot2010">Интернет-магазин АУДИО ВИДЕО МИР приглашает на работу любителей и
                        профессионалов в области Hi-Fi и Hi-End акустики, аудио и видео техники. В настоящее время открыты
                    следующие вакансии:</h4>
                        <h2 className="marginbot2010">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео Техника»</h2>
                        <h4 className="marginbot4020">Компания «АУДИО ВИДЕО МИР» в связи с расширением отдела продаж объявляет
                    конкурс на позицию: <span className="bold">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео
                        Техника»</span> (г. Киев, возможна удаленная работа)</h4>
                        <h4 className="marginbot2010">Требования к кандидатам:</h4>
                        <h5>Опыт в продажах / применении Hi-Fi аудио и видео продукции</h5>
                        <h5>Высокий уровень культуры (письменной и устной)</h5>
                        <h5>Способность терпеливо и качественно взаимодействовать с клиентами, доводить сделки до конца</h5>
                        <h5>Умение перевести клиента из «случайного» в «постоянные»</h5>
                        <h5>Высшее образование</h5>
                        <h5>Знание компьютерной техники на уровне пользователя, основных офисных программ (Word, Excel)</h5>
                        <h5>Приветствуются знания устройства сайтов, умение наполнять сайт контентом</h5>
                        <h5 className="marginbot4020">Отсутствие вредных привычек</h5>
                        <h4 className="marginbot2010">Функциональные обязанности:</h4>
                        <h5>Взаимоотношения с клиентами: переговоры, проведение встреч, выезд на объекты, заключение договоров,
                    организация доставки, поддержка длительных взаимоотношений с клиентом</h5>
                        <h5>Поиск новых клиентов</h5>
                        <h5>Документооборот продаж</h5>
                        <h5>Анализ рынка, поиск новых поставщиков, развитие дилерской сети.</h5>
                        <h5 className="marginbot4020">При необходимости: заполнение сайта контентом, обработка прайс-строк в Excel и
                    CMS</h5>
                        <h4 className="marginbot2010">Личные качества:</h4>
                        <h5>Ответственность и честность</h5>
                        <h5>Коммуникабельность</h5>
                        <h5>Целеустремленность и умение планировать</h5>
                        <h5>Внимательность и усидчивость</h5>
                        <h5 className="marginbot4020">Умение работать в команде и соблюдать субординацию</h5>
                        <h4 className="marginbot2010">Условия сотрудничества:</h4>
                        <h5>Стабильная компания, работающая на рынке Hi-Fi и Hi-End техники уже более 15 лет</h5>
                        <h5>Хорошая возможность карьерного роста – в данный момент компания находится на этапе расширения</h5>
                        <h5>Заработная плата: ставка (по результатам собеседования) + % от чистой прибыли</h5>
                        <h5>Оплата телефонных разговоров</h5>
                        <h5 className="marginbot4020">Участие в тематических конференциях и тренингах</h5>
                        <h4 className="marginbot4020">Просьба высылать развернутое резюме с пометкой в теме <span
                            className="bold">Менеджер по продажам по направлению «Hi-Fi Аудио и Видео Техника»</span> и
                    указанием уровня ожидаемой заработной платы на e-mail: <a
                                href="mailto:sales@audiovideomir.com.ua">sales@audiovideomir.com.ua</a></h4>
                        <h2 className="marginbot4020">Составитель обзоров по тематике «Hi-Fi Аудио и Видео Техника»</h2>
                        <h4 className="marginbot4020">Требуется <span className="bold">Составитель обзоров по тематике «Hi-Fi Аудио и
                        Видео Техника»</span> для наполнения интернет-магазина (г. Киев, возможна удаленная работа)</h4>
                        <h4 className="marginbot2010">Требования к кандидатам:</h4>
                        <h5>Опыт в составлении интернет-обзоров</h5>
                        <h5>Активный пользователь Hi-Fi и Hi-End аудио и видео продукции (продажа / использование / установка /
                    консультации / хобби)</h5>
                        <h5>Знание английского языка (выше среднего / технический)</h5>
                        <h5 className="marginbot4020">Отсутствие вредных привычек</h5>

                        <h4 className="marginbot2010">Функциональные обязанности:</h4>
                        <h5>Составление уникальных качественных обзоров по тематике «Hi-Fi Аудио и Видео Техника» (фото, видео,
                    текст)</h5>
                        <h5 className="marginbot4020">Перевод на русский язык зарубежных обзоров, компиляция, рерайтинг</h5>

                        <h4 className="marginbot2010">Личные качества:</h4>
                        <h5>Ответственность и исполнительность</h5>
                        <h5>Внимательность и аккуратность</h5>
                        <h5 className="marginbot4020">Дисциплинированность и усидчивость</h5>

                        <h4 className="marginbot2010">Условия сотрудничества:</h4>
                        <h5>Стабильная компания, работающая на рынке Hi-Fi и Hi-End техники уже более 15 лет</h5>
                        <h5>Хорошая возможность карьерного роста – в данный момент компания находится на этапе расширения</h5>
                        <h5>Заработная плата: по результатам собеседования</h5>
                        <h5 className="marginbot4020">График работы: с 09.00 до 18.00, пятидневная рабочая неделя</h5>
                        <h4 className="marginbot4020">Просьба высылать развернутое резюме с пометкой в теме <span
                            className="bold">Составитель обзоров по тематике «Hi-Fi Аудио и Видео Техника»</span> и
                    указанием уровня ожидаемой заработной платы на e-mail: <a
                                href="mailto:sales@audiovideomir.com.ua">sales@audiovideomir.com.ua</a></h4>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro />
        </>
    )
}