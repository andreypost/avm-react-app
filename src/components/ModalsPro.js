import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';

export const ModalsPro = () => {
    useEffect(() => {
        // console.log(props)
        let currentModal = null
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
                // } else if (target.tagName == 'A' && (target.href).includes(props.pathname)) {
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
        getAllElementsModal(document.querySelectorAll('.products__buy'), document.getElementById('addProduct'))
        getAllElementsModal(document.querySelectorAll('.buy__products'), document.getElementById('addProduct'))
        getAllElementsModal(document.querySelectorAll('.goBasket'), document.getElementById('basketProduct'))
        getAllElementsModal(document.querySelectorAll('.makeOrder'), document.getElementById('verificationOrder'))
        // getAllElementsModal(document.querySelectorAll('.emptyClass'), document.getElementById('orderPlaced'))
        getAllElementsModal(document.querySelectorAll('.discount__sales'), document.getElementById('honestСredit'))
        getAllElementsModal(document.querySelectorAll('.discount__log'), document.getElementById('wishDiscount'))
        getAllElementsModal(document.querySelectorAll('.base__discount'), document.getElementById('wishDiscount'))
        getAllElementsModal(document.querySelectorAll('.buy__oneclick'), document.getElementById('buyOneClick'))
        getAllElementsModal(document.querySelectorAll('.getCredit'), document.getElementById('getProductCredit'))
        getAllElementsModal(document.querySelectorAll('.imgModalShow'), document.getElementById('cardImgVideo'))
        getAllElementsModal(document.querySelectorAll('.global__filtermob'), document.getElementById('filterMob'))
        getAllElementsModal(document.querySelectorAll('.global__sortmob'), document.getElementById('filterSearch'))
    }, [])
    return (
        <>
            <div id="addProduct">
                <article className="flexcenter relative">
                    <div className="button__closegl"></div>
                    <hgroup>
                        <h3 className="flexcenter flexwrap black marginbot4020"><i></i>Товар был добавлен в корзину. Товаров в Вашей
                    корзине:&nbsp;<span className="product__count">0</span></h3>
                        <div className="flexcenter justcenter col580">
                            <h4 className="global__back flexcenter marginbot4020">ПРОДОЛЖИТЬ ПОКУПКИ</h4>
                            <h5 className="goBasket flexcenter white marginbot4020">ПЕРЕЙТИ В КОРЗИНУ</h5>
                        </div>
                    </hgroup>
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
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                20120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image365.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span>8351057</span></h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <h4 className="orange">подарок</h4>
                                            </div>
                                            <h2 className="basePrices flexcenter">1<span>&nbsp;грн</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardMinPlus wrapperOrders relative">
                                <i className="removeOrders"></i>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                42120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <article className="basket__checkout">
                                <article className="cardbuy__total flexcol marginbot4020">
                                    <div className="cardbuy__additional selfstart marginbot2010 relative">
                                        <h3 className="marginbot2010">Дополнительные услуги</h3>
                                        <h5 className="additionalServices flexbet">Выпадающее меню с вариантами
                                    услуги<i></i></h5>
                                        <article className="flexcol noneDesk">
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" name="" />
                                                <span className="global__filtercheckmark"></span>
                                                <h6 className="flexcenter">Выезд эксперта на дом (г. Киев)</h6>
                                            </label>
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" name="" />
                                                <span className="global__filtercheckmark"></span>
                                                <h6 className="flexcenter">Настройка оборудования</h6>
                                            </label>
                                            <label className="global__filterlabel flexcenter">
                                                <input type="checkbox" name="" />
                                                <span className="global__filtercheckmark"></span>
                                                <h6 className="flexcenter">Установка телевизора</h6>
                                            </label>
                                        </article>
                                    </div>
                                    <div className="flexcenter selfnend">
                                        <h2 className="black">Всего к оплате:</h2>
                                        <h1 className="baseTotal flexcenter justcenter white">
                                            0<span>&nbsp;грн</span>
                                        </h1>
                                    </div>
                                </article>
                                <div className="flexcenter justcenter">
                                    <a href="_category.html" className="global__back flexcenter marginbot4020">ПРОДОЛЖИТЬ
                                ПОКУПКИ</a>
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
                                    <article className="flexcenter flexwrap">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card marginbot2010">
                                                <div className="flexbet marginbot2010">
                                                    <img src="./img/Image1.png" alt="" />
                                                    <div className="textleft">
                                                        <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                    </div>
                                                </div>
                                                <div className="flexcenter">
                                                    <h3 className="basePrices flexcenter textleft">
                                                        42120<span>&nbsp;грн</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="base__plus">+</h1>
                                        <article className="verticalSlider flexcol juststart">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="flexcenter"><span className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></h6>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <div className="flexcenter justcenter basegift__result">
                                            <h1 className="base__equal">=</h1>
                                            <div>
                                                <h2 className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </h2>
                                                <h5 className="flexcenter marginbot2010">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <a href=" " className="buy__products flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</a>
                                                <h5 className="flexcenter">Код комплекта:&nbsp;<span>8351060</span></h5>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div id="basketModal_02" className="horizontalBlock">
                                    <article className="flexcenter flexwrap">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card marginbot2010">
                                                <div className="flexbet marginbot2010">
                                                    <img src="./img/Image1.png" alt="" />
                                                    <div className="textleft">
                                                        <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                    </div>
                                                </div>
                                                <div className="flexcenter">
                                                    <h3 className="basePrices flexcenter textleft">
                                                        42120<span>&nbsp;грн</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="base__plus">+</h1>
                                        <article className="verticalSlider flexcol juststart">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="flexcenter"><span className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></h6>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <div className="flexcenter basegift__result">
                                            <h1 className="base__equal">=</h1>
                                            <div>
                                                <h2 className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </h2>
                                                <h5 className="flexcenter marginbot2010">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <a href=" " className="buy__products flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</a>
                                                <h5 className="flexcenter">Код комплекта:&nbsp;<span>8351060</span></h5>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div id="basketModal_03" className="horizontalBlock">
                                    <article className="flexcenter flexwrap">
                                        <div className="toggleProduct relative">
                                            <i className="baseRemove"></i>
                                            <div className="base__card marginbot2010">
                                                <div className="flexbet marginbot2010">
                                                    <img src="./img/Image1.png" alt="" />
                                                    <div className="textleft">
                                                        <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                    </div>
                                                </div>
                                                <div className="flexcenter">
                                                    <h3 className="basePrices flexcenter textleft">
                                                        42120<span>&nbsp;грн</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="base__plus">+</h1>
                                        <article className="verticalSlider flexcol juststart">
                                            <i className="verticalArrowup"></i>
                                            <div className="verticalBox">
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggleProduct relative">
                                                    <i className="baseRemove"></i>
                                                    <div className="base__card">
                                                        <div className="flexbet marginbot2010">
                                                            <img src="./img/base_02.png" alt="" />
                                                            <div className="textleft">
                                                                <a href=" ">Усилитель мощности Naim Nap v175</a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcenter">
                                                            <h5 className="flexcenter relative">112
                                                        120<span>&nbsp;грн</span></h5>
                                                            <h3 className="basePrices flexcenter orange">
                                                                42120<span>&nbsp;грн</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="flexcenter"><span className="verticalCurrent">1</span>&nbsp;из&nbsp;
                                        <span className="verticalLast">0</span></h6>
                                            <i className="verticalArrowdown"></i>
                                        </article>
                                        <div className="flexcenter basegift__result">
                                            <h1 className="base__equal">=</h1>
                                            <div>
                                                <h2 className="baseTotal flexcenter orange justcenter marginbot2010">
                                                    0<span>&nbsp;грн</span>
                                                </h2>
                                                <h5 className="flexcenter marginbot2010">Ваша экономия:&nbsp;<span>70
                                                000</span> грн
                                        </h5>
                                                <a href=" " className="buy__products flexcenter white marginbot2010">КУПИТЬ
                                            ВМЕСТЕ</a>
                                                <h5 className="flexcenter">Код комплекта:&nbsp;<span>8351060</span></h5>
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
            <div id="verificationOrder">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <div id="verificyModalOrder" className="verify__section">
                        <h2 className="flexcenter juststart marginbot4020">ОФОРМЛЕНИЕ ЗАКАЗА&nbsp;(<span
                            className="basketHeaderResult">0</span>&nbsp;заказ)</h2>
                        <hgroup className="cabinet__empty marginbot4020 noneDesk">
                            <h2 className="black marginbot2010">Ваша корзина покапуста</h2>
                            <h3 className="flexcenter justcenter marginbot2010 px13_580">Чтобы сделать заказ, перейдите на&nbsp;<a
                                href="index.html">Главную Страницу</a>&nbsp;сайта</h3>
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
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5 id="goods">Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                20120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image365.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span>8351057</span></h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <h4 className="orange">подарок</h4>
                                            </div>
                                            <h2 className="basePrices flexcenter">1<span>&nbsp;грн</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardMinPlus wrapperOrders relative">
                                <i className="removeOrders"></i>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                42120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <article className="verifyOrderArticle verify__article">
                                <div className="cardbuy__additional selfstart marginbot4020 relative">
                                    <h3 className="marginbot2010">Дополнительные услуги</h3>
                                    <h5 className="additionalServices flexbet">Выпадающее меню с вариантами
                                услуги<i></i></h5>
                                    <article className="flexcol noneDesk">
                                        <label className="global__filterlabel flexcenter">
                                            <input type="checkbox" name="" />
                                            <span className="global__filtercheckmark"></span>
                                            <h6 className="flexcenter">Выезд эксперта на дом (г. Киев)</h6>
                                        </label>
                                        <label className="global__filterlabel flexcenter">
                                            <input type="checkbox" name="" />
                                            <span className="global__filtercheckmark"></span>
                                            <h6 className="flexcenter">Настройка оборудования</h6>
                                        </label>
                                        <label className="global__filterlabel flexcenter">
                                            <input type="checkbox" name="" />
                                            <span className="global__filtercheckmark"></span>
                                            <h6 className="flexcenter">Установка телевизора</h6>
                                        </label>
                                    </article>
                                </div>
                                <hgroup className="tabs__caption flexcenter marginbot4020">
                                    <h3 className="tab active black px13_580" data-tab="form01">НОВЫЙ ПОКУПАТЕЛЬ</h3>
                                    <h3 className="tab black px13_580" data-tab="form02">ПОСТОЯННЫЙ ПОКУПАТЕЛЬ</h3>
                                </hgroup>
                                <article className="tabs__content verify__forms">
                                    <form id="newCustomerForm" className="tabs__block marginbot4020 active" data-tab="form01">
                                        <div className="flexbet col768">
                                            <label htmlFor="name" className="widthDesk marginbot2010">Имя *<input type="text"
                                                name="name" className="blue" required="" /></label>
                                            <label htmlFor="surname" className="widthDesk  marginbot2010">Фамилия *<input type="text"
                                                name="surname" className="blue" required="" /></label>
                                        </div>
                                        <div className="flexbet col768">
                                            <label htmlFor="email" className="widthDesk marginbot2010">E-mail *<input type="email"
                                                name="email" className="blue" required="" /></label>
                                            <label htmlFor="phone" className="widthDesk marginbot2010">Номер телефона *<input
                                                type="text" name="phone" pattern="[0-9]{10}" className="blue"
                                                required="" /></label>
                                        </div>
                                        <div className="flexbet col768">
                                            <label htmlFor="adress" className="widthDesk marginbot2010">Адрес<input type="text"
                                                name="adress" className="blue" /></label>
                                            <label htmlFor="city" className="widthDesk marginbot2010">Город
                                        <input type="text" name="city" className="blue" /></label>
                                        </div>
                                        <p className="marginbot4020 red">* - поля обязательные для заполнения</p>
                                        <article className="grid verify__methods col768">
                                            <div className="inputForm01">
                                                <h3 className="marginbot2010 px15_580">Способ доставки</h3>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Самовывоз</h3>
                                                </label>
                                                <h5 className="noneDesk inputForm marginbot4020 px13_580">ПН-ВС с 9:00 до
                                            22:00<br />Магазин: 03191 г. Киев, ул. Д. Луценко, 2а </h5>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Доставка курьером</h3>
                                                </label>
                                                <input className="noneDesk inputForm marginbot4020 blue" type="text"
                                                    placeholder="Адрес доставки" />
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Новая почта</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Интайм</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Гюнсел</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Автолюкс</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Мист Экспресс</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Укрпочта</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Ночной экспресс</h3>
                                                </label>
                                                <div
                                                    className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                    <select name="">
                                                        <option value="">Отделение новой почты</option>
                                                        <option value="0">Отделение новой почты №10</option>
                                                        <option value="1">Отделение новой почты №20</option>
                                                        <option value="2">Отделение новой почты №30</option>
                                                        <option value="4">Отделение новой почты №10</option>
                                                        <option value="5">Отделение новой почты №20</option>
                                                        <option value="6">Отделение новой почты №30</option>
                                                        <option value="7">Отделение новой почты №10</option>
                                                        <option value="8">Отделение новой почты №20</option>
                                                        <option value="9">Отделение новой почты №30</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="inputForm02">
                                                <h3 className="marginbot2010 px15_580">Способ оплаты</h3>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Наличными при получении товара</h3>
                                                </label>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Безналичный расчет</h3>
                                                </label>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Приват24</h3>
                                                </label>
                                                <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Онлайн картой VISA/MasterCard</h3>
                                                </label>
                                                <label className="showInputForm global__filterlabel flexcenter">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h3 className="flexcenter blue px15_580">Рассрочка/Кредит</h3>
                                                </label>
                                                <article className="noneDesk inputForm verify__bankscredit">
                                                    <div className="tabs__caption  inputForm03">
                                                        {/* <div id="buyCredit" className="verify__button textcenter white">Рассрочка
                                                    online Плати Позже</div>
                                                            <div id="liqpay_checkout" className="verify__button textcenter white">LiqPay</div>
                                                            <div id="ukrsibbank" className="verify__button textcenter white"
                                                                onclick="sendEcomData()">ukrsibbank</div> */}
                                                        <label className="showInnerInput global__filterlabel flexcenter">
                                                            <input className="tab" type="checkbox" name="" data-tab="bank01" />
                                                            <span className="global__filtercheckmark"></span>
                                                            <h3 className="flexcenter blue px15_580">ПриватБанк</h3>
                                                        </label>
                                                        <label className="showInnerInput global__filterlabel flexcenter">
                                                            <input className="tab" type="checkbox" name="" data-tab="bank02" />
                                                            <span className="global__filtercheckmark"></span>
                                                            <h3 className="flexcenter blue px15_580">ОТП банк</h3>
                                                        </label>
                                                        <label
                                                            className="showInnerInput global__filterlabel flexcenter marginbot4020">
                                                            <input className="tab" type="checkbox" name="" data-tab="bank03" />
                                                            <span className="global__filtercheckmark"></span>
                                                            <h3 className="flexcenter blue px15_580">Укрсиббанк</h3>
                                                        </label>
                                                    </div>
                                                    <article className="tabs__content verify__sliderbanks marginbot4020">
                                                        <div className="tabs__block sliderCreditPrivat" data-tab="bank01">
                                                            <div className="flexcenter justcenter">
                                                                <input className="textcenter" name="payments" type="text"
                                                                    data-min="1" data-max="36" defaultValue="36" />
                                                                <h6>платежей на </h6>
                                                                <input className="textcenter" name="period" type="text" defaultValue="12" />
                                                                <h6>месяцев</h6>
                                                            </div>
                                                            <div className="sliderFilter relative">
                                                                <div className="sliderMin"></div>
                                                            </div>
                                                            <div className="flexcenter">
                                                                <h3 className="creditTotal white flexcenter">
                                                                    0<span>&nbsp;грн/<br />&nbsp;месяц</span></h3>
                                                            </div>
                                                        </div>
                                                        <div className="tabs__block sliderCreditOtp" data-tab="bank02">
                                                            <div className="flexcenter justcenter">
                                                                <input className="textcenter" name="payments" type="text"
                                                                    data-min="1" data-max="12" defaultValue="12" />
                                                                <h6>платежей на </h6>
                                                                <input className="textcenter" name="period" type="text" defaultValue="24" />
                                                                <h6>месяцев</h6>
                                                            </div>
                                                            <div className="sliderFilter relative">
                                                                <div className="sliderMin"></div>
                                                            </div>
                                                            <div className="flexcenter">
                                                                <h3 className="creditTotal white flexcenter">
                                                                    0<span>&nbsp;грн/<br />&nbsp;месяц</span></h3>
                                                            </div>
                                                        </div>
                                                        <div className="tabs__block sliderCreditExsim" data-tab="bank03">
                                                            <div className="flexcenter justcenter">
                                                                <input className="textcenter" name="payments" type="text"
                                                                    data-min="1" data-max="6" defaultValue="6" />
                                                                <h6>платежей на </h6>
                                                                <input className="textcenter" name="period" type="text" defaultValue="6" />
                                                                <h6>месяцев</h6>
                                                            </div>
                                                            <div className="sliderFilter relative">
                                                                <div className="sliderMin"></div>
                                                            </div>
                                                            <div className="flexcenter">
                                                                <h3 className="creditTotal white flexcenter">
                                                                    0<span>&nbsp;грн/<br />&nbsp;месяц</span></h3>
                                                            </div>
                                                        </div>
                                                    </article>

                                                </article>
                                            </div>
                                        </article>
                                        <div className="flexbet">
                                            <label htmlFor="comment" className="widthDesk marginbot2010">Комментарий к заказу<textarea
                                                name="comment" rows="3"></textarea></label>
                                        </div>
                                        <div className="verify__checkconfirm marginbot4020">
                                            <label className="showInputForm global__filterlabel flexcenter">
                                                <input type="checkbox" name="" required="" />
                                                <span className="global__filtercheckmark"></span>
                                                <h5 className="flexcenter textleft black px13_580">Подтверждая заказ, я принимаю
                                            условия на использование моих персональных данных</h5>
                                            </label>
                                            <label className="showInputForm global__filterlabel flexcenter">
                                                <input type="checkbox" name="" />
                                                <span className="global__filtercheckmark"></span>
                                                <h5 className="flexcenter textleft black px13_580">Не перезванивать мне, я уверен в
                                            заказе</h5>
                                            </label>
                                        </div>
                                        <article className="verify__total setTotalPrice">
                                            <h3 className="flexbet px13_580">Итого:<span className="baseTotal"
                                                id="price">0</span>&nbsp;грн</h3>
                                            <h3 className="flexbet px13_580">Стоимость доставки:<span
                                                className="deliveryPrices">500</span>&nbsp;грн</h3>
                                            <h3 className="flexbet marginbot2010 px13_580">Стоимость услуги:<span
                                                className="servicePrices">800</span>&nbsp;грн</h3>
                                            <div className="flexbet alignstart verify__promo marginbot4020 col768">
                                                <h3 className="flexcenter justcenter px13_580">Промокод:&ensp;<input className="blue"
                                                    type="text" defaultValue="1234567890" /></h3>
                                                <h3 className="flexcenter justcenter px13_580">Сертификат:&ensp;<input className="blue"
                                                    type="text" defaultValue="1234567890" /></h3>
                                            </div>
                                            <div className="flexend marginbot4020">
                                                <h2 className="black">Всего к оплате:</h2>
                                                <h1 className="cardbuy__totalprice totalOrderPrice flexcenter justcenter white">
                                                    0<span>&nbsp;грн</span>
                                                </h1>
                                            </div>
                                            <button form="newCustomerForm" className="flexcenter white">ЗАКАЗ ПОДТВЕРЖДАЮ</button>
                                        </article>
                                    </form>
                                    <div className="tabs__block cardbuy__total marginbot4020" data-tab="form02">
                                        <form id="customerCheckForm" className="textleft noneDesk active">
                                            <div className="flexbet marginbot4020 col768">
                                                <label htmlFor="login" className="widthDesk marginbot2010">Логин *<input type="text"
                                                    name="login" className="blue" required="" /></label>
                                                <label htmlFor="password" className="widthDesk marginbot2010">Пароль *<input type="text"
                                                    name="password" className="blue" required="" /></label>
                                            </div>
                                            <button form="customerCheckForm" className="flexcenter white">ВХОД</button>
                                        </form>
                                        <form id="regularCustomerForm" className="setTotalPrice noneDesk active">
                                            <article className="grid verify__methods col768">
                                                <div className="inputForm01">
                                                    <h3 className="marginbot2010 px15_580">Способ доставки</h3>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Самовывоз</h3>
                                                    </label>
                                                    <h5 className="noneDesk inputForm marginbot4020 px13_580">ПН-ВС с 9:00 до
                                                22:00<br />Магазин: 03191 г. Киев, ул. Д. Луценко, 2а </h5>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Доставка курьером</h3>
                                                    </label>
                                                    <input className="noneDesk inputForm marginbot4020 blue" type="text"
                                                        placeholder="Адрес доставки" />
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Новая почта</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Интайм</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Гюнсел</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Автолюкс</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Мист Экспресс</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Укрпочта</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Ночной экспресс</h3>
                                                    </label>
                                                    <div
                                                        className="select__custom noneDesk inputForm flexbet widthDesk marginbot4020 relative">
                                                        <select name="">
                                                            <option value="">Отделение новой почты</option>
                                                            <option value="0">Отделение новой почты №10</option>
                                                            <option value="1">Отделение новой почты №20</option>
                                                            <option value="2">Отделение новой почты №30</option>
                                                            <option value="4">Отделение новой почты №10</option>
                                                            <option value="5">Отделение новой почты №20</option>
                                                            <option value="6">Отделение новой почты №30</option>
                                                            <option value="7">Отделение новой почты №10</option>
                                                            <option value="8">Отделение новой почты №20</option>
                                                            <option value="9">Отделение новой почты №30</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="inputForm02">
                                                    <h3 className="marginbot2010 px15_580">Способ оплаты</h3>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Наличными при получении товара</h3>
                                                    </label>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Безналичный расчет</h3>
                                                    </label>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Приват24</h3>
                                                    </label>
                                                    <label className="showInputForm global__filterlabel flexcenter marginbot2010">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Онлайн картой VISA/MasterCard</h3>
                                                    </label>
                                                    <label className="showInputForm global__filterlabel flexcenter">
                                                        <input type="checkbox" name="" />
                                                        <span className="global__filtercheckmark"></span>
                                                        <h3 className="flexcenter blue px15_580">Рассрочка/Кредит</h3>
                                                    </label>
                                                </div>
                                            </article>
                                            <div className="flexbet">
                                                <label htmlFor="comment" className="widthDesk marginbot2010">Комментарий к
                                            заказу<textarea name="comment" rows="3"></textarea></label>
                                            </div>
                                            <div className="verify__checkconfirm marginbot4020">
                                                <label className="showInputForm global__filterlabel flexcenter">
                                                    <input type="checkbox" name="" required="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h5 className="flexcenter textleft black px13_580">Подтверждая заказ, я принимаю
                                                условия на использование моих персональных данных</h5>
                                                </label>
                                                <label className="showInputForm global__filterlabel flexcenter">
                                                    <input type="checkbox" name="" />
                                                    <span className="global__filtercheckmark"></span>
                                                    <h5 className="flexcenter textleft black px13_580">Не перезванивать мне, я
                                                    уверен в
                                                заказе</h5>
                                                </label>
                                            </div>
                                            <article className="verify__total">
                                                <h3 className="flexbet px13_580">Итого:<span className="baseTotal">0</span>&nbsp;грн</h3>
                                                <h3 className="flexbet px13_580">Стоимость доставки:<span
                                                    className="deliveryPrices">700</span>&nbsp;грн</h3>
                                                <h3 className="flexbet marginbot2010 px13_580">Стоимость услуги:<span
                                                    className="servicePrices">1200</span>&nbsp;грн</h3>
                                                <div className="flexbet alignstart verify__promo marginbot4020 col768">
                                                    <h3 className="flexcenter justcenter px13_580">Промокод:&ensp;<input
                                                        className="blue" type="text" defaultValue="1234567890" /></h3>
                                                    <h3 className="flexcenter justcenter px13_580">Сертификат:&ensp;<input
                                                        className="blue" type="text" defaultValue="1234567890" /></h3>
                                                </div>
                                                <div className="flexend marginbot4020">
                                                    <h2 className="black">Всего к оплате:</h2>
                                                    <h1 className="cardbuy__totalprice totalOrderPrice flexcenter justcenter white">
                                                        <span>&nbsp;грн</span>
                                                    </h1>
                                                </div>
                                                <button form="regularCustomerForm" className="flexcenter white">ЗАКАЗ ПОДТВЕРЖДАЮ</button>
                                            </article>
                                        </form>
                                    </div>
                                </article>
                            </article>
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
                    <hgroup className="marginbot2010">
                        <h2 className="marginbot2010">Акция! Честный кредит до 24 месяцев. Акция! Честный Акция! Честный кредит до
                    24 месяцев. Акция! Честный</h2>
                        <h3>Для всех участников акции действует специальное предложение -
                    покупайте в этот же день любой другой товар со ЗНАЧИТЕЛЬНОЙ СКИДКОЙ! <br />
                    Скидка устанавливается индивидуально на каждый товар. Единой величины
                    скидки нет. <br />
                    Варианты Подарков: <br />
                    &nbsp; - Акустический кабель <br />
                    &nbsp; - Межблочный кабель <br />
                    &nbsp; - HDMI кабель (3D, 4K) <br />
                    &nbsp; - Другой вариант полезного подарка по согласованию с Вами.</h3>
                    </hgroup>
                    <a href="_single_stocks.html">Перейти на страницу с акцией</a>
                </article>
            </div>
            <div id="wishDiscount">
                <article className="relative">
                    <hgroup className="selfstart">
                        <h3>Хочу скидку</h3>
                    </hgroup>
                    <div className="button__closegl"></div>
                    <form action="" id="wishForm" className="flexcol">
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="name" placeholder="Андрей Павлович" required />
                        <label htmlFor="phone">Телефон*</label>
                        {/* <input type="text" name="phone" pattern="[+]{1}[0-9]{6}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="+38(___)___-__-__" required> */}
                        <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required />
                        <label htmlFor="comment">Комментарий</label>
                        <textarea name="comment" rows="8" className="flexcenter"></textarea>
                        <div className="flexcenter wish__symbol">
                            <p className="flexcenter">dslkvflcfs</p>
                            <input type="text" placeholder="Введите символ с картинки" required />
                        </div>
                        <h4>Менеджер перезвонит Вам, и сориентирует размер скидки</h4>
                        <button form="wishForm">Отправить</button>
                    </form>
                </article>
            </div>
            <div id="buyOneClick">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <article className="onebuy__header" id="buyOneBasket">
                        <h2 className="marginbot4020">ПОКУПКА В 1 КЛИК</h2>
                        <hgroup className="blockcard__hgroup flexcenter textcenter none768 white">
                            <h3>ТОВАР</h3>
                            <h3>КОЛЛИЧЕСТВО</h3>
                            <h3 className="textleft">ЦЕНА</h3>
                        </hgroup>
                        <div className="cardMinPlus wrapperOrders relative">
                            <div className="block__card flexstart marginbot2010">
                                <img src="./img/Image1.png" alt="" />
                                <div className="flexcol widthDesk">
                                    <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                        <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                    </div>
                                    <div className="flexbet widthDesk blockcard__inner">
                                        <div className="blockcard__name textleft">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                            <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span></h6>
                                        </div>
                                        <div className="flexcenter blockcard__click">
                                            <i className="cardClickMinus">&ndash;</i>
                                            <h2 className="cardAmount flexcenter">4</h2>
                                            <i className="cardClickPlus">+</i>
                                            {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                        </div>
                                        <h3 className="cardProductPrice basePrices flexcenter">
                                            42120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="block__card flexstart marginbot2010">
                                <img src="./img/Image365.png" alt="" />
                                <div className="flexcol widthDesk">
                                    <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                        <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                    </div>
                                    <div className="flexbet widthDesk blockcard__inner">
                                        <div className="blockcard__name textleft">
                                            <h5>Усилитель мощности Naim Nap v175</h5>
                                            <h6 className="flexstart">Код товара:&nbsp;<span>8351057</span></h6>
                                        </div>
                                        <div className="flexcenter blockcard__click">
                                            <h4 className="orange">подарок</h4>
                                        </div>
                                        <h2 className="basePrices flexcenter">1<span>&nbsp;грн</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article className="cardbuy__total flexcenter justend marginbot4020">
                            <h2 className="black">Всего к оплате:</h2>
                            <h1 className="baseTotal flexcenter justcenter white">0<span>&nbsp;грн</span></h1>
                        </article>
                    </article>
                    <form action="" id="oneClickForm" className="flexcol">
                        <h4 className="marginbot4020 px13_580">Менеджер перезвонит Вам, узнает все детали и поможет оформить заказ</h4>
                        <div className="flexbet widthDesk col580 oneclick__input">
                            <div className="marginbot2010">
                                <label htmlFor="name">Имя</label>
                                <input type="text" name="name" placeholder="Андрей Павлович" required />
                            </div>
                            <div className="marginbot2010">
                                <label htmlFor="phone">Телефон*</label>
                                {/* <input type="text" name="phone" pattern="[+]{1}[0-9]{6}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="+38(___)___-__-__" required /> */}
                                <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required />
                                <input type="hidden" className="input__amount" defaultValue="1" />
                            </div>
                        </div>
                        <label htmlFor="comment">Добавить комментарий</label>
                        <textarea name="comment" rows="8" className="flexcenter marginbot4020"></textarea>
                        <button form="oneClickForm" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
                    </form>
                </article>
            </div>
            <div id="getProductCredit">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <div id="productModalCredit" className="verify__section">
                        <h2 className="flexcenter juststart marginbot4020">ТОВАР В РАССРОЧКУ&nbsp;(<span
                            className="basketHeaderResult">0</span>&nbsp;заказ)</h2>
                        <hgroup className="cabinet__empty marginbot4020 noneDesk">
                            <h2 className="black marginbot2010">Ваша корзина покапуста</h2>
                            <h3 className="flexcenter justcenter marginbot2010 px13_580">Чтобы сделать заказ, перейдите на&nbsp;<a
                                href="index.html">Главную Страницу</a>&nbsp;сайта</h3>
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
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                20120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image365.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span>8351057</span></h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <h4 className="orange">подарок</h4>
                                            </div>
                                            <h2 className="basePrices flexcenter">1<span>&nbsp;грн</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardMinPlus wrapperOrders relative">
                                <i className="removeOrders"></i>
                                <div className="block__card flexstart marginbot2010">
                                    <img src="./img/Image1.png" alt="" />
                                    <div className="flexcol widthDesk">
                                        <div className="blockcard__header textleft widthDesk noneDesk flex768">
                                            <h5>Усилитель мощности Naim Nap v175 Naim Nap v175</h5>
                                        </div>
                                        <div className="flexbet widthDesk blockcard__inner">
                                            <div className="blockcard__name textleft">
                                                <h5>Усилитель мощности Naim Nap v175 Naim Nap v175Nap Nap</h5>
                                                <h6 className="flexstart">Код товара:&nbsp;<span className="cardBuyCode">8351057</span>
                                                </h6>
                                            </div>
                                            <div className="flexcenter blockcard__click">
                                                <i className="cardClickMinus">&ndash;</i>
                                                <h2 className="cardAmount flexcenter">1</h2>
                                                <i className="cardClickPlus">+</i>
                                                {/* <i className="cardClickPlus" onclick="getDataXHR(this.dataset.urlrequest)" data-urlrequest="http://127.0.0.1:5500/frontend/web/img/Image1.png">+</i> */}
                                            </div>
                                            <h3 className="cardProductPrice basePrices flexcenter">
                                                42120<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <article className="productCreditArticle verify__article">
                                <hgroup className="tabs__caption flexcenter textcenter marginbot4020">
                                    <h3 className="tab active black px13_580" data-tab="form01">ПОКУПКА ТОВАРОВ В РАССРОЧКУ</h3>
                                    <h3 className="tab black px13_580" data-tab="form02">ОПЛАТА ТОВАРОВ ЧАСТЯМИ</h3>
                                </hgroup>
                                <article className="tabs__content verify__forms">
                                    <form id="installPurchase" className="tabs__block marginbot4020 active" data-tab="form01">
                                        <article className="verify__total">
                                            <div className="flexend marginbot4020">
                                                <h2 className="black">Всего к оплате:</h2>
                                                <h1 className="baseTotal flexcenter justcenter white">
                                                    0<span>&nbsp;грн</span>
                                                </h1>
                                            </div>
                                            <button form="installPurchase" className="flexcenter white">ЗАКАЗ ПОДТВЕРЖДАЮ</button>
                                        </article>
                                    </form>
                                    <form id="paymentParts" className="tabs__block cardbuy__total" data-tab="form02">
                                        <article className="verify__total">
                                            <div className="flexend marginbot4020">
                                                <h2 className="black">Всего к оплате:</h2>
                                                <h1 className="baseTotal flexcenter justcenter white">
                                                    0<span>&nbsp;грн</span>
                                                </h1>
                                            </div>
                                            <button form="paymentParts" className="flexcenter white">ЗАКАЗ ПОДТВЕРЖДАЮ</button>
                                        </article>
                                    </form>
                                </article>
                            </article>
                        </article>
                    </div>
                </article>
            </div>
            <div id="cardImgVideo">
                <article className="relative">
                    <div className="button__closegl none768"></div>
                    <hgroup className="flexbet noneDesk flex768">
                        <i className="global__back"></i>
                        <h1 className="flexcenter justcenter">4999<span>&nbsp;грн/<br />&nbsp;комплект</span></h1>
                        <button className="buy__products white">КУПИТЬ</button>
                    </hgroup>
                    <article id="cardSliderModal" className="flexcenter relative">
                        <i className="cardsliderArrowPrev none768"></i>
                        <div className="cardsliderLeft">
                            <i className="cardsliderArrowup none768"></i>
                            <div className="cardsliderNav flexcol juststart">
                                <div className="active cardsliderBox">
                                    <img src="./img/base_02.png" alt="" />
                                </div>
                                <div className="cardsliderBox">
                                    <img src="./img/Group439.png" alt="" />
                                </div>
                                <div className="cardsliderBox">
                                    <img src="./img/Image1.png" alt="" />
                                </div>
                                <div className="cardsliderBox">
                                    <img src="./img/base_02.png" alt="" />
                                </div>
                                <div className="cardsliderBox">
                                    <img src="./img/empty_img.png" alt="" />
                                </div>
                                <div className="cardsliderBox">
                                    <img src="./img/empty_img.png" alt="" />
                                </div>
                                {/* <div className="cardsliderBox">
                            <img src="./img/base_02.png" alt="" />
                        </div>
                        <div className="cardsliderBox">
                            <img src="./img/Group439.png" alt="" />
                        </div>
                        <div className="cardsliderBox">
                            <img src="./img/Image1.png" alt="" />
                        </div>
                        <div className="cardsliderBox">
                            <img src="./img/base_02.png" alt="" />
                        </div>
                        <div className="cardsliderBox">
                            <img src="./img/Group439.png" alt="" />
                        </div>
                        <div className="cardsliderBox">
                            <img src="./img/Image1.png" alt="" />
                        </div> */}
                            </div>
                            <i className="cardsliderArrowdown none768"></i>
                        </div>
                        <div className="cardsliderRight flexcenter relative">
                            <h2 className="none768">МИНИСИСТЕМА Marshall Acton Black</h2>
                            <img src="./img/base_02.png" alt="" />
                        </div>
                        <i className="cardsliderArrowNext none768"></i>
                    </article>
                </article>
            </div>
            <div id="filterMob">
                <article className="relative">
                    <div className="button__closegl"></div>
                    <h5 className="catalogue__production">Каталог товаров</h5>
                    <form action="" id="filterForm" className="flexcol">
                        <div className="filterStore"></div>
                        <h5 className="mobreset__filter">Сбросить</h5>
                        <h5>В других разделах:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Домашние кинотеатры<span>(23)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Акустические системы, HiFi/HiEnd<span>(22)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Стерео Системы, HiFI/HiEnd<span>(21)</span></h6>
                        </label>
                        <ul className="filter__list">
                            <li className="global__list">
                                <ul>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Виниловые проигрыватели<span>(20)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Кабели, HiFi/Hiend<span>(19)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Наушники и портатив<span>(18)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Профессиональное оборудование<span>(17)</span></h6>
                                    </label></li>
                                </ul>
                                <a href=" "
                                    className="global__filterarrow articles__filtershow flexstart"><i></i><i></i><span>Показать
                                все</span><span>Скрыть</span></a>
                            </li>
                        </ul>
                        <div className="horizont"></div>
                        <h5>Производители:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Accurate Audio<span>(3)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Accustic Arts<span>(4)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Acer<span>(15)</span></h6>
                        </label>
                        <ul className="filter__list">
                            <li className="global__list">
                                <ul>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Acoustic Energy<span>(54)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Acoustic Revive<span>(3)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">Acoustic Solid<span>(2)</span></h6>
                                    </label></li>
                                    <li><label className="global__filterlabel flexcenter">
                                        <input type="checkbox" name="" />
                                        <span className="global__filtercheckmark"></span>
                                        <h6 className="flexcenter">B&W<span>(2)</span></h6>
                                    </label></li>
                                </ul>
                                <a href=" "
                                    className="global__filterarrow articles__filtershow flexstart"><i></i><i></i><span>Показать
                                все</span><span>Скрыть</span></a>
                            </li>
                        </ul>
                        <div className="horizont"></div>
                        <h5>Выгодные предложения:</h5>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Скидки<span>(278)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Подарки<span>(111)</span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Акции<span></span></h6>
                        </label>
                        <label className="global__filterlabel flexcenter">
                            <input type="checkbox" name="" />
                            <span className="global__filtercheckmark"></span>
                            <h6 className="flexcenter">Спецпредложения<span></span></h6>
                        </label>
                        <button htmlFor="filterForm">Применить</button>
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
