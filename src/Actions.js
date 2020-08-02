import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import dataOffer from './components/dataOffer';
import { CardPromo } from './components/CardPromo';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

export const Actions = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const resetInputCheckbox = (form) => {
            let store = form.querySelector('.filterStore')
            const setDouble = (elem, i) => {
                let h5 = document.createElement('h5')
                h5.innerHTML = elem.parentNode.querySelector('h6').firstChild.textContent
                h5.className = 'filterStoreText'
                elem.dataset.num = h5.dataset.num = i
                store.append(h5)
            }
            let inputs = form.querySelectorAll('input')
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].onclick = () => {
                    if (!inputs[i].dataset.num || inputs[i].dataset.num === '') {
                        setDouble(inputs[i], i)
                    } else {
                        store.querySelector(`h5[data-num="${inputs[i].dataset.num}"]`).remove()
                        inputs[i].dataset.num = ''
                    }
                }
            }
            form.querySelector('.filterStore').onclick = (e) => {
                let target = e.target.closest('.filterStoreText')
                if (!target) return
                let input = form.querySelector(`input[data-num="${target.dataset.num}"]`)
                input.checked = false
                input.dataset.num = ''
                target.remove()
            }
            form.querySelector('.mobreset__filter').onclick = () => {
                let checked = form.querySelectorAll('input:checked')
                for (let input of checked) {
                    input.checked = false
                    input.dataset.num = ''
                }
                store.innerHTML = ''
            }
        }
        resetInputCheckbox(document.getElementById('filterForm'))
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
                <section className="allpromo">
                    <ul className="flexstart breadcrumbs flexwrap">
                        <li><Link to="/">Главная &gt;</Link></li>
                        <li>Акции</li>
                    </ul>
                    <article className="htextmob_768">
                        <h4>Акции</h4>
                    </article>
                    <article>
                        <h6 className="global__filtermob flexstart"><i></i>Фильтр</h6>
                    </article>
                    <article className="flexbet">
                        <div className="global__leftside selfstart">
                            <div className="global__deskfilter">
                                <h3>Вы ищете:</h3>
                                <a href=" " className="filter__result">Accurate Audio</a>
                                <a href=" " className="filter__result">Accustic Arts</a>
                                <a href=" " className="filter__result">Acer</a>
                                <a href="_all_stocks.html" className="deskreset__filter">Сбросить</a>
                                <h3>В других разделах:</h3>
                                <ul className="global__filterlist">
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Домашние
                                    кинотеатры<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Акустические системы,
                                    HiFi/HiEnd<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Стерео Системы,
                                    HiFI/HiEnd<span>(0)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Виниловые
                                    проигрыватели<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Кабели,
                                    HiFi/Hiend<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Наушники и
                                    портатив<span>(0)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Профессиональное
                                    оборудование<span>(7)</span></a>
                                    </li>
                                    <li className="global__list forbidScroll">
                                        <ul>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Домашние
                                            кинотеатры<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Акустические системы,
                                            HiFi/HiEnd<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Стерео Системы,
                                            HiFI/HiEnd<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Виниловые
                                            проигрыватели<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Кабели,
                                            HiFi/Hiend<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Наушники и
                                            портатив<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Профессиональное
                                            оборудование<span>(7)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Домашние
                                            кинотеатры<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Акустические системы,
                                            HiFi/HiEnd<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Стерео Системы,
                                            HiFI/HiEnd<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Виниловые
                                            проигрыватели<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Кабели,
                                            HiFi/Hiend<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Наушники и
                                            портатив<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Профессиональное
                                            оборудование<span>(7)</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <a href=" " className="global__filterarrow flexstart"><i></i><i></i><span>Показать
                                все</span><span>Скрыть</span></a>
                                <div className="horizont"></div>
                                <h3>Производители:</h3>
                                <ul className="global__filterlist">
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Accurate
                                    Audio<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Accustic
                                    Arts<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Acer<span>(0)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                    Energy<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                    Revive<span>(278)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic Solid<span>(0)</span></a>
                                    </li>
                                    <li>
                                        <a href=" " className="global__linksfilter flexbet"><i></i>B&W<span>(7)</span></a>
                                    </li>
                                    <li className="global__list forbidScroll">
                                        <ul>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accurate
                                            Audio<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accustic
                                            Arts<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acer<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Energy<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Revive<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Solid<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accurate
                                            Audio<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accustic
                                            Arts<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acer<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Energy<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Revive<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Solid<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accurate
                                            Audio<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Accustic
                                            Arts<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acer<span>(0)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Energy<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Revive<span>(278)</span></a>
                                            </li>
                                            <li>
                                                <a href=" " className="global__linksfilter flexbet"><i></i>Acoustic
                                            Solid<span>(0)</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <a href=" " className="global__filterarrow flexstart"><i></i><i></i><span>Показать
                                все</span><span>Скрыть</span></a>
                                <div className="horizont"></div>
                                <h3>Выгодные предложения:</h3>
                                <div>
                                    <a href=" " className="global__linksfilter flexbet"><i></i>Скидки<span>(278)</span></a>
                                    <a href=" " className="global__linksfilter flexbet"><i></i>Подарки<span>(111)</span></a>
                                    <a href="_all_stocks.html" className="global__linksfilter flexbet"><i></i>Акции<span></span></a>
                                    <a href="_all_promotions.html"
                                        className="global__linksfilter flexbet"><i></i>Спецпредложения<span></span></a>
                                </div>
                            </div>
                        </div>
                        <article className="global__rightside">
                            <h2 className="allpromo__header">Акции</h2>
                            <article className="allpromo__catalogue box__grid global__rightside">
                                <CardPromo datos={dataOffer[0]} />
                                <CardPromo datos={dataOffer[1]} />
                                <CardPromo datos={dataOffer[2]} />
                                <CardPromo datos={dataOffer[0]} />
                                <CardPromo datos={dataOffer[1]} />
                                <CardPromo datos={dataOffer[2]} />
                                <CardPromo datos={dataOffer[0]} />
                                <CardPromo datos={dataOffer[1]} />
                                <CardPromo datos={dataOffer[2]} />
                                <CardPromo datos={dataOffer[0]} />
                                <CardPromo datos={dataOffer[1]} />
                                <CardPromo datos={dataOffer[2]} />
                                <CardPromo datos={dataOffer[0]} />
                            </article>
                            <a href=" " className="promo__button">ПОКАЗАТЬ ЕЩЕ</a>
                            <nav className="pagination__global flexcenter justcenter">
                                <a href=" " className="pagination__prev"> </a>
                                <div className="pagination__list flexcenter juststart">
                                    <a href=" " className="pagination__item">1</a>
                                    <p>...</p>
                                    <a href=" " className="pagination__item active">1</a>
                                    <a href=" " className="pagination__item">2</a>
                                    <a href=" " className="pagination__item">3</a>
                                    <p>...</p>
                                    <a href=" " className="pagination__item">11</a>
                                </div>
                                <a href=" " className="pagination__next"> </a>
                            </nav>
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