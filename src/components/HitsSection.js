import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import cardData from './dataCard';
import { CardProduct } from './CardProduct';
import { CardDiscount } from './CardDiscount';

export const HitsSection = () => {
    useEffect(() => {
        const showContentTabs = (container) => {
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
                        <CardProduct datos={cardData[0]} />
                        <CardDiscount datos={cardData[1]} />
                        <CardProduct datos={cardData[2]} />
                        <CardDiscount datos={cardData[3]} />
                        <CardProduct datos={cardData[4]} />
                        <CardDiscount datos={cardData[5]} />
                        <CardProduct datos={cardData[6]} />
                        <CardDiscount datos={cardData[7]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="sales">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardProduct datos={cardData[31]} />
                        <CardDiscount datos={cardData[30]} />
                        <CardProduct datos={cardData[29]} />
                        <CardDiscount datos={cardData[28]} />
                        <CardProduct datos={cardData[27]} />
                        <CardDiscount datos={cardData[26]} />
                        <CardProduct datos={cardData[25]} />
                        <CardDiscount datos={cardData[24]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="novelty">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardDiscount datos={cardData[8]} />
                        <CardProduct datos={cardData[9]} />
                        <CardDiscount datos={cardData[10]} />
                        <CardProduct datos={cardData[11]} />
                        <CardDiscount datos={cardData[12]} />
                        <CardProduct datos={cardData[13]} />
                        <CardDiscount datos={cardData[14]} />
                        <CardProduct datos={cardData[15]} />
                    </OwlCarousel>
                </article>
                <article className="tabs__block" data-tab="stocks">
                    <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                        responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                        <CardDiscount datos={cardData[23]} />
                        <CardProduct datos={cardData[22]} />
                        <CardDiscount datos={cardData[21]} />
                        <CardProduct datos={cardData[20]} />
                        <CardDiscount datos={cardData[19]} />
                        <CardProduct datos={cardData[18]} />
                        <CardDiscount datos={cardData[17]} />
                        <CardProduct datos={cardData[16]} />
                    </OwlCarousel>
                </article>
            </div>
        </div>
    )
}
