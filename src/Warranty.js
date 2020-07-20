import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";
import photo_001 from './img/center_logo_01.png';
import photo_002 from './img/center_logo_02.png';
import photo_003 from './img/center_logo_03.png';

export const Warranty = (props) => {
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
                        <li>Гарантия и сервис</li>
                    </ul>
                    <article className="htextmob__580 marginbot2010">
                        <h4>Гарантия и сервис</h4>
                    </article>
                    <article className="textleft header__1440 marginbot4020">
                        <h2>Гарантия и сервис</h2>
                    </article>
                    <article className="textleft warranty__section marginbot4020">
                        <h4 className="marginbot2010">Все товары, купленные в нашем магазине, имеют официальную гарантию
                        производителя. Для каждого товара установлен свой срок гарантии, он указан в Вашем гарантийном
                        талоне. В большинстве случаев, гарантийный срок составляет 12 (реже 24) месяцев со дня приобретения
                        товара. В случае неисправности товара до истечения гарантийного срока, гарантийный ремонт вашей
                        техники будет осуществлять авторизованный сервисный центр.</h4>
                        <h4 className="marginbot2010">Гарантия не распространяется:</h4>
                        <h5>на изделия, неисправности которых появились вследствие перегрузок, неправильной установки, а также
                            нарушения правил эксплуатации изделия;</h5>
                        <h5>на внешние и внутренние загрязнения, потертости, трещины, вмятины, царапины и другие внешние
                            механические повреждения, которые возникли в процессе эксплуатации;</h5>
                        <h5>на изделия, которые подверглись конструктивным изменениям вследствие вмешательства не уполномоченных
                            на это особ;</h5>
                        <h5>на изделия, с которых удалена маркировочная таблица, не разборчив или изменен серийный номер
                            изделия;</h5>
                        <h5 className="marginbot4020">на внешние и внутренние загрязнения, потертости, трещины, вмятины, царапины и
                            другие внешние механические повреждения, которые возникли в процессе эксплуатации;</h5>
                        <h2 className="marginbot2010">Ремонт</h2>
                        <h4 className="marginbot4020">При покупке любого товара на сайте audiovideomir.com.ua, Покупатель
                        соглашается с тем, что в случае
                        необходимости ремонта приобретенной техники, сервис центры Поставщиков данного оборудования обязаны
                        осуществить доставку комплектующих и ремонт в срок не более 3-х месяцев с дня поступления в сервис
                            самой техники.</h4>
                        <h2 className="marginbot2010">Возврат товара</h2>
                        <h4 className="marginbot2010">Возврат купленного в нашем магазине товара возможен, в соответствии с законом
                            Украины «О защите прав потребителей», в течение 14 дней с момента покупки, при условии, что:</h4>
                        <h5>товар не использовался и не был поврежден,</h5>
                        <h5>сохранен его товарный вид, потребительские свойства, а также всевозможные ярлыки, маркировки,
                            пломбы, и прочее</h5>
                        <h5>не повреждена заводская упаковка,</h5>
                        <h5>товар в полной комплектации,</h5>
                        <h5 className="marginbot2010">сохранен товарный чек, выданный Вам при покупке данного товара.</h5>
                        <h3 className="marginbot4020">При возврате товара, с клиента взимается стоимость доставки, в соответствии с
                        нашими условиями
                        доставки: по Киеву и области – 40 грн + 5 грн/км за пределами Киева, по Украине – по тарифам
                            перевозчика.</h3>
                        <h4 className="marginbot4020">В отношении <span className="bold">«Товарного вида»</span> следует заметить, что
                            если были вскрыты заводские защитные пленки
                            пультов, кабелей или батарей – товар не считается новым, а переходит в разряд <span className="bold">«Бывшего в
                            употреблении»</span>.</h4>
                        <h4 className="marginbot4020">То же касается и вскрытия различных <span className="bold">пломб, ярлыков,
                            маркировок</span> и прочих защитных элементов производителя.</h4>
                        <h4 className="marginbot4020">Что касается пункта <span className="bold">«Товар не
                            использовался»</span>, то проверить это можно с помощью специальных счетчиков, встроенных в
                            аппаратуру. Обнулить эти счетчики невозможно! Поэтому будьте внимательны при первом использовании
                            аппаратуры. Если Вас по какой-то причине не устроила приобретенная техника, то советуем как можно
                            быстрее выключить устройство.</h4>
                        <p className="marginbot4020">ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ на то, что претензии относительно качества изделия и
                        его комплектующих частей рассматриваются ТОЛЬКО после проверки качества изделия сертифицированным
                        сервисным центром (например, "F1 Center") и выдачи им соответствующего заключения. Это означает, что
                        если Вы инициируете процедуру возврата, то после отправки Вами товара в адрес продавца, товар будет
                        досмотрен сервисным центром, который выдаст свое заключение в отношении целостности и не
                        использования товара. На основании этого заключения продавец принимает решение о возврате или не
                            возврате товара как нового.</p>
                        <h4 className="marginbot4020">Таким образом, если товар Вас не устроил / не понадобился еще до момента его
                        распаковки и включения, то вернуть его в 14-дневный срок Вы сможете без проблем. В случае если Вы
                        начали пользоваться товаром и поняли, что он Вас не устраивает, то в таком случае вернуть товар
                        можно только как «Бывший в употреблении». Но, в любом случае, компания «Аудио Видео Мир»
                            рассматривает каждый случай в индивидуальном порядке.</h4>
                        <h4 className="marginbot2010">Закон о Защите прав потребителей находится на официальном сайте Верховной Рады
                            Украины:</h4>
                        <a href="http://zakon4.rada.gov.ua/laws/show/1023-12"
                            className="marginbot2010">http://zakon4.rada.gov.ua/laws/show/1023-12 (Статьи 8 и 9).</a>
                        <h4 className="">Подробнее о процедуре возврата спрашивайте у наших менеджеров <a
                            href="_contacts.html">(перейти в раздел Контакты)</a>.</h4>
                    </article>
                    <article className="warranty__rights textleft marginbot4020">
                        <h2 className="marginbot4020">Статья 9. Права потребителя при приобретении товара надлежащего качества.</h2>
                        <h4 className="marginbot2010">1. Потребитель имеет право обменять непродовольственный товар надлежащего
                        качества на аналогичный у продавца, у которого он был приобретен, если товар не удовлетворил его по
                        форме, габаритам, фасону, цвету, размеру или по другим причинам не может быть им использован по
                            назначению.</h4>
                        <h4 className="marginbot2010">Потребитель имеет право на обмен товара надлежащего качества в течение
                        четырнадцати дней, не считая
                        дня покупки, если более длительный срок не объявлен продавцом. (Абзац второй части первой статьи 9 с
                            изменениями, внесенными согласно Закону N 2741-VI от 02.12.2010).</h4>
                        <h3 className="marginbot2010">Обмен товара надлежащего качества производится, если он не использовался и
                        если сохранен его
                        товарный вид, потребительские свойства, пломбы, ярлыки, а также расчетный документ, выданный
                            потребителю вместе с проданным товаром.</h3>
                        <h4 className="marginbot2010"><a href=" ">Перечень товаров, не подлежащих обмену</a> по основаниям, указанным
                            в настоящей
                            статье, утверждается Кабинетом Министров Украины.</h4>
                        <h4 className="marginbot2010">2. Если на момент обмена аналогичного товара нет в продаже, потребитель имеет
                        право или приобрести любые другие товары из имеющегося ассортимента с соответствующим перерасчетом
                        стоимости, либо расторгнуть договор и получить назад деньги в размере стоимости возвращенного
                        товара, или осуществить обмен товара на аналогичный при первом же поступлении соответствующего
                        товара в продажу. Продавец обязан в день поступления товара в продажу сообщить об этом потребителю,
                            который требует обмена товара.</h4>
                        <h4 className="marginbot2010">3. При расторжении договора купли-продажи расчеты с потребителем производятся
                        исходя из стоимости товара на время его покупки. Деньги, уплаченные за товар, возвращаются
                        потребителю в день расторжения договора, а в случае невозможности возвратить деньги в день
                            расторжения договора - в другой срок по договоренности сторон, но не позднее семи дней.</h4>
                        <a href="http://zakon4.rada.gov.ua/laws/show/1023-12" className="textright">Закон Украины "О защите прав
                            потребителей"</a>
                    </article>

                    <article className="warranty__centers textleft marginbot4020">
                        <h2 className="marginbot4020">Сервисные центры</h2>
                        <h3 className="marginbot2010">1. Сервисный центр «F1Center»</h3>
                        <div className="centers__img marginbot2010">
                            <img src={photo_001} alt="" />
                        </div>
                        <h4 className="marginbot4020">Ремонтируемая техника:</h4>
                        <h4><span className="bold">Harman/Kardon</span> - Аудио/видео техника</h4>
                        <h4><span className="bold">Yamaha</span> - Аудио/видео техника</h4>
                        <h4><span className="bold">Optoma</span> - Проекторы</h4>
                        <h4><span className="bold">Infinity</span> - Все</h4>
                        <h4><span className="bold">Rega</span> - Проигрыватели винила, CD-проигрыватели, тюнеры, предусилители,
                            усилители мощности</h4>
                        <h4><span className="bold">Rel</span> - Сабвуферы</h4>
                        <h4><span className="bold">Sunfire</span> - AV ресиверы, звуковые процессоры, усилители мощности, сабвуферы</h4>
                        <h4><span className="bold">Triad</span> - Усилители мощности</h4>
                        <h4><span className="bold">Nuvo</span> - Тюнеры</h4>
                        <h4><span className="bold">Elac</span> - Акустические системы, сабвуферы</h4>
                        <h4><span className="bold">Runco</span> - Проекторы Hi End класса</h4>
                        <h4><span className="bold">Phase</span> - Сабвуферы, акустические системы</h4>
                        <h4><span className="bold">Arcam</span> - Усилители, тюнеры, акустические системы, ресиверы, сабвуферы,
                            звуковые процессоры, кроссоверы, CD/SACD/ DVD / – проигрыватели, док станции для iPod проигрывателей</h4>
                        <h4><span className="bold">Monitor Audio</span> - Акустические системы, сабвуферы, системы домашних
                            кинотеатров</h4>
                        <h4 className="marginbot4020"><span className="bold">Jamo</span> - Акустические системы, сабвуферы, системы
                            домашних кинотеатров</h4>
                        <h4>Компания F1Center имеет несколько Центров Обслуживания Клиентов в Киеве, а также широкую сеть
                        Сервисных центров-партнеров по всей Украине. Адреса сервисных центров F1Center Вы сможете найти на
                            официальном сайте F1Center <a href=" http://www.f1center.ua/Partners/">
                                http://www.f1center.ua/Partners/</a>.</h4>
                        <h4 className="marginbot4020"> Все вопросы вы можете задать в CALL ЦЕНТР F1 Center, позвонив по номеру: 0
                        800 501 839, бесплатно с
                        мобильных и стационарных телефонов по всей Украине, а также по номерам: 067-411-41-08 (Киевстар),
                            050-411-41-08 (МТС), пн-пт 9:00 - 19:30; сб 10:00 - 16:00.</h4>
                        <h3 className="marginbot2010">2. Сервисный центр «DENON»</h3>
                        <div className="centers__img marginbot2010">
                            <img src={photo_002} alt="" />
                        </div>
                        <h4>Гарантийная или послегарантийная поддержка продукции Denon</h4>
                        <h4>Адрес в Киеве: ул. Викентия Хвойки, 21. Тел.: (044) 331-69-55.</h4>
                        <h4>Адрес в г.Одесса: ул.Осипова, 37 офис 1. Тел: +38(048) 7321423.</h4>
                        <h4>E-mail: olanevskiy@tango.com.ua</h4>
                        <h4 className="marginbot4020">Сайт:
                        <a href="http://www.denon.ua/ua/support/pages/service.aspx">http://www.denon.ua/ua/support/pages/service.aspx</a>
                        </h4>
                        <h3 className="marginbot2010">3. Сервисная компания «Крок-ТТЦ»</h3>
                        <div className="centers__img marginbot2010">
                            <img src={photo_003} alt="" />
                        </div>
                        <h4 className="marginbot4020">Гарантийный и послегарантийный ремонт техники производителей:</h4>
                        <h3 className="marginbot4020">Heco, Loewe., Klipsch, Magnat, Pioneer, Paradigm, Yamaha</h3>
                        <h4>Компания «Крок-ТТЦ» имеет несколько Центров Обслуживания Клиентов в Киеве, а также широкую сеть
                            Сервисных центров-партнеров по всей Украине. </h4>
                        <h4>Адреса сервисных центров «Крок-ТТЦ» Вы сможете найти на официальном сайте «Крок-ТТЦ»:</h4>
                        <a
                            href="http://krok-ttc.com/for-clients/search-service-center">http://krok-ttc.com/for-clients/search-service-center.</a>
                        <h4>Все вопросы Вы можете задать в <span className="bold">CALL ЦЕНТР «Крок-ТТЦ»</span>, позвонив по номерам:
                            <a href="tel:0-800-504-504" className="bold">0-800-504-504</a>,
                            <a href="tel:0-800-211-501" className="bold">0-800-211-501</a>, бесплатно с мобильных и стационарных
                            телефонов по всей Украине, пн-пт с 10-00 до
                            19-00; сб с 10-00 до 18-00.</h4>
                        <h4>Адрес: 02218, Украина, г.Киев, ул. Радужная 25-Б.</h4>
                    </article>
                </section>
                <SeoMailing />
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}