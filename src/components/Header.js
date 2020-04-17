import React from 'react';
import { Link } from "react-router-dom";
import photo_001 from '../img/audio_world.png';

class Header extends React.Component {
    componentDidMount() {
        let widthInner = window.innerWidth,
            tooltipElem = null,
            currentModal = null
        const showTooltip = (elem, tooltip) => {
            if (!elem) return
            elem.onmouseover = () => {
                tooltip.style.display = 'block'
                tooltip.onclick = (e) => {
                    let target = e.target.closest('.button__closegl')
                    if (!target) return
                    tooltip.style.display = 'none'
                }
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        tooltip.style.display = 'none'
                    }
                })
                window.addEventListener('click', (e) => {
                    if (e.target !== tooltip) {
                        tooltip.style.display = 'none'
                    }
                })
            }
            elem.onmouseout = () => {
                tooltip.style.display = 'none'
            }
        }
        showTooltip(document.querySelector('.header__call'), document.getElementById('headerHoverCall'))

        const showIconTooltip = (e) => {
            let target = e.target,
                tooltipHtml = target.dataset.headertooltip
            if (!tooltipHtml || target.children[0].innerHTML !== '') return
            target.onclick = (e) => {
                if (target.children[0].innerHTML === '') {
                    e.preventDefault()
                }
            }
            if (widthInner <= 768) return
            tooltipElem = document.createElement('div')
            tooltipElem.className = 'flexcenter'
            tooltipElem.classList.add('headertooltip')
            tooltipElem.innerHTML = tooltipHtml
            document.body.append(tooltipElem)
            let coords = target.getBoundingClientRect()
            // let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
            //   if (left < 0) left = 0; // don't cross the left window edge

            //   let top = coords.top - tooltipElem.offsetHeight - 5;
            //   if (top < 0) { // if crossing the top window edge, show below instead
            //     top = coords.top + target.offsetHeight + 5;
            //   }
            tooltipElem.style.left = `${coords.left - 225}px`
            tooltipElem.style.top = `${coords.top + 50}px`

        }
        const hideTooltip = () => {
            if (tooltipElem) {
                tooltipElem.remove()
                tooltipElem = null
            }
        }
        document.addEventListener('mouseover', (e) => showIconTooltip(e))
        document.removeEventListener('mouseover', (e) => showIconTooltip(e))
        document.addEventListener('mouseout', () => hideTooltip())
        document.removeEventListener('mouseout', () => hideTooltip())

        const showModal = (modal) => {
            if (currentModal) {
                hideModal(currentModal)
                currentModal = null
            }
            let width = document.documentElement.clientWidth
            document.body.style.overflowY = 'hidden'
            document.body.style.paddingRight = `${document.documentElement.clientWidth - width}px`
            // document.body.style.paddingRight = `${6}px`
            currentModal = modal
            currentModal.style.display = 'block'
            // if (modal.id == 'basketProduct' || modal.id == 'verificationOrder') {
            //     verticalSlider(document.querySelectorAll('.verticalSlider'))
            //     modal.querySelector('.basketHeaderResult').innerHTML = document.querySelector('.product__count').innerHTML
            // }
            currentModal.onclick = (e) => {
                let target = e.target.closest('.button__closegl, .global__back, .makeOrder, .cardbuyClose')
                if (!target) return
                if (target.classList.contains('button__closegl') ||
                    target.classList.contains('global__back') ||
                    target.classList === 'cardbuyClose') {
                    hideModal(currentModal)
                } else if (target.classList.contains('makeOrder')) {
                    // chekoutOrderModal(e, modal)
                    // e.preventDefault()
                }
                // } else if (target.classList == 'contRdGl') {
                //     e.preventDefault()
                //     let input = target.querySelector('input')
                //     input.checked = !input.checked
                // } else if (target.tagName == 'A' && (target.href).includes(this.props.pathname)) {
                //     hideModal(currentModal)
                // }
            }
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    hideModal(currentModal)
                }
            })
            window.addEventListener('click', (e) => {
                if (e.target === currentModal) {
                    hideModal(currentModal)
                }
            })
        }
        const hideModal = (modal) => {
            modal.style.display = 'none'
            document.body.style.overflowY = ''
            document.body.style.paddingRight = `${0}px`
        }
        const getAllElementsModal = (elems, modal) => {
            if (!elems) return
            for (let elem of elems) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    showModal(modal)
                }
            }
        }
        getAllElementsModal(document.querySelectorAll('.header__burget'), document.getElementById('burgerMenuMob'))
        getAllElementsModal(document.querySelectorAll('.navmob__catalogue'), document.getElementById('catalogueMob'))

        const isUser = (user) => {
            if (!user) return
            for (let elem of user) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    window.location.assign('_cabinet_discount.html')
                }
            }
        }
        isUser(document.querySelectorAll('.header__user'))

        const isGuest = (guest) => {
            if (!guest) return
            for (let elem of guest) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    showModal(document.getElementById('enterCabinet'))
                }
            }
        }
        isGuest(document.querySelectorAll('.header__guest'))
    }
    render() {
        return (
            <>
                <header id="header" className="header">
                    <article className="header__info header__top">
                        <section className="flexbet">
                            <div className="header__contacts flexbet">
                                <div className="header__call flexcol relative">
                                    <div className="">
                                        {/* <Link to='/training' className="white">Discover more</Link> */}
                                        <a href="tel:+380509309378" className="flexcenter">
                                            <i className="header__phone"></i>(050)930 93 78<i className="header__callarrow"></i>
                                        </a>
                                        <i className="header__line"></i>
                                    </div>
                                    <div id="headerHoverCall">
                                        <div id="headerCall" className="flexcol alignstart relative">
                                            <i className="button__closegl"></i>
                                            <h3>Контактные номера телефонов</h3>
                                            <a href="tel:0509309378" className="flexcenter"><i></i>(050) 930-93-78</a>
                                            <a href="tel:0677608203" className="flexcenter"><i></i>(067) 760-82-03</a>
                                            <a href="tel:0630301967" className="flexcenter"><i></i>(063) 030-19-67</a>
                                            <a href="tel:0442277684" className="flexcenter"><i></i>(044) 227-76-84</a>
                                        </div>
                                    </div>
                                </div>
                                <h3>г. Киев, ул. Д. Луценко, 12A</h3>
                                <h3>ПН-ВС с 9:00 до 22:00</h3>
                            </div>
                            <div className="header__rightnav flexcenter">
                                <div className="header__language flexcenter">
                                    <i className="header__globus"></i>
                                    <a href=" " className="active">Ru</a>
                                    <div className="header__vertical"></div>
                                    <a href=" ">Ua</a>
                                </div>
                                <div className="header__guest header__avatar flexcenter">
                                    {/* <div className="header__user header__avatar flexcenter"> */}
                                    <i></i>
                                    <div className="column">
                                        <h3>Личный кабинет</h3>
                                        <i className="header__line"></i>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                    <section className="header__settings flexbet">
                        <div><i className="header__burget"></i></div>
                        <Link to="/"><img src={photo_001} className="header__world" alt="" /></Link>
                        <form id="header__search" action="#" method="post">
                            <input className="header__input" type="text" name="search" placeholder="Поиск" required data-text="Найти"></input>
                            <button form="header__search" className="header__button flexcenter" type="submit">
                                <i></i>
                            </button>
                        </form>
                        <div className="flexbet">
                            <a href=" "><i className="header__guest header__avatarmob"></i></a>
                            {/* <a href=" "><i className="header__user header__avatarmob"></i></a> */}
                            <a href="_product_comparison.html"><i className="header__compare relative"
                                data-headertooltip="Ваш список дла сравнения пуст!"><span className="compare__count flexcenter"></span></i></a>
                            <a href="_cabinet_wish.html"><i className="header__love relative"
                                data-headertooltip="Ваш список желания пуст!"><span className="love__count flexcenter"></span></i></a>
                            <a href="_cabinet_basket.html"><i className="header__order relative" data-headertooltip="Ваша корзина пуста!"><span
                                className="product__count flexcenter"></span></i></a>
                        </div>
                    </section>
                    <article className="header__nav">
                        <section className="flexbet">
                            <Link to="Category" className="header__iconcatalog flexcenter"><i></i>Каталог товаров</Link>
                            <ul className="header__cataloglinks flexcenter">
                                <li><Link to="Services">Услуги</Link></li>
                                <li><a href="_listening_room.html">Зал прослушивания</a></li>
                                <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                                <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                                <li><a href="_installment_plan.html">Рассрочка</a></li>
                                <li><a href="_all_stocks.html">Акции</a></li>
                                <li className="header__about relative"><a href="_about_us.html" className="flexcenter">О Нас<i
                                    className="header__navarrow"></i></a>
                                    <ul className="header__listabout">
                                        <li><a href="_certificate.html">Сертификат</a></li>
                                        <li><a href="_jobs.html">Вакансии</a></li>
                                        <li><a href="_cooperation.html">Сотрудничество</a></li>
                                    </ul>
                                </li>
                                <li><a href="_contacts.html">Конткаты</a></li>
                                <li><a href="_bonus_program.html" className="header__bonus">Бонусная программа</a></li>
                            </ul>
                        </section>
                    </article>
                </header>
                <div id="burgerMenuMob">
                    <article className="relative">
                        <div className="button__closegl"></div>
                        <div className="burger__top flexbet">
                            <i className="burger__user"></i>
                            <h5>Андрей Петренко</h5>
                            <a href=" ">Ru</a>
                            <div className="burger__slash">/</div>
                            <a href=" ">Ua</a>
                        </div>
                        <div className="horizont"></div>
                        <ul className="burger__list">
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Личный
                        кабинет<i></i><i></i></a>
                                <ul>
                                    <li><a href="_cabinet_discount.html">Дисконтная программа</a></li>
                                    <li><a href="_cabinet_info.html">Моя информация</a></li>
                                    <li><a href="_cabinet_basket.html">Корзина</a></li>
                                    <li><a href="_cabinet_wish.html">Список желаний</a></li>
                                    <li><a href="_cabinet_comments.html">Мои отзывы и комментарии</a></li>
                                    <li><a href="_cabinet_viewed.html">Просмотренные товары</a></li>
                                    <li><a href="_cabinet_orders.html">Мои заказы</a></li>
                                    <li><a href="index.html" className="orange">Выход</a></li>
                                </ul>
                            </li>
                            <li><a href="index.html">Главная</a></li>
                            <li><a href="_services.html">Услуги</a></li>
                            <li><a href="_listening_room.html">Зал прослушивания</a></li>
                            <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                            <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                            <li><a href="_installment_plan.html">Рассрочка</a></li>
                            <li><a href="_all_stocks.html">Акции</a></li>
                            <li><a href="_contacts.html">Конткаты</a></li>
                            <li className="global__list"><a href="_about_us.html" className="global__href global__arrow flexcenter">О
                        Нас<i></i><i></i></a>
                                <ul>
                                    <li><a href="_certificate.html">Сертификат</a></li>
                                    <li><a href="_jobs.html">Вакансии</a></li>
                                    <li><a href="_cooperation.html">Сотрудничество</a></li>
                                </ul>
                            </li>
                            <li><a href="_bonus_program.html" className="header__bonus">Бонусная программа</a></li>
                        </ul>
                    </article>
                </div>
                <div id="enterCabinet">
                    <div className="relative">
                        <div className="button__closegl"></div>
                        <form action="" id="cabinetForm" className="flexcol">
                            <hgroup>
                                <h1>Вход в личный кабинет</h1>
                            </hgroup>
                            <label htmlFor="email">Эл. почта или телефон</label>
                            <input type="email" name="email" required />
                            <label htmlFor="password">Пароль</label>
                            <input type="password" name="password" required />
                            <div className="cabinet__checkbox flexbet">
                                <label className="global__label">
                                    <input type="checkbox" />
                                    <span className="global__checkmark"></span>Запомнить меня</label>
                                <a href=" ">Забыли пароль?</a>
                            </div>
                            <button form="cabinetForm">ВОЙТИ</button>
                        </form>
                        <article>
                            <h3>НОВЫЕ КЛИЕНТЫ</h3>
                            <h5>Создав учётную запись на нашем сайте, вы будете тратить меньше времени на оформление заказа, сможете
                    хранить несколько адресов доставки, отслеживать состояние заказов, а также многое другое.</h5>
                            <div className="cabinet__href flexcol">
                                <a href="_registration.html">Зарегистрироваться</a>
                                <i></i>
                            </div>
                        </article>
                    </div>
                </div>
                <div id="catalogueMob">
                    <article className="relative">
                        <div className="button__closegl"></div>
                        <h5 className="catalogue__production">Каталог товаров</h5>
                        <ul className="catalogue__list">
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Домашние
                        кинотеатры<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Акустические
                        системы, HiFi/HiEnd<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Стерео
                        Системы, HiFI/HiEnd<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Виниловые
                        проигрыватели<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Кабели,
                        HiFi/Hiend<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Наушники и
                        портатив<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="global__list"><a href=" " className="global__href global__arrow flexcenter">Профессиональное
                        оборудование<i></i><i></i></a>
                                <ul>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=" " className="global__href global__arrow flexcenter">Напольная
                                акустика<i></i><i></i></a>
                                        <ul>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                            <li><a href=" ">Напольная акустика</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="_category.html" className="flexcenter juststart">Все категории</a></li>
                            <li className="global__back orange">
                                <h6>Назад</h6>
                            </li>
                        </ul>
                    </article>
                </div>
            </>
        );
    }
}
export default Header;