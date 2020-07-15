import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import cardData from './cardData';
import { ProductCard } from './ProductCard';
import { DiscountCard } from './DiscountCard';

export const HitsSection = () => {
    useEffect(() => {
        const showContentTabs = (container) => {
            if (!container) return
            let tabs = container.querySelector('.tabs__caption'),
                currentTab = container.querySelector('.active'),
                content = container.querySelector('.tabs__content'),
                currentContent = content.querySelector('.active')
            tabs.onclick = (e) => {
                let tab = e.target.closest('.tab')
                if (!tab || tab.classList.contains('active')) return
                let blocks = content.querySelectorAll('.tabs__block')
                for (let block of blocks) {
                    if (block.dataset.tab === tab.dataset.tab) {
                        block.classList.add('active')
                        currentContent.classList.remove('active')
                        currentContent = block
                        if (container.querySelector('A')) {
                            container.querySelector('A').href = tab.dataset.href
                        }
                    }
                }
                currentTab.classList.remove('active')
                currentTab = tab
                currentTab.classList.add('active')
            }
        }
        showContentTabs(document.getElementById('tabsMainPage'))
    }, [])
    return (
        <div id="tabsMainPage">
            <div className="tabs__caption global__hgroup flexcenter justbeet">
                <hgroup className="flexbet">
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
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <ProductCard datos={cardData[0]} />
                        <DiscountCard datos={cardData[1]} />
                        <ProductCard datos={cardData[2]} />
                        <DiscountCard datos={cardData[3]} />
                        <ProductCard datos={cardData[4]} />
                        <DiscountCard datos={cardData[5]} />
                        <ProductCard datos={cardData[6]} />
                        <DiscountCard datos={cardData[7]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="sales">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <ProductCard datos={cardData[31]} />
                        <DiscountCard datos={cardData[30]} />
                        <ProductCard datos={cardData[29]} />
                        <DiscountCard datos={cardData[28]} />
                        <ProductCard datos={cardData[27]} />
                        <DiscountCard datos={cardData[26]} />
                        <ProductCard datos={cardData[25]} />
                        <DiscountCard datos={cardData[24]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="novelty">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <DiscountCard datos={cardData[8]} />
                        <ProductCard datos={cardData[9]} />
                        <DiscountCard datos={cardData[10]} />
                        <ProductCard datos={cardData[11]} />
                        <DiscountCard datos={cardData[12]} />
                        <ProductCard datos={cardData[13]} />
                        <DiscountCard datos={cardData[14]} />
                        <ProductCard datos={cardData[15]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="stocks">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <DiscountCard datos={cardData[23]} />
                        <ProductCard datos={cardData[22]} />
                        <DiscountCard datos={cardData[21]} />
                        <ProductCard datos={cardData[20]} />
                        <DiscountCard datos={cardData[19]} />
                        <ProductCard datos={cardData[18]} />
                        <DiscountCard datos={cardData[17]} />
                        <ProductCard datos={cardData[16]} />
                    </OwlCarousel>
                </article>
            </div>
        </div>
    )
}
