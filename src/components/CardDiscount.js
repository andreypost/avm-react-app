import React from 'react';
import { Link } from 'react-router-dom';

export const CardDiscount = (props) => {
    return (
        <div className={"item discount__card " + props.datos.clase} >
            <div className="flexbet">
                <div className="flexcenter">
                    <div className="products__icon relative">
                        <i className="products__credit"></i>
                        <div className="products__popup flexcol">
                            <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                            <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                            <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                            Частями"
                                </h6>
                            <h6>Доступный кредитный лимит</h6>
                            <a href=" ">Подробнее</a>
                        </div>
                    </div>
                    <div className="products__icon relative">
                        <i className="products__gift"></i>
                        <div className="products__popup flexcol">
                            <h4>До 10 месяцев рассрочка для Вас 0%</h4>
                            <h6>Чтобы оформить "Оплату частями" необходимо:</h6>
                            <h6>Наличие кредитной карты ПриватБанка с активированной услугой "Оплата
                            Частями"
                                </h6>
                            <h6>Доступный кредитный лимит</h6>
                            <a href=" ">Подробнее</a>
                        </div>
                    </div>
                    <div className="products__icon relative">
                        <i className="products__video"></i>
                        <div className="products__popup flexcol">
                            <h4>Посмотреть видео:</h4>
                            <a href=" ">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div className="flexcenter">
                    <i className="products__compare" data-product="id"></i>
                    <i className="products__love" data-product="id"></i>
                </div>
            </div>
            <img src={props.datos.image} alt="" />
            <div className="description__card">
                <p className="discount__sales marginbot2010">Акция! Честный кредит до 24 месяцев. Акция! Акция!
                Честный кредит
                до
                        24 месяцев. Акция! Акция! Честный кредит до 24 месяцев. Акция!</p>
                <Link to="ProcardBase" className="products__name" replace>{props.datos.title}</Link>
            </div>
            <div className="flexcenter juststart">
                <div className="products__rating flexcenter ">
                    <input type="radio" name="productName01" id="productName01_01" /><label
                        htmlFor="productName01_01"></label>
                    <input type="radio" name="productName01" id="productName01_02" /><label
                        htmlFor="productName01_02"></label>
                    <input type="radio" name="productName01" id="productName01_03" /><label
                        htmlFor="productName01_03"></label>
                    <input type="radio" name="productName01" id="productName01_04" /><label
                        htmlFor="productName01_04"></label>
                    <input type="radio" name="productName01" id="productName01_05" /><label
                        htmlFor="productName01_05"></label>
                </div>
                <a href=" " className="products__comments">Отзывов: <span>30</span></a>
            </div>
            <div className="products__div flexbet alignend">
                <div className="products__info flexcol alignstart">
                    <h5 className="discount__price flexcenter relative">{props.datos.basePrice}<span>&nbsp;грн</span></h5>
                    <h3 className="products__price flexcenter">{props.datos.price}<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                </div>
                <div className="flexcol">
                    <a href=" " className="products__buy">КУПИТЬ</a>
                </div>
            </div>
            <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
        </div>
    )
}