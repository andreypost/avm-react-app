import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import dataNews from './dataNews';
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
    }, [])
    return (
        <article className="news__section">
            <section className="carousel__section">
                <div id="tabsNews">
                    <div className="tabs__caption global__hgroup flexbet">
                        <hgroup className="flexstart flexwrap">
                            <h2 className="tab active" data-tab="news" data-href="/info/?news">НОВОСТИ</h2>
                            <h2 className="tab" data-tab="articles" data-href="/info/?article">СТАТЬИ</h2>
                            <h2 className="tab" data-tab="reviews" data-href="/info/?review">ОБЗОРЫ</h2>
                        </hgroup>
                        <a href="/info/?news">Все новости</a>
                    </div>
                    <div className="tabs__content">
                        <article className="tabs__block active" data-tab="news">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={dataNews[0]} />
                                <NewsCard datos={dataNews[1]} />
                                <NewsCard datos={dataNews[2]} />
                                <NewsCard datos={dataNews[3]} />
                                <NewsCard datos={dataNews[4]} />
                                <NewsCard datos={dataNews[5]} />
                                <NewsCard datos={dataNews[6]} />
                                <NewsCard datos={dataNews[7]} />
                                <NewsCard datos={dataNews[0]} />
                            </OwlCarousel>
                        </article>
                        <article className="tabs__block" data-tab="articles">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={dataNews[1]} />
                                <NewsCard datos={dataNews[2]} />
                                <NewsCard datos={dataNews[3]} />
                                <NewsCard datos={dataNews[4]} />
                                <NewsCard datos={dataNews[5]} />
                                <NewsCard datos={dataNews[6]} />
                                <NewsCard datos={dataNews[7]} />
                                <NewsCard datos={dataNews[0]} />
                                <NewsCard datos={dataNews[1]} />
                            </OwlCarousel>
                        </article>
                        <article className="tabs__block" data-tab="reviews">
                            <OwlCarousel className="owl-carousel owl-theme" loop={false} rewind={true} margin={10} nav={true} dots={false} autoplay={false} navText={false}
                                responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1280: { items: 5 } }}>
                                <NewsCard datos={dataNews[2]} />
                                <NewsCard datos={dataNews[3]} />
                                <NewsCard datos={dataNews[4]} />
                                <NewsCard datos={dataNews[5]} />
                                <NewsCard datos={dataNews[6]} />
                                <NewsCard datos={dataNews[7]} />
                                <NewsCard datos={dataNews[0]} />
                                <NewsCard datos={dataNews[1]} />
                                <NewsCard datos={dataNews[2]} />
                            </OwlCarousel>
                        </article>
                    </div>
                </div>
            </section>
        </article>
    )
}