import React from 'react';
import { Link } from 'react-router-dom';
import photo_001 from '../img/Groupe464.png';
import photo_002 from '../img/Groupe465.png';
import photo_003 from '../img/Groupe466.png';
import photo_004 from '../img/Groupe467.png';

export const CardProduct = (props) => {
    return (
        <div className={"item products__card " + props.datos.clase} >
            <div className="flexbet">
                <div className="flexcenter">
                    <div className="products__icon relative">
                        <img src={photo_001} alt="" />
                        <div className="products__popup flexcol">
                            <h4>Дисконт программа</h4>
                            <h6>Воспользуйтесь накопительной системой 4х уровней для себя, близких и родных.</h6>
                            <a href=" ">Подробнее</a>
                        </div>
                    </div>
                    <div className="products__icon relative">
                        <img src={photo_002} alt="" />
                        <div className="products__popup flexcol">
                            <h4>БЕСПЛАТНАЯ и БЫСТРАЯ доставка</h4>
                            <h6>По Украине при покупке на сумму от 2000 грн, кроме акционных и товаров со скидкой. Доставка по Киеву от 2-х часов!</h6>
                            <a href=" ">Подробнее</a>
                        </div>
                    </div>
                    <div className="products__icon relative">
                        <img src={photo_003} alt="" />
                        <div className="products__popup flexcol">
                            <h4>Лучшие специалисты</h4>
                            <h6>17 лет опыта в Hi-Fi и Hi-End технике. Квалифицированный персонал. Щедрые продавцы.</h6>
                        </div>
                    </div>
                    <div className="products__icon relative">
                        <img src={photo_004} alt="" />
                        <div className="products__popup flexcol">
                            <h4>Выгодная оплата</h4>
                            <h6>Наличными. Наложенный платеж. Безналичная оплата 0%. Рассрочка 0%.</h6>
                        </div>
                    </div>
                </div>
                <div className="flexcenter">
                    <i className="products__compare" data-product="id"></i>
                    <i className="products__love" data-product="id"></i>
                </div>
            </div>
            <Link to="ProcardBase"><img src={props.datos.image} alt="" /></Link>
            {/* <img src={props.datos.image} alt="" /> */}
            <div className="description__card">
                <Link to="ProcardBase" className="products__name">{props.datos.title}</Link>
            </div>
            <div className="flexcenter juststart">
                <a href=" " className="receiveComment products__comments">Оставить отзыв</a>
            </div>
            <div className="products__div flexbet alignend">
                <div className="flexcol alignstart">
                    <h3 className="products__price flexcenter">{props.datos.price}<span>&nbsp;грн/<br />&nbsp;комплект</span></h3>
                </div>
                <div className="flexcol">
                    <i className="discount__log selfnend relative" data-product="">Хочу скидку!</i>
                    <a href=" " className="products__buy" data-product="">КУПИТЬ</a>
                </div>
            </div>
            <a href=" " className="products__buy products__buymob selfcenter">КУПИТЬ</a>
        </div>
    )
}