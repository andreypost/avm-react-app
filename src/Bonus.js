import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import photo_001 from './img/MaskGroup2.png';

export const Bonus = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Header pathname={props.history.location.pathname}>
                <Catalogue />
                <section className="header__navmob">
                    <h3 className="navmob__catalogue">Каталог товаров</h3>
                </section>
            </Header>
            <main>
                <section>
                    <ul className="flexstart breadcrumbs flexwrap">
                        <li><Link to="/">Главная &gt;</Link></li>
                        <li>Бонусная программа</li>
                    </ul>
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Бонусная программа</h2>
                    </article>
                    <article className="textleft bonus__section marginbot4020">
                        <div className="bonus__img marginbot2010 textcenter">
                            <img src={photo_001} alt="" />
                        </div>
                        <article className="htextmob__580 marginbot2010">
                            <h4 className="">Бонусная программа</h4>
                        </article>
                        <h3 className="marginbot2010">Дорогие Покупатели!</h3>
                        <h4 className="marginbot4020">Для того чтобы Ваши покупки были не только быстрыми и надежными, но еще и
                        приятными, с 01 апреля 2015 года наш интернет-магазин Hi-Fi и Hi-End техники вводит специальную
                    <span className="bold">Дисконтную программу!</span>
                    Она даст Вам возможность с первой покупки получить выгодную цену на выбранный
                    товар, а также <span className="bold">скидки от 5% и выше от розничной цены</span> на все последующие
                    заказы и услуги, в том числе
                    и на покупки в <span className="bold">Рассрочку</span>.</h4>
                        <h4 className="marginbot4020">Каждый новый Покупатель, дав свое устное согласие, становится участником нашей
                    Дисконтной программы, а значит – нашим <span className="bold">Постоянным Клиентом</span>. Ему становится
                    доступна наша hi fi бонусная система для покупателей.
                </h4>
                        <h4 className="marginbot4020">Все, что Вам нужно, чтобы получать скидки от 5% и выше – это совершать покупки
                    в нашем магазине. Чем больше <span className="bold">Накопленная сумма покупок,</span>
                    тем больше Ваша <span className="bold">Скидка Постоянного Клиента.</span>Как только Накопленная сумма
                    покупок станет более 1500 грн, Вы получите постоянную скидку – 5%, при достижении 10 000 грн – 7%,
                    30 000 грн – 10%, и 80 000 грн – от 10% скидки. Таким образом, бонусная программа нашего магазина
                    дает возможность предоставлять приятные бонусы для клиентов в виде хороших скидок на товары
                    магазина.
                </h4>
                        <h3>Для того чтобы воспользоваться Вашим дисконтом:</h3>
                        <h4>- в случае заказа по телефону – назовите Ваше <span className="bold">Имя, Фамилию и Номер
                        телефона,</span></h4>
                        <h4 className="marginbot4020">- в случае заказа через сайт, с Вами свяжется наш менеджер для уточнения
                    данных.</h4>
                        <h4 className="marginbot4020">Воспользоваться Вашей скидкой могут также <span className="bold">Ваши друзья и
                        родные</span> (не совершавшие ранее покупок в нашем магазине) – достаточно назвать Ваши Имя,
                    Фамилию и Номер телефона. Новый покупатель, по его согласию, становится нашим Постоянным Клиентом, а
                    сумма нового заказа добавляется как к Вашей, так и его Накопленной сумме покупок. Это значит, что
                    бонусная система работает на него сразу же, даже с первой покупки по Вашей скидке.
                </h4>
                        <h3 className="marginbot4020">Условия дисконтной программы</h3>
                        <table className="bonus__table marginbot4020">
                            <tbody>
                                <tr>
                                    <th>Уровень Клиента</th>
                                    <th>Скидка Постоянного Клиента</th>
                                    <th>Условие: Накопленная сумма покупок </th>
                                </tr>
                                <tr>
                                    <td>Начальный</td>
                                    <td>5%</td>
                                    <td>от 2 000 до 9 999 грн</td>
                                </tr>
                                <tr>
                                    <td>Базовый</td>
                                    <td>7%</td>
                                    <td>от 10 000 до 29 999 грн</td>
                                </tr>
                                <tr>
                                    <td>Стандарт</td>
                                    <td>10%</td>
                                    <td>от 30 000 до 79 999 грн</td>
                                </tr>
                                <tr>
                                    <td>Премиум</td>
                                    <td>от 10%</td>
                                    <td>от 80 000 грн и более</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 className="marginbot4020"><span className="bold">Дисконтная программа «АУДИО ВИДЕО МИР»</span> – это система
                    поощрения постоянных покупателей интернет-магазина «АУДИО ВИДЕО МИР», основанная на предоставлении
                    скидок на товары магазина в зависимости от общей суммы ранее совершенных покупок.
                </h4>
                        <h4 className="marginbot4020"><span className="bold">Постоянный Клиент</span> - любой покупатель
                    интернет-магазина «АУДИО ВИДЕО МИР», который устно дал свое согласие на участие в Дисконтной
                    программе. Постоянный Клиент идентифицируется следующими данными: Имя, Фамилия, Номер телефона.
                </h4>
                        <h4 className="marginbot4020"><span className="bold">Накопленная сумма покупок</span> – это сумма всех покупок,
                    которые когда-либо совершил Постоянный Клиент в интернет-магазине «АУДИО ВИДЕО МИР» независимо от
                    формы оплаты. Учитывается только конечная стоимость товара для Клиента с учетом всех предоставленных
                    скидок. </h4>
                        <h4 className="marginbot4020"><span className="bold">Скидки не суммируются.</span>Если на товар уже установлена
                    скидка (например, акционный товар, уценка и т.п.), то размер суммарной Скидки Постоянного Клиента
                    оговаривается с менеджером в индивидуальном порядке.</h4>
                        <h4 className="marginbot4020"><span className="bold">Возврат товара.</span>В случае возврата товара Накопленная
                    сумма покупок уменьшается на сумму возврата. При этом размер Скидки Постоянного Клиента изменяется
                    согласно данным Условиям.</h4>
                        <h4 className="marginbot4020">Компания «АУДИО ВИДЕО МИР» оставляет за собой право изменять условия данной
                        Дисконтной программы без личного уведомления участников программы путем размещения новых условий на
                    веб-сайте www.audiovideomir.com.ua.</h4>
                        <h4 className="marginbot4020">Компания «АУДИО ВИДЕО МИР» гарантирует, что не будет передавать личные данные
                        Постоянного Клиента третьим лицам, а будет использовать их только для реализации Условий Дисконтной
                        программы, а также для информирования Постоянного Клиента о действующих акциях и специальных
                    предложениях.</h4>
                        <h4 className="marginbot4020">Кроме брендов: Yamaha, Klipsch, Tannoy, Sonus Faber, Pro-Ject, Furman, Unison
                        Research, Audio research, Macintosch, OPERA Speakers, WADIA, PRYMA, Sumiko, Arcam, Audioquest, AVID,
                        Audio-Technica, Cambridge Audio, FIIO, Monitor Audio, Sonance, Ortofon, URC, Devialet, Onkyo, Dali,
                        Real Cable, EAR Yoshino, Marantz, Atlas, Exposure, Tonar, Nagaoka, Thorens, Music Hall, Clearaudio,
                    Nordost, Burmester, Kimber Kable, Cabasse, Aurea, Denon, LW Speakers, Meridian, AMR.</h4>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
        </>
    )
}