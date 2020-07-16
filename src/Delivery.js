import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

export const Delivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header>
                <Catalogue />
                <section className="header__navmob">
                    <h3 className="navmob__catalogue">Каталог товаров</h3>
                </section>
            </Header>
            <main>
                <section>
                    <ul className="flexstart breadcrumbs flexwrap">
                        <li><Link to="/">Главная &gt;</Link></li>
                        <li>Оплата и доставка</li>
                    </ul>
                    <article className="htextmob_768 marginbot2010">
                        <h4>Оплата и доставка</h4>
                    </article>
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Оплата и доставка</h2>
                    </article>
                    <article className="textleft delivery__section">
                        <h4 className="marginbot2010">Наш магазин <span className="bold">Аудио Видео Мир</span> принимает заказы online (через вебсайт) круглосуточно 7 дней в неделю.</h4>
                        <h4 className="marginbot2010">Мы стараемся обработать каждую заявку как можно быстрее. В будний день заявки
                        обрабатываются в
                        среднем в течение 1-2 часов. Заявки, отправленные в выходной день, обрабатываются в течение того же
                    дня, либо на следующий день, если заявка отправлена во второй половине дня.</h4>
                        <h2 className="marginbot2010">Оплата</h2>
                        <h3 className="flexstart"><i></i>Наличными<span>при получении товара:</span></h3>
                        <h5>в отделении транспортной компании при оплате «наложенным платежом»;</h5>
                        <h5>курьеру, доставившему заказ;</h5>
                        <h5 className="marginbot4020">в нашем офисе, в случае самостоятельного вывоза товара. К оплате принимается
                    только украинская гривна.</h5>
                        <h3 className="flexstart"><i></i>Интернет-банкинг Приват 24.</h3>
                        <h6 className="marginbot4020">Это наиболее удобный и быстрый способ оплаты, если у вас есть платежная
                    карта Приватбанка (необходимо быть зарегистрированным в данной системе).</h6>
                        <h3 className="flexstart"><i></i>На карточку Приватбанка.</h3>
                        <h6 className="marginbot4020">Это наиболее удобный и быстрый способ оплаты, если у вас есть платежная карта
                    Приватбанка (необходимо быть зарегистрированным в данной системе).</h6>
                        <h3 className="flexstart"><i></i>Платежный терминал для пластиковых карт.</h3>
                        <h6 className="marginbot4020">Вы можете оплатить товар у курьера или в офисе безналичным путем с помощью
                        платежного терминала. Понадобится Ваша банковская карта. Оплата таким способом в большинстве случаев
                    производится без комиссии. Все зависит от тарифов Вашего банка.</h6>
                        <h3 className="flexstart"><i></i>Оплата через LiqPay (Visa или MasterCard).</h3>
                        <h6 className="marginbot4020">С помощью системы LiqPay Вы сможете оплатить товар с помощью банковских карт
                        Visa или MasterCard любого банка. Для оплаты Вам понадобятся Ваша банковская карточка (на ней не
                        должно быть ограничений на Интернет-платежи) и мобильный телефон (при оплате на Ваш мобильный придет
                        смс с проверочным кодом, который Вам нужно будет ввести в специальное поле на сайте). Оплата
                        возможна только при оформлении заказа через сайт. Все платежи производятся без комиссии. Безналичный
                    курс узнавайте у менеджеров нашего магазина.</h6>
                        <h3 className="flexstart"><i></i>Мгновенная рассрочка от Приватбанка.</h3>
                        <h6 className="marginbot4020">Сервис предоставляется владельцам кредитных карт Приватбанка. Оплата
                        осуществляется с помощью POS-терминала у курьера или в нашем офисе. Подробнее узнайте на странице
                    Рассрочка.</h6>
                        <h3 className="flexstart"><i></i>Рассрочка от ОТП и Укрсиббанка.</h3>
                        <h6 className="marginbot4020">В нашем магазине Вы можете купить товар в рассрочку на выгодных условиях от
                    разных банков. Подробнее узнайте на странице <a href=" ">Рассрочка.</a></h6>
                        <h3 className="flexstart marginbot4020"><i></i>Возможна оплата Веб-мани. Уточняйте у менеджеров.</h3>
                    </article>
                    <article className="textleft payment__section">
                        <h2 className="marginbot2010">Доставка</h2>
                        <h4 className="marginbot4020">Условия доставки <span className="bold">АКЦИОННЫХ ТОВАРОВ</span> и <span
                            className="bold">ТОВАРОВ СО
                        СКИДКОЙ</span> уточняйте у менеджера. Все остальные товары доставляются на приведенных ниже
                    условиях.</h4>
                        <h6 className="marginbot4020">1. <span className="bold">По Киеву и Киевской области</span> доставка <span
                            className="bold">бесплатная</span> при заказе на сумму от 2000 грн, кроме акционных
                    товаров и товаров со скидкой. Если сумма заказа менее 2000 грн – стоимость доставки составит 40 грн
                    (+ 5 грн/км за пределами Киева). При возврате товара, купленного на условиях бесплатной доставки,
                    взимается стоимость доставки.</h6>
                        <h6 className="marginbot4020">Срок и ориентировочное время доставки заблаговременно оговаривается с Вашим
                        менеджером.
                        При необходимости, мы сможем доставить товар в выходной день.
                        Наш курьер выдаст Вам гарантийный талон и товарный чек.
                        Монтаж и установка производится за дополнительную плату и заказывается заранее. Курьер не
                    осуществляет установку.</h6>
                        <h6 className="marginbot4020">2. <span className="bold">По Украине</span> доставка <span
                            className="bold">бесплатная</span> при заказе от 2000 грн, кроме акционных товаров и товаров со
                    скидкой. Если сумма заказа менее 2000 грн – стоимость доставки определяется тарифами перевозчика.
                    При возврате товара, купленного на условиях бесплатной доставки, взимается стоимость доставки.</h6>
                        <a href=" " className="marginbot4020">Работа Новой Почты в праздники (скачать)</a>
                        <h6 className="marginbot4020">3. Доставка осуществляется курьерскими службами: Новая Почта, ИНТАЙМ, Деливери
                        Авто, Автолюкс, Гюнсел, Ночной Экспресс.
                        Узнать ближайшее к Вам отделение и график работы можно на официальном сайте перевозчика.
                        Срок доставки посылок зависит от удаленности Вашего населенного пункта.
                        Например, срок доставки посылок компанией Новая Почта по Украине составляет, в среднем, 1-2 дня.
                        По согласованию, мы можем сделать отправку в выходной день.
                    Отследить Вашу посылку вы можете на этой странице (Новая Почта, Автолюкс).</h6>
                        <h6 className="marginbot4020">4. <span className="bold">Самовывоз</span> возможен только по предварительному
                    согласованию.</h6>
                        <h6 className="marginbot4020">5. <span className="bold">Доставка по странам СНГ.</span> Отправляем заказы в
                    любую страну СНГ, в
                    том числе Россию, Беларусь и Казахстан. Оформите заказ через корзину, и наш менеджер свяжется с
                    Вами, или позвоните по номерам, указанным ниже, для уточнения деталей. </h6>
                    </article>
                    <article className="paydel__important textleft marginbot4020">
                        <h5 className="marginbot4020">Важная информация!</h5>
                        <h6 className="marginbot4020">Проверяйте внешний вид и целостность товара до совершения оплаты в офисе
                        транспортной компании. Как
                    правило, после оплаты транспортная компания претензии не принимает.</h6>
                        <h6>Соблюдайте правила первичного подключения аппаратуры. После заноса в
                        помещение, любая техника должна быть выдержана минимум 2 часа при комнатной температуре перед
                    первым подключением.</h6>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro />
        </>
    )
}