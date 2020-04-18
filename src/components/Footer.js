import React from 'react';
import { Link } from "react-router-dom";
import photo_001 from '../img/audio_world02.png';

export default class Footer extends React.Component {
    componentDidMount() {
        const showTextToggleClick = (elems) => {
            if (!elems) return
            for (let elem of elems) {
                elem.onclick = () => {
                    elem.previousElementSibling.classList.toggle('active')
                }
            }
        }
        showTextToggleClick(document.querySelectorAll('.see__seo'))
        const toggleAllLists = (elems) => {
            if (!elems) return
            for (let elem of elems) {
                elem.onclick = (e) => {
                    e.preventDefault()
                    elem.firstElementChild.classList.toggle('none')
                    elem.lastElementChild.classList.toggle('block')
                    if (elem.nextElementSibling) elem.nextElementSibling.classList.toggle('block')
                }
            }
        }
        toggleAllLists(document.querySelectorAll('.global__href'))
        document.getElementById('arrowUp').onclick = () => {
            window.scrollBy({
                top: -window.scrollY,
                behavior: 'smooth'
            })
        }
        window.addEventListener('scroll', () => {
            document.getElementById('arrowUp').hidden = document.documentElement.clientHeight / 2 > document.documentElement.scrollTop
        })
    }
    render() {
        return (
            <>
                <section className="seo__section">
                    <hgroup>
                        <h2>Интернет-магазин АудиоВидеоМир - лучший выбор Hi-Fi техники в Украине</h2>
                        <h3>Что может быть лучше ярких и четких звуков, передающих тембр голоса, журчание воды, пение птиц,
                        звучание
                        музыкальных инструментов?! Прослушивание или просмотр фильмов с подобными эффектами заменяет поход в
                        кинотеатр и позволяет в полной мере погрузиться с головой в неповторимый мир загадочных цивилизаций,
                        мир
                        природы, а также оценить всю прелесть и реальность спецэффектов. Именно поэтому с каждым днем растет
                        интерес к качественному и чистому звучанию. Об этом свидетельствует большое количество желающих
                    купить Hi-Fi акустика и Hi-Fi технику, которую вы сможете найти в нашем магазине.</h3>
                        <h3>Какие товары можно купить в интернет-магазине АудиоВидеоМир?</h3>
                        <h3>Наш интернет магазин аудио видео техники предлагает вам огромный выбор профессиональных аудио и
                        видео систем на любой вкус. В нашем регулярно обновляемом каталоге товаров вы найдете современные
                        акустические системы. Вас ждет самая лучшая в мире напольная, полочная, настенная, встраиваемая и
                        компьютерная акустика мировых производителей. К вашим услугам всегда актуальные модели саундбаров,
                        стерео усилителей, CD-проигрывателей, усилителей мощности, тюнеров, наушников, сетевых кондиционеров
                    и регенераторов, стерео ресиверов и прочей аудио техники.</h3>
                        <h3>На страницах нашего сайта вы сможете сначала выбрать, а затем и купить Hi-Fi технику, AV процессоры
                        и ресиверы, DVD и Blu Ray проигрыватели, видеопроекторы, плазменные телевизоры, цифровые медиа
                        плееры, LCD телевизоры, видеостены нового образца, лампы для проектора, универсальные всепогодные
                        телевизоры, объемные 3D очки, объективы для проекторов и прочие комплектующие, видео технику. В
                        интернет-магазине audiovideomir.com.ua есть профессиональные аудио и видео кабели, HDMI кабели,
                    сетевые, силовые, цифровые и межблочные кабели, аксессуары.</h3>
                        <h3>По вашему желанию вас ждет высокочастотная и высококачественная Hi-End техника, которую можно
                        приобрести как сразу, так и с определенной отсрочкой платежа в рассрочку. Здесь вы увидите
                        первоклассные виниловые проигрыватели, фонокорректоры, тонармы, головки звукосниматели и картриджи.
                </h3>
                        <h3>В чем преимущества наших клиентов?
                        Обращаясь к нам, вы сможете оценить удобство навигаций сайта, легкость в выборе продукции с удобной
                        алфавитной раскладкой, вас ждет качественная аудио-видео техника, большой перечень услуг,
                    виртуальный зал прослушивания.</h3>
                        <h3>С нашим магазином вам не нужно будет искать дополнительную мебель и крепежные материалы. Ваша
                        аудио-видео техника будет дополнена всем: деревянными и металлическими стойками, разнообразными
                        креплениями и кронштейнами, ТВ тумбами, а также механическими креслами. Все это вы сможете
                        приобрести, не уходя со страниц нашего сайта. Также у нас вы найдете системы Мультирум, ЖК панели,
                    пульты, докстанции и аудиосистемы для I-Pod, прочие IT-технологии, аксессуары и комплектующие.</h3>
                        <h3>Вас ждут интересные акционные предложения, скидки, розыгрыши призов и приятные подарки от наших
                        партнеров. Наш интернет магазин аудио видео техники выполнит любые услуги, связанные с
                        консультированием и подбором оборудования, с его разработкой, проектированием и монтажом. А
                        высококлассные специалисты помогут вам в реализации задуманного вами обустройства своего дома,
                    офиса, супермаркета, торгового центра, клуба, кинотеатра и прочих помещений в кратчайшие сроки.</h3>
                        <h3>Наша аудио-видео техника – самая качественная, надежная и многофункциональная. Она достойна вашего
                        внимания и позволит вам наслаждаться идеальным звучанием прослушиваемого материала снова и снова.
                </h3>
                        <h3>Только современная Hi-End техника, актуальные модели и достойный перечень сопутствующих товаров.
                    Заходите к нам чаще. И поверьте, вы не разочаруетесь! Мы всегда рады вас видеть!</h3>
                    </hgroup>
                    <h4 className="see__seo">Смотреть больше</h4>
                </section>
                <footer>
                    <section className="footer__section">
                        <div className="footer__desk flexcol">
                            <div className="flexbet">
                                <div>
                                    <img src={photo_001} alt="" />
                                </div>
                                <ul className="flexcenter">
                                    <li><a href="_category.html">Каталог товаров</a></li>
                                    <li><a href="_glossary.html">Глоссарий</a></li>
                                    <li><Link to="Services">Услуги</Link></li>
                                    <li><a href="_listening_room.html">Зал прослушивания</a></li>
                                    <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                                    <li><a href="_installment_plan.html">Рассрочка</a></li>
                                    <li><a href="_all_stocks.html">Акции</a></li>
                                    <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                                    <li><a href="_about_us.html">О Нас</a></li>
                                </ul>
                            </div>
                            <h6>Доставка по Киеву и Украине, России и Казахстану, Белоруссии, основные города: Алушта, Белая
                            Церковь, Бердянск, Винница, Днепродзержинск, Донецк, Евпатория, Житомир, Запорожье,
                            Ивано-Франковск, Измаил, Илльичевск, Каменец-Подольский, Керчь, Кировоград, Ковель, Краматорск,
                            Кременчуг, Кривой Рог, Лисичанск, Лубны, Луганск, Луцк, Львов, Макеевка, Мариуполь, Мелитополь,
                            Николаев, Никополь, Миргород, Могилев-Подольский, Мукачево, Нежин, Одесса, Павлоград, Полтава,
                            Ровно, Севастополь, Северодонецк, Симферополь, Славута, Смела, Сумы, Тернополь, Ужгород, Умань,
                            Феодосия, Харьков, Херсон, Хмельницький, Черкассы, Черновцы, Чернигов, Шостка, Ялта, Москва,
             Минск, Могилев, Гомель и другие.</h6>
                        </div>
                        <div className="footer__mob">
                            <div className="horizont"></div>
                            <ul>
                                <li className="global__list"><a href=" "
                                    className="global__href footer__href flexcenter">Покупателям<i></i><i></i></a>
                                    <ul>
                                        <li><a href="_category.html">Каталог товаров</a></li>
                                        <li><a href="_glossary.html">Глоссарий</a></li>
                                        <li><Link to="Services">Услуги</Link></li>
                                        <li><a href="_listening_room.html">Зал прослушивания</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="horizont"></div>
                            <ul>
                                <li className="global__list"><a href=" "
                                    className="global__href footer__href flexcenter">Информация<i></i><i></i></a>
                                    <ul>
                                        <li><a href="_payment_delivery.html">Оплата и доставка</a></li>
                                        <li><a href="_installment_plan.html">Рассрочка</a></li>
                                        <li><a href="_all_stocks.html">Акции</a></li>
                                        <li><a href="_warranty_service.html">Гарантия и сервис</a></li>
                                        <li><a href="_about_us.html">О Нас</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="horizont"></div>
                        </div>
                        <div className="footer__social flexcenter justcenter">
                            <a href=" "><i className="footer__insta"></i></a>
                            <a href=" "><i className="footer__face"></i></a>
                            <a href=" "><i className="footer__tube"></i></a>
                            <a href=" "><i className="footer__tweet"></i></a>
                        </div>
                        <h5>Copyright © 1999-2020 Pear Solution</h5>
                    </section>
                </footer>
                <i id="arrowUp" hidden=""></i>
            </>
        )
    }
}