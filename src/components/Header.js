import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';
import photo_001 from '../img/Image365.png';
import photo_002 from '../img/Image_002.jpg';
import photo_003 from '../img/installicon_01.png';
import photo_004 from '../img/Image145.png';
import photo_005 from '../img/Image_000.jpg';

export const Header = (props) => {
    useEffect(() => {
        // let widthInner = window.innerWidth,
        // tooltipElem = null,
        let currentModal = null
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

        const searchHeader = (searchInput) => {
            let searchSelected,
                searchRequestId,
                searchRequest = null
            const updateAutocomplete = (data) => {
                if (data.id !== searchRequestId) return
                closeAllLists()
                searchSelected = -1
                let root = document.createElement('div')
                root.classList.add('autocomplete__items')
                searchInput.parentNode.append(root)
                for (let i = 0; i < data.items.length; i++) {
                    let info = data.items[i],
                        item = document.createElement('div')
                    item.classList.add('flexstart', 'autocomplete__div')
                    // item.innerHTML = info.image 
                    console.log(info)
                    item.innerHTML = '<img class="autocomplete__image" src="' + info.image.photo_003 + '" alt="">' + info.text
                    // item.innerHTML += "<input type='hidden' value='" + info.text + "'>"
                    item.addEventListener('click', () => {
                        window.location.href = info.href
                    })
                    root.append(item)
                }
            }
            const requestValue = (value) => {
                searchRequest = null
                searchRequestId = Math.floor(Math.random() * 1000000000000)
                // const callback = (data) => {
                //     updateAutocomplete(data)
                // }
                let data = {}
                data.request = value
                data.id = searchRequestId
                data.items = [{ image: '../img/Image365.png', text: "Meridian SOOL MEDIA SOURCE 600", href: "/13095meridian-sool-media-source-600" },
                { image: { photo_003 }, text: "Bose Soundlink Mini Soft Cover", href: "/22675bose-soundlink-mini-soft-cover" },
                { image: { photo_004 }, text: "Усилитель Sonance Sonamp 12-50", href: "/42271usilitel-sonance-sonamp-12-50" },
                { image: { photo_005 }, text: "Саундбар Sonance SB46L Soundbar", href: "/42269saundbar-sonance-sb46l-soundbar" },
                { image: { photo_002 }, text: "Саундбар Sonance SB46M Soundbar", href: "/42270saundbar-sonance-sb46m-soundbar" },
                { image: { photo_001 }, text: "Цифровой медиа плеер Meridian SOOLOOS SOURCE ONE", href: "/13101tsifrovoy-media-pleer-meridian-sooloos-source-one" },
                { image: { photo_003 }, text: "Сетевой плеер Meridian Sooloos Media Source 200", href: "/44932setevoy-pleer-meridian-sooloos-media-source-200" },
                { image: { photo_004 }, text: "Комплект ландшафтной акустики Sonance Sonarray SR1 System", href: "/45704komplekt-landshaftnoy-akustiki-sonance-sonarray-sr1-system" },
                { image: { photo_005 }, text: "Phono кабель WireWorld SOLSTICE 7 SOT 1m", href: "/23714phono-kabel-wireworld-solstice-7-sot-1m" },
                { image: { photo_002 }, text: "Phono кабель WireWorld SOLSTICE 7 SOT 1.5m", href: "/23715phono-kabel-wireworld-solstice-7-sot-1.5m" }]
                // sendXHR('/search/request/', data, callback)
                updateAutocomplete(data)
            }
            searchInput.addEventListener('input', () => {
                if (!searchInput.value) {
                    closeAllLists()
                    return
                }
                if (searchRequest) clearTimeout(searchRequest)
                searchRequest = setTimeout(() => requestValue(searchInput.value), 250)
            })
            searchInput.addEventListener('keydown', (e) => {
                let x = document.querySelectorAll('.autocomplete__div')
                if (!x) return
                if (e.key === 'ArrowDown') {
                    searchSelected++
                    addActive(x)
                } else if (e.key === 'ArrowUp') {
                    searchSelected--
                    addActive(x)
                } else if (e.key === 'Enter') {
                    if (searchSelected > -1) {
                        e.preventDefault()
                        if (x) x[searchSelected].click()
                    }
                }
            })
            const addActive = (x) => {
                removeActive(x)
                if (searchSelected >= x.length) searchSelected = 0
                if (searchSelected < 0) searchSelected = (x.length - 1)
                x[searchSelected].classList.add('autocomplete__active')
            }
            const removeActive = (x) => {
                for (let div of x) {
                    div.classList.remove('autocomplete__active')
                }
            }
            const closeAllLists = (elem) => {
                let x = document.querySelector('.autocomplete__items')
                if (x && elem !== x && elem !== searchInput) x.remove()
            }
            document.addEventListener('click', (e) => {
                closeAllLists(e.target)
            })
        }
        searchHeader(document.getElementById('searchInput'))

        const showIconTooltip = (elems) => {
            for (let elem of elems) {
                elem.onclick = (e) => {
                    if (elem.previousElementSibling.innerHTML === '') e.preventDefault()
                }
            }
        }
        showIconTooltip(document.querySelectorAll('.header__dataicons a'))

        const showModal = (modal) => {
            if (currentModal) {
                hideModal(modal)
                currentModal = null
            }
            let width = document.documentElement.clientWidth
            document.body.style.overflowY = 'hidden'
            document.body.style.paddingRight = `${document.documentElement.clientWidth - width}px`
            currentModal = true
            modal.style.display = 'block'
            // if (modal.id == 'basketProduct' || modal.id == 'verificationOrder') {
            //     verticalSlider(document.querySelectorAll('.verticalSlider'))
            //     modal.querySelector('.basketHeaderResult').innerHTML = document.querySelector('.product__count').innerHTML
            // }
            modal.onclick = (e) => {
                let target = e.target.closest('.button__closegl, .global__back, .makeOrder, .cardbuyClose')
                if (!target) return
                if (target.classList.contains('button__closegl') ||
                    target.classList.contains('global__back') ||
                    target.classList === 'cardbuyClose') {
                    hideModal(modal)
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
                    hideModal(modal)
                }
            })
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    hideModal(modal)
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

        const isGuest = (elems) => {
            if (!elems) return
            for (let elem of elems) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    if (elem.classList.contains('header__user')) {
                        window.location.assign('/cabinet/')
                    } else {
                        showModal(document.getElementById('enterCabinet'))
                    }
                }
            }
        }
        isGuest(document.querySelectorAll('.header__user'))
        isGuest(document.querySelectorAll('.header__guest'))
        return () => {
            document.body.style.overflow = ''
            document.body.style.overflowY = ''
            document.body.style.paddingRight = 0 + 'px'
        }
    }, [])
    return (
        <header>
            <article className="header__info header__top">
                <section className="flexbet">
                    <div className="header__contacts flexbet">
                        <div className="header__call flexcol relative">
                            <div className="flexcol">
                                <a href="tel:+380509309378" className="flexcenter">
                                    <svg className="header__phone">
                                        <use xlinkHref={`${icons}#tel`}></use>
                                    </svg>
                                            (050) 930 93 78
                                            <svg className="header__callarrow">
                                        <use xlinkHref={`${icons}#arrow`}></use>
                                    </svg>
                                </a>
                                <svg className="header__line">
                                    <use xlinkHref={`${icons}#hatchline`}></use>
                                </svg>
                            </div>
                            <div id="headerHoverCall">
                                <div id="headerCall" className="flexcol alignstart relative">
                                    <svg className="button__closegl">
                                        <use xlinkHref={`${icons}#cross`}></use>
                                    </svg>
                                    <h3>Контактные номера телефонов</h3>
                                    <a href="tel:0509309378" className="flexcenter">
                                        <svg>
                                            <use xlinkHref={`${icons}#vodaphone`}></use>
                                        </svg>(050) 930 93 78</a>
                                    <a href="tel:0677608203" className="flexcenter">
                                        <svg>
                                            <use xlinkHref={`${icons}#kyivstar`}></use>
                                        </svg>(067) 760 82 03</a>
                                    <a href="tel:0630301967" className="flexcenter">
                                        <svg>
                                            <use xlinkHref={`${icons}#life`}></use>
                                        </svg>(063) 030 19 67</a>
                                    <a href="tel:0442277684" className="flexcenter">
                                        <svg>
                                            <use xlinkHref={`${icons}#phone`}></use>
                                        </svg>(044) 227 76 84</a>
                                </div>
                            </div>
                        </div>
                        <h3>г. Киев, ул. Д. Луценко, 12A</h3>
                        <h3>ПН-ВС с 9:00 до 22:00</h3>
                    </div>
                    <div className="header__rightnav flexcenter">
                        <div className="header__language flexcenter">
                            <svg className="header__globus">
                                <use xlinkHref={`${icons}#globe`}></use>
                            </svg>
                            <a href=" " className="active">Ru</a>
                            <div className="header__vertical"></div>
                            <a href=" ">Ua</a>
                        </div>
                        <div className="header__guest header__avatar flexcenter">
                            {/* <div className="header__user header__avatar flexcenter"> */}
                            <svg>
                                <use xlinkHref={`${icons}#avatar`}></use>
                            </svg>
                            <div className="flexcol">
                                <h3>Личный кабинет</h3>
                                <svg className="header__line">
                                    <use xlinkHref={`${icons}#hatchline`}></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            <section className="header__settings flexbet">
                <div>
                    <svg className="header__burget">
                        <use xlinkHref={`${icons}#burger`}></use>
                    </svg>
                </div>
                <Link to="/">
                    <svg className="header__world">
                        <use xlinkHref={`${icons}#logo`}></use>
                    </svg>
                </Link>
                <form id="headerSearch" className="header__search relative" action="/search" method="get">
                    <input id="searchInput" className="header__input" type="text" autoComplete="off" name="search" placeholder="Поиск" required />
                    <button form="headerSearch" className="header__button flexcenter" type="submit">
                        <svg>
                            <use xlinkHref={`${icons}#loupe`}></use>
                        </svg>
                    </button>
                </form>
                <div className="flexbet header__dataicons relative">
                    {/* <a href=" " className="header__user noneDesk block768"> */}
                    <a href=" " className="header__guest noneDesk block768">
                        <svg>
                            <use xlinkHref={`${icons}#avatar`}></use>
                        </svg>
                    </a>

                    <span className="compare__count flexcenter white"></span>
                    <a href="_product_comparison.html" className="relative" data-headertooltip="Ваш список дла сравнения пуст!">
                        <svg>
                            <use xlinkHref={`${icons}#compare`}></use>
                        </svg>
                    </a>

                    <span className="love__count flexcenter white"></span>
                    <a href="_cabinet_wish.html" className="relative" data-headertooltip="Ваш список желания пуст!">
                        <svg>
                            <use xlinkHref={`${icons}#love`}></use>
                        </svg>
                    </a>
                    <span className="product__count flexcenter white">3</span>
                    <a href="_cabinet_basket.html" className="relative" data-headertooltip="Ваша корзина пуста!">
                        <svg>
                            <use xlinkHref={`${icons}#order`}></use>
                        </svg>
                    </a>
                </div>
            </section>
            <article className="header__nav">
                <section className="flexbet">
                    {props.children[0]}
                    <ul className="header__cataloglinks flexcenter">
                        <li><Link to="Services">Услуги</Link></li>
                        <li><Link to="Hall">Зал прослушивания</Link></li>
                        <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                        <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                        <li><a href="_installment_plan.html">Рассрочка</a></li>
                        <li><a href="_all_stocks.html">Акции</a></li>
                        <li className="header__about relative">
                            <a href="_about_us.html" className="flexcenter">О нас
                                        <svg className="header__callarrow">
                                    <use xlinkHref={`${icons}#arrow`}></use>
                                </svg>
                            </a>
                            <ul className="header__listabout">
                                <li><a href="_certificate.html">Сертификат</a></li>
                                <li><a href="_jobs.html">Вакансии</a></li>
                                <li><a href="_cooperation.html">Сотрудничество</a></li>
                            </ul>
                        </li>
                        <li><a href="_contacts.html">Контакты</a></li>
                        <li><a href="_bonus_program.html" className="header__bonus">Бонусная программа</a></li>
                    </ul>
                </section>
            </article>
            {props.children[1]}
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
                                <li><Link to="/" className="orange">Выход</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="Services">Услуги</Link></li>
                        <li><Link to="Hall">Зал прослушивания</Link></li>
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
                        <li><Link to="Category" className="flexcenter juststart">Все категории</Link></li>
                        <li className="global__back orange">
                            <h6>Назад</h6>
                        </li>
                    </ul>
                </article>
            </div>
        </header>
    );
}
