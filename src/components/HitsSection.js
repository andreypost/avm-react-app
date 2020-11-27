import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import dataHits from './dataHits';
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
                        {dataHits.map((card, i) =>
                            card.clase === 'bestseller__product' ?
                                (card.basePrice > 0 ? <CardDiscount key={card.code} datos={dataHits[i]} /> : <CardProduct key={card.code} datos={dataHits[i]} />) : null
                        )}
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="sales">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        {dataHits.map((card, i) =>
                            card.clase === '' ?
                                (card.basePrice > 0 ? <CardDiscount key={card.code} datos={dataHits[i]} /> : <CardProduct key={card.code} datos={dataHits[i]} />) : null
                        )}
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="novelty">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        {dataHits.map((card, i) =>
                            card.clase === 'newitem__product' ?
                                (card.basePrice > 0 ? <CardDiscount key={card.code} datos={dataHits[i]} /> : <CardProduct key={card.code} datos={dataHits[i]} />) : null
                        )}
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="stocks">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                        responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        {dataHits.map((card, i) =>
                            card.clase === 'markdown__product' ?
                                (card.basePrice > 0 ? <CardDiscount key={card.code} datos={dataHits[i]} /> : <CardProduct key={card.code} datos={dataHits[i]} />) : null
                        )}
                    </OwlCarousel>
                </article>
            </div>
        </div>
    )
}
