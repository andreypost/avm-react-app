import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import dataCard from './dataCard';
import { CardProduct } from './CardProduct';
import { CardDiscount } from './CardDiscount';

export const HitsSection = () => {
    return (
        <div id="tabsMainPage">
            <div className="tabs__caption global__hgroup flexbet">
                <hgroup className="flexstart flexwrap">
                    <h2 className="tab active" data-tab="hits" data-href="_bestsellers.html">ХИТ ПРОДАЖ</h2>
                    <h2 className="tab" data-tab="sales" data-href="_all_stocks.html">АКЦИИ</h2>
                    <h2 className="tab" data-tab="novelty" data-href="_new_items.html">НОВИНКИ</h2>
                    <h2 className="tab" data-tab="stocks" data-href="_markdown.html">УЦЕНКА</h2>
                </hgroup>
                <a href="_bestsellers.html">Все товары</a>
            </div>
            <div className="tabs__content">
                <article className="tabs__block active" data-tab="hits">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardProduct datos={dataCard[0]} />
                        <CardDiscount datos={dataCard[1]} />
                        <CardProduct datos={dataCard[2]} />
                        <CardDiscount datos={dataCard[3]} />
                        <CardProduct datos={dataCard[4]} />
                        <CardDiscount datos={dataCard[5]} />
                        <CardProduct datos={dataCard[6]} />
                        <CardDiscount datos={dataCard[7]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="sales">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardProduct datos={dataCard[31]} />
                        <CardDiscount datos={dataCard[30]} />
                        <CardProduct datos={dataCard[29]} />
                        <CardDiscount datos={dataCard[28]} />
                        <CardProduct datos={dataCard[27]} />
                        <CardDiscount datos={dataCard[26]} />
                        <CardProduct datos={dataCard[25]} />
                        <CardDiscount datos={dataCard[24]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="novelty">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardDiscount datos={dataCard[8]} />
                        <CardProduct datos={dataCard[9]} />
                        <CardDiscount datos={dataCard[10]} />
                        <CardProduct datos={dataCard[11]} />
                        <CardDiscount datos={dataCard[12]} />
                        <CardProduct datos={dataCard[13]} />
                        <CardDiscount datos={dataCard[14]} />
                        <CardProduct datos={dataCard[15]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="stocks">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardDiscount datos={dataCard[23]} />
                        <CardProduct datos={dataCard[22]} />
                        <CardDiscount datos={dataCard[21]} />
                        <CardProduct datos={dataCard[20]} />
                        <CardDiscount datos={dataCard[19]} />
                        <CardProduct datos={dataCard[18]} />
                        <CardDiscount datos={dataCard[17]} />
                        <CardProduct datos={dataCard[16]} />
                    </OwlCarousel>
                </article>
            </div>
        </div>
    )
}
