import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';
import photo_001 from '../img/Image1.png';
import photo_002 from '../img/Image365.png';
import photo_003 from '../img/base_02.png';
import photo_004 from '../img/Image1.png';

export const ModalsPro = (props) => {
    useEffect(() => {
        let currentModal = null,
            // widthInner = window.innerWidth,
            textInfoModal = null,
            infoModal = document.getElementById('infoModal'),
            body = document.querySelector('body')

        const onClickHandler = (elems, onClickListener) => {
            for (let elem of elems) {
                elem.addEventListener('click', (e) => {
                    onClickListener(e, elem)
                })
            }
        }
        const showIconTooltip = (elems) => {
            const onClickListener = (e, elem) => {
                if (elem.previousElementSibling.innerHTML === '') e.preventDefault()
            }
            onClickHandler(elems, onClickListener)
            // if (widthInner <= 768) return
        }
        showIconTooltip(document.querySelectorAll('[data-headertooltip]'))
        const showModal = (modal) => {
            if (currentModal) {
                hideModal(currentModal)
                currentModal = null
            }
            let width = document.documentElement.clientWidth
            body.style.overflowY = 'hidden'
            body.style.paddingRight = `${document.documentElement.clientWidth - width}px`
            currentModal = modal
            currentModal.style.display = 'block'
            currentModal.onclick = (e) => {
                // console.log(props.pathname, e.target.href)
                if (e.target.classList.contains('button__closegl') || e.target.classList.contains('global__back')) {
                    // || (e.target.tagName === 'A' && (e.target.href).includes(props.pathname)) ) {
                    hideModal(currentModal)
                }
            }
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') hideModal(currentModal)
            })
            window.addEventListener('click', (e) => {
                if (e.target === currentModal) hideModal(currentModal)
            })
        }
        const hideModal = (modal) => {
            if (modal.querySelector('h3')?.innerHTML.startsWith('Спасибо за регистрацию!')) {
                window.location.assign('/avm-react-app/#/')
            } else if (modal.querySelector('h3')?.innerHTML.startsWith('Спасибо!<br><span>Ваш пароль успешно изменен!')) {
                window.location.assign('/cabinet/')
            } else {
                modal.style.display = 'none'
                body.style.overflowY = ''
                body.style.paddingRight = `${0}px`
            }
        }

        const isGuest = (elems) => {
            const onClickListener = (e, elem) => {
                e.preventDefault()
                if (elem.classList.contains('header__user')) {
                    window.location.assign('/cabinet/')
                } else {
                    let modal = document.getElementById('enterCabinet')
                    showModal(modal)
                    forgetPassword(modal.querySelector('.forgetPass'))
                }
            }
            onClickHandler(elems, onClickListener)
        }
        isGuest(document.querySelectorAll('.header__user'))
        isGuest(document.querySelectorAll('.header__guest'))

        const getAllElementsModal = (elems, modal) => {
            const onClickListener = (e) => {
                e.preventDefault()
                showModal(modal)
            }
            onClickHandler(elems, onClickListener)
        }
        getAllElementsModal(document.querySelectorAll('.header__burget'), document.getElementById('burgerMenuMob'))
        getAllElementsModal(document.querySelectorAll('.navmob__catalogue'), document.getElementById('catalogueMob'))
        getAllElementsModal(document.querySelectorAll('.products__buy'), document.getElementById('addProduct'))
        getAllElementsModal(document.querySelectorAll('.buy__products'), document.getElementById('addProduct'))
        getAllElementsModal(document.querySelectorAll('.goBasket'), document.getElementById('basketProduct'))
        // getAllElementsModal(document.querySelectorAll('.makeOrder'), document.getElementById('verificationOrder'))
        getAllElementsModal(document.querySelectorAll('.discount__sales'), document.getElementById('honestСredit'))
        getAllElementsModal(document.querySelectorAll('.discount__log'), document.getElementById('wishDiscount'))
        getAllElementsModal(document.querySelectorAll('.base__discount'), document.getElementById('wishDiscount'))
        // getAllElementsModal(document.querySelectorAll('.buy__oneclick'), document.getElementById('buyOneClick'))
        // getAllElementsModal(document.querySelectorAll('.getCredit'), document.getElementById('getProductCredit'))
        // getAllElementsModal(document.querySelectorAll('.imgModalShow'), document.getElementById('cardImgVideo'))
        getAllElementsModal(document.querySelectorAll('.global__filtermob'), document.getElementById('filterMob'))
        getAllElementsModal(document.querySelectorAll('.global__sortmob'), document.getElementById('filterSearch'))
        getAllElementsModal(document.querySelectorAll('.receiveComment'), document.getElementById('sentReviewModal'))

        const toggleAllLists = (elems) => {
            const onClickListener = (e, elem) => {
                e.preventDefault()
                elem.firstElementChild.classList.toggle('active')
                if (elem.nextElementSibling) elem.nextElementSibling.classList.toggle('block')
                if (elem.closest('.services__heading') || elem.closest('.viewedcab__categories')) elem.classList.toggle('activeElem')
            }
            onClickHandler(elems, onClickListener)
        }
        toggleAllLists(document.querySelectorAll('.arrow__href'))  /* rotate svg and colored svg icons */
        toggleAllLists(document.querySelectorAll('.global__linksfilter')) /* just set blue color to square then reload page and return back to white, page: _all_promotions and others */
        toggleAllLists(document.querySelectorAll('.services__heading'))
        toggleAllLists(document.querySelectorAll('.viewedcab__categories'))

        const toggleFilterLists = (elems) => {
            const onClickListener = (e, elem) => {
                e.preventDefault()
                if (elem.classList.contains('articles__filtershow')) {
                    elem.previousElementSibling.classList.toggle('block')
                } else if (elem.previousElementSibling.querySelector('.global__list')) {
                    elem.previousElementSibling.querySelector('.global__list>ul').classList.toggle('block')
                }
                for (let el of elem.querySelectorAll('*')) {
                    el.classList.toggle('active')
                }
            }
            onClickHandler(elems, onClickListener)
        }
        toggleFilterLists(document.querySelectorAll('.global__filterarrow'))

        const serializeFormSendXHR = (form, url, id) => {
            if (!form) return
            form.onsubmit = (e) => {
                // if (grecaptcha && grecaptcha.getResponse().length === 0) return // uncomment when key capcha able
                const callback = (response) => {
                    if (form.id === 'mailingForm') {
                        textInfoModal = 'Спасибо, Вы подписались на рассылку!'
                    } else if (form.id === 'newCustomerForm' || form.id === 'regularCustomerForm' || form.id === 'oneClickForm') {
                        textInfoModal = 'Спасибо, Ваш заказ оформлен!'
                        // headerProductCount.innerHTML = ''
                    } else if (form.id === 'reviewFormSent' || form.id === 'commentFormTop' || form.id === 'commentFormBot') {
                        textInfoModal = 'Спасибо, Ваш отзыв отправлен!<br><span>Он будет опубликован после проверки модератором!</span>'
                    } else if (form.id === 'registrationForm' && response.result === 'error') {
                        textInfoModal = 'Уже существует пользователь с таким e-mail.<br><span>Если вы уверены, что это Ваш e-mail, воспользуйтесь формой забыли пароль.</span><br><span class="forgetPass">Забыли пароль?</span>'
                    } else if (form.id === 'registrationForm' && response.result === 'ok') {
                        textInfoModal = 'Спасибо за регистрацию!<br><span>На Ваш e-mail выслано письмо для подтверждения входа в личный кабинет.</span>'
                    } else if (form.id === 'forgetPassForm') {
                        textInfoModal = 'Спасибо!<br><span>На указаный адрес отправлено письмо<br>с инструкциями по восстановлению пароля.</span>'
                    } else if (form.id === 'changeUserPass' && response.result === 'error') {
                        textInfoModal = 'Извините, но текущий пароль неверный!'
                    } else if (form.id === 'changeUserPass' && response.result === 'ok') {
                        textInfoModal = 'Спасибо!<br><span>Ваш пароль успешно изменен!</span>'
                    } else if (form.id === 'wishForm' || form.id === 'questionFormTop' || form.id === 'questionFormBot' || form.id === 'installExpertVisitDesk' || form.id === 'installExpertVisitMob') {
                        textInfoModal = 'Спасибо, Ваш запрос оставлен!<br> <span>С вами свяжется менеджер в ближайшее время!</span>'
                    }
                    infoModal.querySelector('h3').innerHTML = textInfoModal
                    forgetPassword(infoModal.querySelector('.forgetPass'))
                    showModal(infoModal)
                    form.reset()
                }
                // let data = new FormData(form)
                // data.product_id = id
                // sendXHR(url, data, callback)
                callback('ok')
                e.preventDefault()
            }
        }
        serializeFormSendXHR(document.getElementById('mailingForm'), '/submit/maillist/')
        // serializeFormSendXHR(document.getElementById('commentFormTop'), '/submit/review/')
        // serializeFormSendXHR(document.getElementById('commentFormBot'), '/submit/review/')
        // serializeFormSendXHR(document.getElementById('questionFormTop'), '/submit/question/')
        // serializeFormSendXHR(document.getElementById('questionFormBot'), '/submit/question/')
        // serializeFormSendXHR(document.getElementById('installExpertVisitDesk'), '/submit/expert/')
        // serializeFormSendXHR(document.getElementById('installExpertVisitMob'), '/submit/expert/')

        const forgetPassword = (elem) => {
            if (!elem) return
            elem.onclick = (e) => {
                e.preventDefault()
                let modal = document.getElementById('forgetPassModal')
                showModal(modal)
                serializeFormSendXHR(modal.querySelector('#forgetPassForm'), '/submit/restore/')
            }
        }

        let validateOptions = {
            nameCheck: /.{2,}/,
            emailCheck: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            phoneCheck: /[0-9]{10}/,
            passCheck: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
            divTooltip: document.createElement('div'),
            createTooltip(input) {
                validateOptions.divTooltip.className = 'formtooltip'
                body.append(validateOptions.divTooltip)
                validateOptions.divTooltip.innerHTML = input.dataset.formtooltip
                validateOptions.divTooltip.style.display = 'block'
                validateOptions.divTooltip.style.left = `${input.getBoundingClientRect().left}px`
                validateOptions.divTooltip.style.top = `${input.getBoundingClientRect().bottom + 10 + window.pageYOffset}px`
            },
            removeTooltip() {
                validateOptions.divTooltip.style.display = 'none'
            },
            checkValue(input, check) {
                if (input.value === '' || !check.test(input.value)) {
                    validateOptions.createTooltip(input)
                    input.focus()
                } else {
                    validateOptions.removeTooltip()
                }
            },
            checkPass(input, pass) {
                if (input.value !== pass) {
                    validateOptions.createTooltip(input)
                    input.focus()
                } else {
                    validateOptions.removeTooltip()
                }
            },
            showPass(...inputs) {
                inputs.forEach((input) => input.type === "password" ? input.type = "text" : input.type = "password")
            }
        }
        const registrationFormValidate = (form) => {
            if (!form) return
            let set = {
                name: [form.querySelector('[name="SignupForm[name]"]'), validateOptions.nameCheck],
                email: [form.querySelector('[name="SignupForm[email]"]'), validateOptions.emailCheck],
                phone: [form.querySelector('[name="SignupForm[phone]"]'), validateOptions.phoneCheck],
                pass: [form.querySelector('[name="SignupForm[password]"]'), validateOptions.passCheck]
            },
                confirm = form.querySelector('[name="SignupForm[password_confirm]"]'),
                terms = form.querySelector('[name="SignupForm[consent]"]')
            form.querySelector('.showPassword input').onclick = () => {
                validateOptions.showPass(set.pass[0], confirm)
            }
            for (let key in set) {
                set[key][0].addEventListener('input', () => {
                    validateOptions.checkValue(set[key][0], set[key][1])
                })
            }
            confirm.oninput = () => {
                validateOptions.checkPass(confirm, set.pass[0].value)
            }
            terms.oninput = () => {
                if (terms.checked) validateOptions.removeTooltip()
            }
            form.querySelector('button').onclick = () => {
                if (set.name[0].value === '' || !validateOptions.nameCheck.test(set.name[0].value)) {
                    validateOptions.createTooltip(set.name[0])
                    set.name[0].focus()
                    return false
                }
                if (set.email[0].value === '' || !validateOptions.emailCheck.test(set.email[0].value)) {
                    validateOptions.createTooltip(set.email[0])
                    set.email[0].focus()
                    return false
                }
                if (set.phone[0].value === '' || !validateOptions.phoneCheck.test(set.phone[0].value)) {
                    validateOptions.createTooltip(set.phone[0])
                    set.phone[0].focus()
                    return false
                }
                if (set.pass[0].value === '' || !validateOptions.passCheck.test(set.pass[0].value)) {
                    validateOptions.createTooltip(set.pass[0])
                    set.pass[0].focus()
                    return false
                }
                if (confirm.value !== set.pass[0].value) {
                    validateOptions.createTooltip(confirm)
                    confirm.focus()
                    return false
                }
                if (!terms.checked) {
                    validateOptions.createTooltip(terms)
                    terms.focus()
                    return false
                }
                serializeFormSendXHR(form, '/auth/registration/')
            }
        }
        registrationFormValidate(document.getElementById('registrationForm'))

        const showContentTabs = (container) => {
            if (!container) return
            container.onclick = (e) => {
                let tab = e.target.closest('.tab')
                if (!tab || tab.classList.contains('active')) return
                let newContent = container.querySelector(`.tabs__content [data-tab="${tab.dataset.tab}"]`)
                container.querySelector('.tabs__content>.active').classList.remove('active')
                newContent.classList.add('active')
                container.querySelector('.tabs__caption .active').classList.remove('active')
                tab.classList.add('active')
                if (container.querySelector('A')) container.querySelector('A').href = tab.dataset.href
            }
        }
        showContentTabs(document.getElementById('tabsMainPage'))
        showContentTabs(document.getElementById('tabsNews'))
        // showContentTabs(document.getElementById('anchorFormComment'))
        // showContentTabs(document.getElementById('formComment'))
        // showContentTabs(document.getElementById('viewedcabProducts'))
        // showContentTabs(document.querySelector('.verifyOrderArticle'))  // needs to start in verificationOrder modal to get click
        // showContentTabs(document.querySelector('.productCreditArticle'))

        const showContentTabsDesk = (container) => {
            if (!container) return
            container.onclick = (e) => {
                let tab = e.target.closest('.tabLink')
                if (!tab || tab.classList.contains('active')) return
                let newContent = container.querySelector(`.tabsContent [data-tab="${tab.dataset.tab}"]`)
                container.querySelector('.tabsContent .active').classList.remove('active')
                newContent.classList.add('active')
                container.querySelector('.tabsCaption .active').classList.remove('active')
                tab.classList.add('active')
            }
        }
        showContentTabsDesk(document.getElementById('manufacturesLinks'))

        const pausePlayVideo = (elems) => {
            if (!elems) return
            const onClickListener = (e, elem) => {
                let target = e.target.closest('.carousel-control-prev,.carousel-control-next, .carousel-indicators')
                if (!target) return
                let iframe = elem.querySelector('.carousel-inner .active iframe')
                if (!iframe) return
                elem.querySelector('.carousel-inner .active iframe').src = iframe.src
            }
            onClickHandler(elems, onClickListener)
        }
        pausePlayVideo(document.querySelectorAll('.carousel'))

        const dateCalendarLimit = (elems) => {
            if (!elems) return
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

        window.addEventListener('resize', () => {
            // widthInner = window.innerWidth
            // getComporisionRowWidth(document.querySelector('.comparison__section'))
            // scrollCards(document.querySelectorAll('.verticalSlider'))
            // horizontalSlider(document.querySelectorAll('.horizontalSlider'))
            // showCommentsToggleClick(document.querySelectorAll('.comments__text i'))
            validateOptions.removeTooltip()
        })

        return () => {
            body.style.overflow = ''
            body.style.overflowY = ''
            body.style.paddingRight = 0 + 'px'
        }
    }, [props])
    return (
        <>
            <div id="burgerMenuMob">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <div className="burger__top flexbet">
                        <i className="burger__user"></i>
                        <p>Андрей Петренко</p>
                        <a href=" ">Ru</a>
                        <div className="burger__slash">/</div>
                        <a href=" ">Ua</a>
                    </div>
                    <div className="horizont"></div>
                    <ul className="burger__list">
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Личный кабинет
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href="_cabinet_discount.html">Дисконтная программа</a></li>
                                <li><a href="_cabinet_info.html">Моя информация</a></li>
                                <li><a href="_cabinet_basket.html">Корзина</a></li>
                                <li><a href="_cabinet_wish.html">Список желаний</a></li>
                                <li><a href="_cabinet_comments.html">Мои отзывы и комментарии</a></li>
                                <li><a href="_cabinet_viewed.html">Просмотренные товары</a></li>
                                <li><a href="_cabinet_orders.html">Мои заказы</a></li>
                                <li><Link to="/" className="orange" replace>Выход</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" replace>Главная</Link></li>
                        <li><Link to="Services" replace>Услуги</Link></li>
                        <li><Link to="Hall" replace>Зал прослушивания</Link></li>
                        <li><Link to="Delivery" replace>Оплата и доставка</Link></li>
                        <li><Link to="Warranty" replace>Гарантия и сервис</Link></li>
                        <li><Link to="Credit" replace>Рассрочка</Link></li>
                        <li><Link to="Actions" replace>Акции</Link></li>
                        <li><Link to="Contacts" replace>Конткаты</Link></li>
                        <li className="global__list"><Link to="About" className="arrow__href flexcenter">О Нас
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </Link>
                            <ul>
                                <li><Link to="Sertificate" replace>Сертификат</Link></li>
                                <li><Link to="Career" replace>Вакансии</Link></li>
                                <li><Link to="Cooperation" replace>Сотрудничество</Link></li>
                            </ul>
                        </li>
                        <li><Link to="Bonus" className="header__bonus orange" replace>Бонусная программа</Link></li>
                    </ul>
                </article>
            </div>
            <div id="enterCabinet">
                <div className="relative">
                    <div className="button__closegl"></div>
                    <form action="" id="cabinetForm" className="flexcol">
                        <h2>Вход в личный кабинет</h2>
                        <label htmlFor="email">Эл. почта или телефон</label>
                        <input type="email" name="email" required />
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" required />
                        <div className="cabinet__checkbox flexbet">
                            <label className="global__label">
                                <input type="checkbox" />
                                <span className="global__checkmark"></span>Запомнить меня
                            </label>
                            <a href=" " className="forgetPass">Забыли пароль?</a>
                        </div>
                        <button form="cabinetForm">ВОЙТИ</button>
                        <h3>НОВЫЕ КЛИЕНТЫ</h3>
                        <p>Создав учётную запись на нашем сайте, вы будете тратить меньше времени на оформление заказа, сможете
                    хранить несколько адресов доставки, отслеживать состояние заказов, а также многое другое.</p>
                        <Link to="Registration" className="cabinet__href">Зарегистрироваться</Link>
                    </form>
                </div>
            </div>
            <div id="catalogueMob">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <h3 className="catalogue__production textcenter white">Каталог товаров</h3>
                    <ul className="catalogue__list">
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Домашние кинотеатры
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                 <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                 <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                 <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                 <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Акустические
                        системы, HiFi/HiEnd
                         <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                 <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Стерео
                        Системы, HiFI/HiEnd
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Виниловые
                        проигрыватели
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Кабели,
                        HiFi/Hiend
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Наушники и
                        портатив
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="global__list"><a href=" " className="arrow__href flexcenter">Профессиональное
                        оборудование
                            <svg>
                                <use xlinkHref={`${icons}#arrowModal`}></use>
                            </svg>
                        </a>
                            <ul>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                    <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                                <li><a href=" " className="arrow__href flexcenter">Напольная
                                акустика
                                <svg>
                                        <use xlinkHref={`${icons}#arrowModal`}></use>
                                    </svg>
                                </a>
                                    <ul>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                        <li><a href=" ">Напольная акустика</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="Category" className="flexcenter juststart" replace>Все категории</Link></li>
                        <li className="global__back orange">Назад</li>
                    </ul>
                </article>
            </div>
            <div id="forgetPassModal">
                <div className="relative">
                    <div className="button__closegl"></div>
                    <form action="" id="forgetPassForm" className="flexcol">
                        <h2>Вход</h2>
                        <label htmlFor="email">Пожалуйста, укажите e-mail, указанный Вами при регистрации!</label>
                        <input type="email" name="email" className="widthDesk" placeholder="e-mail" required />
                        <button form="forgetPassForm" className="white" type="submit">ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
            <div id="addProduct">
                <article className="flexcenter relative">
                    <div className="button__closegl"></div>
                    <div>
                        <h3 className="flexcenter flexwrap black marginbot4020">
                            <svg>
                                <use xlinkHref={`${icons}#checkmarker`}></use>
                            </svg>
                            Товар был добавлен в корзину. Товаров в Вашей
                    корзине:&nbsp;<span className="product__count">0</span></h3>
                        <div className="flexcenter justcenter col580">
                            <button className="global__back flexcenter marginbot4020">ПРОДОЛЖИТЬ ПОКУПКИ</button>
                            <button className="goBasket flexcenter white marginbot4020">ПЕРЕЙТИ В КОРЗИНУ</button>
                        </div>
                    </div>
                </article>
            </div>
            <div id="basketProduct">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <article id="cabinetModalBasket" className="basket__section">
                        <h2 className="flexcenter juststart marginbot4020">КОРЗИНА&nbsp;(<span
                            className="basketHeaderResult">0</span>&nbsp;товара)</h2>
                        <hgroup className="cabinet__empty marginbot4020 noneDesk">
                            <h2 className="black marginbot2010">Ваша корзина покапуста</h2>
                            <h3 className="flexcenter justcenter marginbot2010 px13_580">Чтобы сделать заказ, перейдите на&nbsp;<Link
                                to="/">Главную Страницу</Link>&nbsp;сайта</h3>
                        </hgroup>
                        <article className="cabinet__content noneDesk widthDesk active">
                            <hgroup className="blockcard__hgroup flexcenter textcenter none768 white">
                                <h3>ТОВАР</h3>
                                <h3>КОЛЛИЧЕСТВО</h3>
                                <h3 className="textleft">ЦЕНА</h3>
                            </hgroup>
                            <div className="cardMinPlus wrapperOrders relative">
                                <i className="removeOrders"></i>
                                <div className="block__card flexstart marginbot2010">
                                    <img src={photo_001} alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <p className="flexstart">Код товара:&nbsp;<span className="cardBuyCode"
                                                    data-id="38">8351057</span></p>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <p className="cardAmount flexcenter">1</p>
                                                <i className="cardClickPlus">+</i>
                                            </div>
                                            <p className="cardProductPrice basePrices flexcenter">
                                                20120<span>&nbsp;грн/<br />&nbsp;комплект</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block__card flexstart marginbot2010">
                                    <img src={photo_002} alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175</h5>
                                                <p className="flexstart">Код товара:&nbsp;<span>8351057</span></p>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <h4 className="orange">подарок</h4>
                                            </div>
                                            <p className="basePrices flexcenter">1<span>&nbsp;грн</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardMinPlus wrapperOrders relative">
                                <i className="removeOrders"></i>
                                <div className="block__card flexstart marginbot2010">
                                    <img src={photo_001} alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <p className="flexstart">Код товара:&nbsp;<span className="cardBuyCode"
                                                    data-id="83">8351057</span></p>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <p className="cardAmount flexcenter">1</p>
                                                <i className="cardClickPlus">+</i>
                                            </div>
                                            <p className="cardProductPrice basePrices flexcenter">
                                                42120<span>&nbsp;грн/<br />&nbsp;комплект</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <article className="basket__checkout">
                                <article className="cardbuy__total flexcol marginbot4020">
                                    <div className="cardbuy__additional selfstart marginbot2010 relative">
                                        <h3 className="marginbot2010">Дополнительные услуги</h3>
                                        <div className="none1024">
                                            <div className="products__popup">
                                                <ul>
                                                    <li>1. Выезд эксперта на дом.<a href=" ">В любое удобное для Вас время
                                                    суток!</a>
                                                        <p>Услуга безплатная при заказе на сумму от 2000грн</p>
                                                    </li>
                                                    <li>2. Настройка оборудования.<a href=" ">В любое удобное для Вас время
                                                    суток!</a>
                                                        <p>Услуга безплатная при заказе на сумму от 2000грн</p>
                                                    </li>
                                                    <li>2. Установка телевизора.<a href=" ">В любое удобное для Вас время
                                                    суток!</a>
                                                        <p>Услуга безплатная при заказе на сумму от 5000грн</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h5 className="additionalServices flexbet">
                                            <span className="add__basetext">Выпадающее меню с вариантами услуги</span>
                                            <span className="add__service01" hidden>Выезд эксперта на дом (г. Киев)</span>
                                            <span className="add__service02" hidden>Настройка оборудования</span>
                                            <span className="add__service03" hidden>Установка телевизора</span>
                                            <i></i></h5>
                                        <article className="flexcol noneDesk">
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" data-addservices-id="4" className="add__service0"
                                                    name="service4" />
                                                <span className="global__filtercheckmark"></span>
                                                <i className="black">Выезд эксперта на дом (г. Киев)</i>
                                                <b className="flexcenter">499.99<span>&nbsp;грн</span></b>
                                            </label>
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" data-addservices-id="3" className="add__service1"
                                                    name="service3" />
                                                <span className="global__filtercheckmark"></span>
                                                <i className="black">Настройка оборудования</i>
                                                <b className="flexcenter">199.99<span>&nbsp;грн</span></b>
                                            </label>
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" data-addservices-id="2" className="add__service2"
                                                    name="service2" />
                                                <span className="global__filtercheckmark"></span>
                                                <i className="black">Установка телевизора</i>
                                                <b className="flexcenter">299.99<span>&nbsp;грн</span></b>
                                            </label>
                                        </article>
                                    </div>
                                    <div className="flexcenter selfnend">
                                        <h2 className="black">Всего к оплате:</h2>
                                        <p className="cardbuy__totalprice baseTotal flexcenter justcenter white">
                                            0<span>&nbsp;грн</span>
                                        </p>
                                    </div>
                                </article>
                                <div className="flexcenter justcenter">
                                    <Link to="Category" className="global__back flexcenter marginbot4020">ПРОДОЛЖИТЬ
                                ПОКУПКИ</Link>
                                    <button className="makeOrder flexcenter white marginbot4020">ОФОРМИТЬ
                                ЗАКАЗ</button>
                                </div>
                            </article>
                        </article>
                    </article>

                    <div className="basket__section">
                        <h2 className="textleft marginbot2010 px15_580">ВМЕСТЕ ДЕШЕВЛЕ</h2>
                        <article className="horizontalSlider relative">
                            <i className="horizontalPrev"></i>
                            <article className="horizontalBox flexcenter juststart">
                                <div id="basketModal_01" className="horizontalBlock">
                                    <article className="grid justcenter aligncenter">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card">
                                                <img src={photo_003} alt="" />
                                                <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                <div className="flexcenter">
                                                    <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                    <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="base__plus">+</i>
                                        <article className="verticalSlider flexcol">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_004} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <p className="basePrices flexcenter">42120<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical__switch flexcenter"><span
                                                className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></div>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <i className="base__equal">=</i>
                                        <div className="flexcenter justcenter basegift__result">
                                            <div>
                                                <p className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </p>
                                                <h5 className="flexcenter marginbot2010 px12_580">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <button className="buyComplect flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</button>
                                                <h5 className="flexcenter px12_580">Код комплекта:&nbsp;<span>8351060</span></h5>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div id="basketModal_02" className="horizontalBlock">
                                    <article className="grid justcenter aligncenter">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card">
                                                <img src={photo_003} alt="" />
                                                <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                <div className="flexcenter">
                                                    <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                    <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="base__plus">+</i>
                                        <article className="verticalSlider flexcol">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_004} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <p className="basePrices flexcenter">42120<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical__switch flexcenter"><span
                                                className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></div>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <i className="base__equal">=</i>
                                        <div className="flexcenter justcenter basegift__result">
                                            <div>
                                                <p className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </p>
                                                <h5 className="flexcenter marginbot2010 px12_580">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <button className="buyComplect flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</button>
                                                <h5 className="flexcenter px12_580">Код комплекта:&nbsp;<span>8351060</span></h5>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div id="basketModal_03" className="horizontalBlock">
                                    <article className="grid justcenter aligncenter">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card">
                                                <img src={photo_003} alt="" />
                                                <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                <div className="flexcenter">
                                                    <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                    <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="base__plus">+</i>
                                        <article className="verticalSlider flexcol">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_004} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <p className="basePrices flexcenter">42120<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <img src={photo_003} alt="" />
                                                        <a href=" " className="marginbot2010">Усилитель мощности Naim Nap v175</a>
                                                        <div className="flexcenter">
                                                            <i className="flexcenter relative">112 120<span>&nbsp;грн</span></i>
                                                            <p className="basePrices flexcenter orange">1<span>&nbsp;грн</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical__switch flexcenter"><span
                                                className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></div>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <i className="base__equal">=</i>
                                        <div className="flexcenter justcenter basegift__result">
                                            <div>
                                                <p className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </p>
                                                <h5 className="flexcenter marginbot2010 px12_580">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <button className="buyComplect flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</button>
                                                <h5 className="flexcenter px12_580">Код комплекта:&nbsp;<span>8351060</span></h5>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </article>
                            <i className="horizontalNext"></i>
                        </article>
                    </div>
                </article>
            </div>
            <div id="infoModal">
                <article className="flexcenter relative">
                    <i className="button__closegl"></i>
                    <div className="flexcenter">
                        <svg>
                            <use xlinkHref={`${icons}#checkmarker`}></use>
                        </svg>
                        <h3 className="black"> </h3>
                    </div>
                </article>
            </div>
            <div id="honestСredit">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <div className="marginbot2010">
                        <h2 className="honestTitle marginbot2010 red">Акция! Честный кредит до 24 месяцев. Акция! Честный Акция! Честный
                        кредит до
                    24 месяцев. Акция! Честный</h2>
                        <ul className="honestContent">
                            <li>Для всех участников акции действует специальное предложение -
                        покупайте в этот же день любой другой товар со ЗНАЧИТЕЛЬНОЙ СКИДКОЙ!</li>
                            <li>Скидка устанавливается индивидуально на каждый товар. Единой величины
                        скидки нет.</li>
                            <li>Варианты Подарков:</li>
                            <li className="dashInside">Акустический кабель</li>
                            <li className="dashInside">Межблочный кабель</li>
                            <li className="dashInside">HDMI кабель (3D, 4K)</li>
                            <li className="dashInside marginbot4020">Другой вариант полезного подарка по согласованию с Вами.</li>
                            <li><a className="honestHref textright underline" href=" ">Перейти на страницу с акцией</a></li>
                        </ul>
                    </div>
                </article>
            </div>
            <div id="wishDiscount">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <form action="" id="wishForm" className="flexcol textcenter">
                        <h2>Хочу скидку</h2>
                        <input id="discountProductID" type="hidden" name="product" value="0" />
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="name" placeholder="Андрей Павлович" required />
                        <label htmlFor="phone">Телефон*</label>
                        <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required />
                        <label htmlFor="comment">Комментарий</label>
                        <textarea name="comment" rows="8" className="flexcenter"></textarea>
                        <div className="flexcenter wish__symbol">
                            <p className="flexcenter">dslkvflcfs</p>
                            <input type="text" placeholder="Введите символ с картинки" required />
                        </div>
                        <p>Менеджер перезвонит Вам, и сориентирует размер скидки</p>
                        <button form="wishForm">Отправить</button>
                    </form>
                </article>
            </div>
            <div id="sentReviewModal">
                <div className="relative">
                    <div className="button__closegl"></div>
                    <form action="" id="reviewFormSent" className="comment__form flexcol">
                        <h2>Оставить отзыв</h2>
                        <input type="text" name="name" placeholder="Имя, Фамилия*" className="marginbot2010" required />
                        <input type="email" id="reviewFormEmail" placeholder="E-mail" required />
                        <label htmlFor="reviewFormEmail" className="widthDesk">E-mail не отображается на сайте</label>
                        <input type="text" name="plus" placeholder="+ Плюсы" className="marginbot2010" required />
                        <input type="text" name="minus" placeholder="- Минусы" className="marginbot2010" required />
                        <textarea name="comment" rows="5" placeholder="Текст сообщения*" required></textarea>
                        <a href=" " className="widthDesk marginbot2010">Правила публикации отзывов</a>
                        <div className="flexbet widthDesk">
                            <p>Пожалуйста, оцените продукт:</p>
                            <div className="global__rating flexcenter">
                                <input type="radio" name="reviewFormSent" id="reviewFormSent01_01" /><label
                                    htmlFor="reviewFormSent01_01"></label>
                                <input type="radio" name="reviewFormSent" id="reviewFormSent01_02" /><label
                                    htmlFor="reviewFormSent01_02"></label>
                                <input type="radio" name="reviewFormSent" id="reviewFormSent01_03" /><label
                                    htmlFor="reviewFormSent01_03"></label>
                                <input type="radio" name="reviewFormSent" id="reviewFormSent01_04" /><label
                                    htmlFor="reviewFormSent01_04"></label>
                                <input type="radio" name="reviewFormSent" id="reviewFormSent01_05" /><label
                                    htmlFor="reviewFormSent01_05"></label>
                            </div>
                        </div>
                        <div className="flexbet widthDesk comment__symbol marginbot4020">
                            <p className="flexcenter">dslkvflcfs</p>
                            <input type="text" placeholder="Введите символ с картинки" required="" />
                        </div>
                        <input type="hidden" name="ProductReviewRecord[product_id]" value="" />
                        <button form="reviewFormSent">ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
            <div id="filterMob">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <h3 className="catalogue__production textcenter white">Каталог товаров</h3>
                    <form action="" id="filterForm" className="flexcol">
                        <div className="filterStore"></div>
                        <h5 className="mobreset__filter underline">Сбросить</h5>
                        <h5>В других разделах:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Домашние кинотеатры<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Акустические системы, HiFi/HiEnd<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Стерео Системы, HiFI/HiEnd<span>(23)</span></i>
                        </label>
                        <ul className="filter__list">
                            <li className="global__list">
                                <ul>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Виниловые проигрыватели<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Кабели, HiFi/Hiend<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Наушники и портатив<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Профессиональное оборудование<span>(23)</span></i>
                                    </label></li>
                                </ul>
                                <a href=" " className="global__filterarrow articles__filtershow flexstart">
                                    <svg>
                                        <use xlinkHref={`${icons}#arrow`}></use>
                                    </svg>
                                    <span className="active">Показать
                                все</span><span>Скрыть</span></a>
                            </li>
                        </ul>
                        <div className="horizont"></div>
                        <h5>Производители:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Accurate Audio<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Accustic Arts<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Acer<span>(23)</span></i>
                        </label>
                        <ul className="filter__list">
                            <li className="global__list">
                                <ul>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">coustic Energy<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Acoustic Revive<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">Acoustic Solid<span>(23)</span></i>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" />
                                        <span className="global__filtercheckmark"></span>
                                        <i className="flexcenter black">B&W<span>(23)</span></i>
                                    </label></li>
                                </ul>
                                <a href=" " className="global__filterarrow articles__filtershow flexstart">
                                    <svg>
                                        <use xlinkHref={`${icons}#arrow`}></use>
                                    </svg>
                                    <span className="active">Показать
                                все</span><span>Скрыть</span></a>
                            </li>
                        </ul>
                        <div className="horizont"></div>
                        <h5>Выгодные предложения:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Скидки<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Подарки<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Акции<span>(23)</span></i>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" />
                            <span className="global__filtercheckmark"></span>
                            <i className="flexcenter black">Спецпредложения<span>(23)</span></i>
                        </label>
                        <button form="filterForm">Применить</button>
                    </form>
                </article>
            </div>
            <div id="filterSearch">
                <article className="flexcol alignstart relative">
                    <div className="button__closegl"></div>
                    <a href=" " className="global__linksfilter flexbet"><i></i>от дешевых к дорогим</a>
                    <div className="horizont"></div>
                    <a href=" " className="global__linksfilter flexbet"><i></i>от дорогих к дешевым</a>
                    <div className="horizont"></div>
                    <a href=" " className="global__linksfilter flexbet"><i></i>популярные</a>
                    <div className="horizont"></div>
                    <a href=" " className="global__linksfilter flexbet"><i></i>новинки</a>
                    <div className="horizont"></div>
                    <a href=" " className="global__linksfilter flexbet"><i></i>акционные</a>
                    <div className="horizont"></div>
                </article>
            </div>
        </>
    )
}
