import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import photo_001 from './img/installicon_01.png';
import photo_002 from './img/installicon_02.png';
import photo_003 from './img/installicon_03.png';
import photo_004 from './img/installicon_04.png';
import photo_005 from './img/installicon_05.png';
import photo_006 from './img/installbank_01.png';
import photo_007 from './img/installbank_02.png';
import photo_008 from './img/installbank_03.png';
import photo_009 from './img/installbank_04.png';
import photo_010 from './img/installbank_05.png';
import photo_011 from './img/installbank_06.png';
import photo_012 from './img/installbank_07.png';
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const Credit = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                        <li>Рассрочка</li>
                    </ul>
                    <article className="textleft installplan__article marginbot4020">
                        <h1 className="marginbot2010">Рассрочка</h1>
                        <p className="marginbot4020">В нашем магазине Вы можете приобрести выбранный товар в рассрочку на очень
                    привлекательных условиях от разных банков: ПриватБанка, ОТП Банка, УкрСиббанка.</p>
                        <article className="grid box__grid textcenter marginbot4020 installplan__icons">
                            <div>
                                <img src={photo_001} alt="" />
                                <p>Нашли товар?<br />Оформляйте заказ</p>
                            </div>
                            <div>
                                <img src={photo_002} alt="" />
                                <p>Уточните детали<br />с нашим менеджером</p>
                            </div>
                            <div>
                                <img src={photo_003} alt="" />
                                <p>Ожидайте звонок с банка, <br />подготовка договора</p>
                            </div>
                            <div>
                                <img src={photo_004} alt="" />
                                <p>Принимайте<br />доставку</p>
                            </div>
                            <div>
                                <img src={photo_005} alt="" />
                                <p>Наслаждайтесь<br />покупкой</p>
                            </div>
                        </article>
                        <div className="banks__img marginbot2010">
                            <img src={photo_006} alt="" />
                        </div>
                        <p className="bold marginbot2010">Рассрочка от «УкрСиббанка»</p>
                        <p className="red marginbot2010">Уточняйте у менеджеров наличие товара и его цену!</p>
                        <p className="marginbot4020">Оформление кредита осуществляется в ближайшем к Вам от делении «УкрСиббанка»
                        по Киеву и всей Украине. Вы сообщаете нашему менеджеру, что желаете приобрести товар в рассрочку.
                        Через некоторое время с Вами свяжется сотрудник УкрСиббанка, и пригласит Вас на оформление в удобное
                    для Вас отделение Вашего города.</p>
                        <p className="marginbot4020">Данные указаны для ознакомления. Программы могут меняться банком без
                    предупреждения.</p>
                        <table className="ukrexsim__bank marginbot4020">
                            <tbody>
                                <tr>
                                    <th>Срок кредита</th>
                                    <th>4 месяца</th>
                                    <th>6 месяца</th>
                                    <th>10 месяца</th>
                                    <th>15 месяца</th>
                                </tr>
                                <tr>
                                    <td>Авансовый платеж, %</td>
                                    <td>От 10 %</td>
                                    <td>От 10 %</td>
                                    <td>От 10 %</td>
                                    <td>От 10 %</td>
                                </tr>
                                <tr>
                                    <td>Ежемесячная комиссия</td>
                                    <td>4 месяца - 0%,<br />с 5-го - 2,9%</td>
                                    <td>6 месяцев - 0%,<br />с 7-го - 2,9%</td>
                                    <td>10 месяцев - 0%,<br />с 11-го - 2,9%</td>
                                    <td>15 месяцев - 0%,<br />с 16-го - 2,9%</td>
                                </tr>
                                <tr>
                                    <td>Разовая комиссия (СМС-сервис)
                            при мин.сроке</td>
                                    <td>150 грн</td>
                                    <td>175 грн</td>
                                    <td>275 грн</td>
                                    <td>400 грн</td>
                                </tr>
                                <tr>
                                    <td>Срок кредита</td>
                                    <td>От 6 до 24<br />месяцев</td>
                                    <td>От 7 до 24<br />месяцев</td>
                                    <td>От 11 до<br />24 месяцев</td>
                                    <td>От 16 до 24<br />месяцев</td>
                                </tr>
                                <tr>
                                    <td>Страховка</td>
                                    <td>Не обязательно</td>
                                    <td>Не обязательно</td>
                                    <td>Не обязательно</td>
                                    <td>Не обязательно</td>
                                </tr>
                                <tr>
                                    <td>Размер компенсации</td>
                                    <td>2,5%</td>
                                    <td>4,0%</td>
                                    <td>8,0%</td>
                                    <td>10,5%</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="banks__img marginbot2010">
                            <img src={photo_007} alt="" />
                        </div>
                        <p className="bold marginbot2010">«Мгновенная рассрочка» и «Оплата частями»* от ПриватБанка</p>
                        <p className="red marginbot2010">Уточняйте у менеджеров наличие товара и его цену!</p>
                        <p className="marginbot4020">* В случае подключения услуги «Оплата частями» от ПриватБанка, цена на товар
                    может меняться.</p>
                        <p className="marginbot4020">Оформление за 1 минуту! Процедура оформления «Мгновенной рассрочки» или
                        «Оплаты частями» в нашем
                        магазине займет у Вас не больше времени, чем обычная оплата товара банковской картой. Сделать
                        покупку в рассрочку можно как у курьера при доставке товара на адрес, либо в нашем офисе (см.
                        Контакты). Оплата происходит с помощью POS-терминала. От Вас понадобится только Ваша карта
                    ПриватБанка. Чек об оплате является Вашим Договором с банком по рассрочке.</p>
                        <a href=" " className="underline marginbot2010">Скачать калькулятор рассрочки</a>
                        <ul className="diskOutside">
                            <li className="bold marginbot2010">Преимущества «Мгновенной рассрочки» и «Оплаты частями»</li>
                            <li className="marginbot2010">Экономия времени - оформление покупки за 30 секунд</li>
                            <li className="marginbot2010">Простота оформления - договором является чек со всеми необходимыми
                            реквизитами
                        (не нужно никаких документов: справка о доходах, ИНН, паспорт)</li>
                            <li className="marginbot4020">Удобное погашение - вносить платежи на карту можно без посещения банка
                    </li>
                        </ul>
                        <ul className="diskOutside">
                            <li className="bold marginbot2010">Условия «Мгновенной рассрочки» и «Оплаты частями»</li>
                            <li className="marginbot2010">Оформить Мгновенную рассрочку можно на срок от 1 до 24 месяцев.</li>
                            <li className="marginbot2010">Комиссия в месяц за услугу составляет: для «Мгновенной рассрочки» - 2,9%
                            от
                        суммы покупки, для «Оплаты частями» - 0%.</li>
                            <li className="marginbot4020">Если вы оплачиваете регулярный платеж за счет собственных средств, то
                            списание
                            платежа происходит без комиссии.
                        В счет кредитных средств комиссия за платеж составит 4%.</li>
                        </ul>
                        <p className="marginbot4020">Данные указаны для ознакомления. Программы могут меняться банком без
                    предупреждения.</p>
                        <table className="privat__bank marginbot4020">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>«Мгновенная рассрочка»</th>
                                    <th>«Оплата частями»</th>
                                </tr>
                                <tr>
                                    <td>Срок кредитования</td>
                                    <td>До 24 месяцев</td>
                                    <td>До 24 месяцев</td>
                                </tr>
                                <tr>
                                    <td>Ежемесячная комиссия</td>
                                    <td>2,9 %</td>
                                    <td>0 %</td>
                                </tr>
                                <tr>
                                    <td>Максимальная сумма кредита</td>
                                    <td>До 25 000 грн без учета первого взноса</td>
                                    <td>Узнать доступную сумму - отправьте бесплатное
                            SMS на номер 10060 с текстом chast</td>
                                </tr>
                                <tr>
                                    <td>Первоначальный взнос</td>
                                    <td>Зависит от количества платежей</td>
                                    <td>Зависит от количества платежей</td>
                                </tr>
                                <tr>
                                    <td>Документы для оформления</td>
                                    <td>Не требуются</td>
                                    <td>Не требуются</td>
                                </tr>
                                <tr>
                                    <td>Валюта кредитования</td>
                                    <td>Гривна</td>
                                    <td>Гривна</td>
                                </tr>
                                <tr>
                                    <td>Комиссия за платеж</td>
                                    <td>- 0 % в случае использования собственных средств
                            - 4 % в случае использования кредитных средств</td>
                                    <td>- 0 % в случае использования собственных средств
                            - 4 % в случае использования кредитных средств</td>
                                </tr>
                                <tr>
                                    <td>Доступна владельцам карт</td>
                                    <td>«Универсальная», «Универсальная Gold»,
                            Platinum, Infinite, World Signia / Elite</td>
                                    <td>«Универсальная», «Универсальная Gold»,
                            Platinum, Infinite, World Signia / Elite</td>
                                </tr>
                                <tr>
                                    <td>Форма получения кредита</td>
                                    <td>БЕЗНАЛИЧНАЯ</td>
                                    <td>БЕЗНАЛИЧНАЯ</td>
                                </tr>
                                <tr>
                                    <td>Время оформления кредита</td>
                                    <td>30 сек</td>
                                    <td>30 сек</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="banks__img marginbot2010">
                            <img src={photo_008} alt="" />
                        </div>
                        <p className="bold marginbot2010">«Мгновенная рассрочка» и «Оплата частями»* от ОТП Банка</p>
                        <div className="banks__img marginbot2010">
                            <img src={photo_009} alt="" />
                        </div>
                        <p className="red marginbot2010">Уточняйте у менеджеров наличие товара и его цену!</p>
                        <p className="marginbot4020">Оформить рассрочку от «ОТП Банка» Вы можете в любом отделении ОТП Банка по
                        всей Украине. Для этого достаточно просто сообщить нашему менеджеру, что вы желаете приобрести товар
                        в рассрочку. Через некоторое время с Вами свяжется сотрудник ОТП Банка, и пригласит Вас на
                    оформление в удобное для Вас отделение Вашего города.</p>
                        <p className="marginbot4020">Все вопросы по своим платежам клиенты могут уточнить по тел.: <a
                            href="tel:0800503505"> 0-800-503-505</a></p>
                        <p className="marginbot4020">Телефон для консультации по рассрочке: <a href="tel:0990536650"
                            className="bold"> 099-053-66-50 </a> (ОТП
                    Банк) (с 9 00 до 20 00 в будние дни, в выходные дни с 10 00 до 20 00).</p>
                        <p className="marginbot4020">Данные указаны для ознакомления. Программы могут меняться банком без
                    предупреждения.</p>
                        <table className="otp__bank marginbot4020">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Условия оформления кредита в «ОТП Банке»</th>
                                </tr>
                                <tr>
                                    <td>Валюта кредитования</td>
                                    <td>Гривна</td>
                                </tr>
                                <tr>
                                    <td>Максимальная сумма кредита</td>
                                    <td>До 25 000 грн без учета первого взноса</td>
                                </tr>
                                <tr>
                                    <td>Документы для оформления</td>
                                    <td>- Паспорт гражданина Украины <br /> - Идентификационный код</td>
                                </tr>
                                <tr>
                                    <td>Срок кредитования</td>
                                    <td>От 3 до 36 месяцев</td>
                                </tr>
                                <tr>
                                    <td>Годовая единая процентная ставка</td>
                                    <td>0,01 %</td>
                                </tr>
                                <tr>
                                    <td>Первоначальный взнос</td>
                                    <td>от 0 %</td>
                                </tr>
                                <tr>
                                    <td>Рассрочка на 6 платежей</td>
                                    <td>0% первые 6 месяцев, 3% - начиная с 7-го</td>
                                </tr>
                                <tr>
                                    <td>Стандарт</td>
                                    <td>Ежемесячная комиссия – 2,25%</td>
                                </tr>
                                <tr>
                                    <td>Форма получения кредита</td>
                                    <td>БЕЗНАЛИЧНАЯ, по выставленному счёту магазина</td>
                                </tr>
                                <tr>
                                    <td>Досрочное погашение кредита</td>
                                    <td>Без ограничений и дополнительных расходов</td>
                                </tr>
                                <tr>
                                    <td>Время оформления кредита</td>
                                    <td>30 мин</td>
                                </tr>
                                <tr>
                                    <td>Возрастные ограничения Заемщика</td>
                                    <td>от 21 лет до 69 лет</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href=" " className="noneDesk italic underline block1024">Рассрочка от других банков</a>
                        <h2 className="marginbot4020 none1024">Другие банки</h2>
                        <table className="others__bank none1024">
                            <tbody>
                                <tr>
                                    <th>Наименование Банка</th>
                                    <th>Вид продажи</th>
                                    <th>Период кредитования, <br /> мес</th>
                                    <th>Возраст заемщика, <br /> лет</th>
                                    <th>Дополнительные
                            условия</th>
                                    <th>Перечень
                                    необходимых
                            документов</th>
                                </tr>
                                <tr>
                                    <td><img src={photo_010} alt="" /></td>
                                    <td>Рассрочка</td>
                                    <td>До 24</td>
                                    <td>18-70</td>
                                    <td colSpan="4">Стаж на текущем месте
                                    работы- не меньше
                                    3 месяцев.
                                    На усмотрение
                                    банка кредиты
                                    застрахованы
                                    по минимальному
                            тарифу от 0,5% в месяц.</td>
                                    <td colSpan="4">Оригиналы:
                                    паспорта гражданина
                                    Украины, ИНН;
                                    пенсионное свидетельство
                            для пенсионеров</td>
                                </tr>
                                <tr>
                                    <td><img src={photo_006} alt="" /></td>
                                    <td>Рассрочка</td>
                                    <td>До 24</td>
                                    <td>21-65</td>
                                </tr>
                                <tr>
                                    <td><img src={photo_011} alt="" /></td>
                                    <td>Рассрочка</td>
                                    <td>До 36</td>
                                    <td>21-67</td>
                                </tr>
                                <tr>
                                    <td><img src={photo_012} alt="" /></td>
                                    <td>Рассрочка</td>
                                    <td>До 36</td>
                                    <td>21-70</td>
                                </tr>
                                <tr>
                                    <td><img src={photo_007} alt="" /></td>
                                    <td>Рассрочка</td>
                                    <td>До 24</td>
                                    <td>18-70</td>
                                    <td>При списании платежа за
                                    счет кредитного лимита,
                                    начисляется комиссия в 4%.
                                    Ежемесячная комиссия 0,01%
                            от суммы покупки.</td>
                                    <td>Карта ПриватБанка</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <Suspense fallback={<div>Loading...</div>}>
                <ModalsPro pathname={props.history.location.pathname} />
            </Suspense>
        </>
    )
}