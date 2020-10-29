import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';

export const Header = (props) => {
    useEffect(() => {
        const showTooltip = (elem) => {
            let tooltip = elem.querySelector('#headerHoverCall')
            elem.onmouseover = () => {
                tooltip.style.display = 'block'
                tooltip.querySelector('.button__closegl').onclick = () => {
                    tooltip.style.display = 'none'
                }
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') tooltip.style.display = 'none'
                })
            }
            elem.onmouseout = () => {
                tooltip.style.display = 'none'
            }
        }
        showTooltip(document.querySelector('.header__call'))
        // const searchHeader = (searchInput) => {
        //     let searchSelected,
        //         searchRequestId,
        //         searchRequest = null
        //     const updateAutocomplete = (data) => {
        //         if (data.id !== searchRequestId) return
        //         closeAllLists()
        //         searchSelected = -1
        //         let root = document.createElement('div')
        //         root.classList.add('autocomplete__items')
        //         searchInput.parentNode.append(root)
        //         for (let i = 0; i < data.items.length; i++) {
        //             let info = data.items[i],
        //                 item = document.createElement('div')
        //             item.classList.add('flexstart', 'autocomplete__div')
        //             // item.innerHTML = info.image 
        //             console.log(info)
        //             item.innerHTML = '<img class="autocomplete__image" src="' + info.image.photo_003 + '" alt="">' + info.text
        //             // item.innerHTML += "<input type='hidden' value='" + info.text + "'>"
        //             item.addEventListener('click', () => {
        //                 window.location.href = info.href
        //             })
        //             root.append(item)
        //         }
        //     }
        //     const requestValue = (value) => {
        //         searchRequest = null
        //         searchRequestId = Math.floor(Math.random() * 1000000000000)
        //         // const callback = (data) => {
        //         //     updateAutocomplete(data)
        //         // }
        //         let data = {}
        //         data.request = value
        //         data.id = searchRequestId
        //         data.items = [{ image: '../img/Image365.png', text: "Meridian SOOL MEDIA SOURCE 600", href: "/13095meridian-sool-media-source-600" },
        //         { image: { photo_003 }, text: "Bose Soundlink Mini Soft Cover", href: "/22675bose-soundlink-mini-soft-cover" },
        //         { image: { photo_004 }, text: "Усилитель Sonance Sonamp 12-50", href: "/42271usilitel-sonance-sonamp-12-50" },
        //         { image: { photo_005 }, text: "Саундбар Sonance SB46L Soundbar", href: "/42269saundbar-sonance-sb46l-soundbar" },
        //         { image: { photo_002 }, text: "Саундбар Sonance SB46M Soundbar", href: "/42270saundbar-sonance-sb46m-soundbar" },
        //         { image: { photo_001 }, text: "Цифровой медиа плеер Meridian SOOLOOS SOURCE ONE", href: "/13101tsifrovoy-media-pleer-meridian-sooloos-source-one" },
        //         { image: { photo_003 }, text: "Сетевой плеер Meridian Sooloos Media Source 200", href: "/44932setevoy-pleer-meridian-sooloos-media-source-200" },
        //         { image: { photo_004 }, text: "Комплект ландшафтной акустики Sonance Sonarray SR1 System", href: "/45704komplekt-landshaftnoy-akustiki-sonance-sonarray-sr1-system" },
        //         { image: { photo_005 }, text: "Phono кабель WireWorld SOLSTICE 7 SOT 1m", href: "/23714phono-kabel-wireworld-solstice-7-sot-1m" },
        //         { image: { photo_002 }, text: "Phono кабель WireWorld SOLSTICE 7 SOT 1.5m", href: "/23715phono-kabel-wireworld-solstice-7-sot-1.5m" }]
        //         // sendXHR('/search/request/', data, callback)
        //         updateAutocomplete(data)
        //     }
        //     searchInput.addEventListener('input', () => {
        //         if (!searchInput.value) {
        //             closeAllLists()
        //             return
        //         }
        //         if (searchRequest) clearTimeout(searchRequest)
        //         searchRequest = setTimeout(() => requestValue(searchInput.value), 250)
        //     })
        //     searchInput.addEventListener('keydown', (e) => {
        //         let x = document.querySelectorAll('.autocomplete__div')
        //         if (!x) return
        //         if (e.key === 'ArrowDown') {
        //             searchSelected++
        //             addActive(x)
        //         } else if (e.key === 'ArrowUp') {
        //             searchSelected--
        //             addActive(x)
        //         } else if (e.key === 'Enter') {
        //             if (searchSelected > -1) {
        //                 e.preventDefault()
        //                 if (x) x[searchSelected].click()
        //             }
        //         }
        //     })
        //     const addActive = (x) => {
        //         removeActive(x)
        //         if (searchSelected >= x.length) searchSelected = 0
        //         if (searchSelected < 0) searchSelected = (x.length - 1)
        //         x[searchSelected].classList.add('autocomplete__active')
        //     }
        //     const removeActive = (x) => {
        //         for (let div of x) {
        //             div.classList.remove('autocomplete__active')
        //         }
        //     }
        //     const closeAllLists = (elem) => {
        //         let x = document.querySelector('.autocomplete__items')
        //         if (x && elem !== x && elem !== searchInput) x.remove()
        //     }
        //     document.addEventListener('click', (e) => {
        //         closeAllLists(e.target)
        //     })
        // }
        // searchHeader(document.getElementById('searchInput'))

        const showIconTooltip = (elems) => {
            for (let elem of elems) {
                elem.onclick = (e) => {
                    if (elem.previousElementSibling.innerHTML === '') e.preventDefault()
                }
            }
        }
        showIconTooltip(document.querySelectorAll('[data-headertooltip]'))
    }, [])
    return (
        <header>
            <article className="header__info">
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
                                    <p>Контактные номера телефонов</p>
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
                        <p>г. Киев, ул. Д. Луценко, 12A</p>
                        <p>ПН-ВС с 9:00 до 22:00</p>
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
                                <p>Личный кабинет</p>
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
                <Link to="/" replace>
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
                <div className="flexcenter header__dataicons relative">
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
                    <a href="_cabinet_basket.html" className="goBasket relative" data-headertooltip="Ваша корзина пуста!">
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
                        <li><Link to="Services" replace>Услуги</Link></li>
                        <li><Link to="Hall" replace>Зал прослушивания</Link></li>
                        <li><Link to="Delivery" replace>Оплата и доставка</Link></li>
                        <li><Link to="Warranty" replace>Гарантия и сервис</Link></li>
                        <li><Link to="Credit" replace>Рассрочка</Link></li>
                        <li><Link to="Actions" replace>Акции</Link></li>
                        <li className="header__about relative">
                            <Link to="About" className="flexcenter" replace>О нас
                                <svg className="header__callarrow">
                                    <use xlinkHref={`${icons}#arrow`}></use>
                                </svg>
                            </Link>
                            <ul className="header__listabout">
                                <li><Link to="Sertificate" replace>Сертификат</Link></li>
                                <li><Link to="Career" replace>Вакансии</Link></li>
                                <li><Link to="Cooperation" replace>Сотрудничество</Link></li>
                            </ul>
                        </li>
                        <li><Link to="Contacts" replace>Конткаты</Link></li>
                        <li><Link to="Bonus" className="header__bonus" replace>Бонусная программа</Link></li>
                    </ul>
                </section>
            </article>
            {props.children[1]}  {/* for mobile catalogue */}
        </header>
    );
}
