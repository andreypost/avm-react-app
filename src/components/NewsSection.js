import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import newsData from './newsData';
import { NewsCard } from './NewsCard';

export const NewsSection = () => {
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
        showContentTabs(document.getElementById('tabsNews'))
    })
    return (
        <article className="news__section">
            <section className="carousel__section">
                <div id="tabsNews">
                    <div className="tabs__caption global__hgroup flexcenter justbeet">
                        <hgroup className="flexbet">
                            <h2 className="tab active" data-tab="news" data-href="/info/?news">НОВОСТИ</h2>
                            <h2 className="tab" data-tab="articles" data-href="/info/?article">СТАТЬИ</h2>
                            <h2 className="tab" data-tab="reviews" data-href="/info/?review">ОБЗОРЫ</h2>
                        </hgroup>
                        <a href="/info/?news">Все новости</a>
                    </div>
                    <div className="tabs__content">
                        <article className="tabs__block active" data-tab="news">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={newsData[0]} />
                                <NewsCard datos={newsData[1]} />
                                <NewsCard datos={newsData[2]} />
                                <NewsCard datos={newsData[3]} />
                                <NewsCard datos={newsData[4]} />
                                <NewsCard datos={newsData[5]} />
                                <NewsCard datos={newsData[6]} />
                                <NewsCard datos={newsData[7]} />
                                <NewsCard datos={newsData[0]} />
                            </OwlCarousel>
                        </article>
                        <article className="tabs__block" data-tab="articles">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={newsData[1]} />
                                <NewsCard datos={newsData[2]} />
                                <NewsCard datos={newsData[3]} />
                                <NewsCard datos={newsData[4]} />
                                <NewsCard datos={newsData[5]} />
                                <NewsCard datos={newsData[6]} />
                                <NewsCard datos={newsData[7]} />
                                <NewsCard datos={newsData[0]} />
                                <NewsCard datos={newsData[1]} />
                            </OwlCarousel>
                        </article>
                        <article className="tabs__block" data-tab="reviews">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={newsData[2]} />
                                <NewsCard datos={newsData[3]} />
                                <NewsCard datos={newsData[4]} />
                                <NewsCard datos={newsData[5]} />
                                <NewsCard datos={newsData[6]} />
                                <NewsCard datos={newsData[7]} />
                                <NewsCard datos={newsData[0]} />
                                <NewsCard datos={newsData[1]} />
                                <NewsCard datos={newsData[2]} />
                            </OwlCarousel>
                        </article>
                    </div>
                </div>
            </section>
        </article>
    )
}