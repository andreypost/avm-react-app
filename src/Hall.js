import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { NewsSection } from './components/NewsSection';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import photo_001 from './img/MaskGroup6.png';

export const Hall = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const pausePlayVideo = (elem) => {
            elem.onclick = (e) => {
                let target = e.target.closest('.carousel-control-prev,.carousel-control-next, .carousel-indicators')
                if (!target) return
                let iframe = elem.querySelector('.carousel-inner .active iframe')
                if (!iframe) return
                elem.querySelector('.carousel-inner .active iframe').src = iframe.src
            }
        }
        pausePlayVideo(document.querySelector('.carousel'))
        const dateCalendarLimit = (elems) => {
            let today = new Date(),
                delay = new Date(today)
            delay.setDate(delay.getDate() + 2)
            today.setDate(today.getDate() + 30)
            for (let elem of elems) {
                elem.min = delay.toISOString().split("T")[0]
                elem.max = today.toISOString().split("T")[0]
            }
        }
        dateCalendarLimit(document.querySelectorAll('input[type="date"]'))
    }, [])
    return (
        <>
            <Header pathname={props.history.location.pathname}>
                <Catalogue />
                <section className="header__navmob">
                    <h3 className="navmob__catalogue">Каталог товаров</h3>
                </section>
            </Header>
            <main>
                <section className="services__banner carousel__section">
                    <ul className="flexstart breadcrumbs flexwrap">
                        <li><Link to="/">Главная &gt;</Link></li>
                        <li>Зал прослушивания</li>
                    </ul>
                    <article className="htextmob_768">
                        <h4>Зал Прослушивания Hi-Fi, Hi-End</h4>
                    </article>
                    <div id="carouselTop" className="carousel slide banner__carousel" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselTop" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselTop" data-slide-to="1"></li>
                            <li data-target="#carouselTop" data-slide-to="2"></li>
                            <li data-target="#carouselTop" data-slide-to="3"></li>
                            <li data-target="#carouselTop" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe src="https://www.youtube.com/embed/vTNw7oFE-tc"
                                    frameBorder="0" allowFullScreen="" title="video_01"></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe src="https://www.youtube.com/embed/RG9TMn1FJzc"
                                    frameBorder="0" allowFullScreen="" title="video_02"></iframe>
                            </div>
                            <div className="carousel-item">
                                <img src={photo_001} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselTop" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselTop" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section className="listening__section">
                    <hgroup className="listening__textdesk">
                        <h1>Зал прослушивания Hi-Fi, Hi-End</h1>
                    </hgroup>
                    <article>
                        <h3>Вы устали от навязчивой рекламы и обилия ненужной информации, которая, скорее, мешает принятию
                        решения о
                        покупке, чем способствует ему? Но при этом определиться с выбором аудиовизуальной техники, всё-таки
                    нужно?</h3>
                        <h3>Мы предлагаем нашим Покупателям новый формат получения сведений о продукте: формат самостоятельного
                        тестирования аппаратуры ещё ДО совершения покупки! Специально для своих клиентов мы создали
                    ультрасовременный <span>демонстрационный зал для прослушивания акустических систем*.</span> При этом
                    сделали его -
                    уютным. Он не похож на научную лабораторию, где всё должно быть чинно и аккуратно. Напротив! Здесь,
                    словно в уютной гостиной давних знакомых, царит дружественная атмосфера с ароматом кофе.
                    Ненавязчивое,
                    комфортное общение с консультантом; красивая, удобная мебель; чашечка любимого напитка - всё это
                    раскрепощает, позволяя обеспечить тестированию эмоциональную «чистоту».</h3>
                        <h3>А ведь настоящие ценители именно так выбирают звуковую и видеотехнику - ориентируясь на
                        эмоциональное
                        восприятие. Что толку от дорого и престижного изделия, если воспроизводимые им песенные композиции
                        воспринимаются чужеродными? Узнать «своё» устройство можно, только полностью отдавшись эмоциям.
                    <span>Бесплатное прослушивание музыки, сцен фильмов</span> - поможет определить, какое изделие или
                    система наиболее
                    полно погружают вас в атмосферу песни или кино. Позвольте себе в полной мере ощутить драйв от
                    рок-композиции, волшебство симфонического звучания, чувство опасности главного героя фильма - в
                    нашем
                    демонстрационном зале.</h3>
                        <h3>Помимо «лирических» преимуществ такого формата (атмосферность, релакс, уют), наша компания
                        предлагает
                    Клиентам и сугубо практические бонусы:</h3>
                        <article className="listening__list">
                            <h4>множество разнообразных акционных программ, скидки при покупке изделия;</h4>
                            <h4>в случае приобретения товара после прослушивания мы обеспечиваем бесплатную доставку и монтаж
                        изделия.</h4>
                        </article>
                        <h3>Бесплатное прослушивание перед покупкой аудиокомплексов, телевизоров, усилителей и прочей
                    электроники осуществляется по предварительной записи.</h3>
                        <h3>* Не все модели доступны к прослушиванию. Подробности уточняйте.</h3>
                    </article>
                </section>
                <section>
                    <article className="listening__form">
                        <form action="" id="signUpShowRoom">
                            <hgroup>
                                <h1>Записаться в шоу-рум*</h1>
                            </hgroup>
                            <label htmlFor="name">Имя</label>
                            <input type="text" name="name" placeholder="Юрий" required />
                            <label htmlFor="phone">Номер телефона</label>
                            <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required />
                            <label htmlFor="comment">Комментарий</label>
                            <textarea name="comment" rows="5" className="flexcenter"></textarea>
                            <label htmlFor="date">Дата</label>
                            <input type="date" name="date" placeholder="" required />
                            <button form="signUpShowRoom" type="submit">ЗАПИСАТЬСЯ</button>
                        </form>
                    </article>
                </section>
                <NewsSection />
                <SeoMailing />
            </main>
            <Footer />
        </>
    )
}