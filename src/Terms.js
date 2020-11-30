import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { Footer } from './components/Footer';
// import { ModalsPro } from "./components/ModalsPro";
const ModalsPro = lazy(() => import('./components/ModalsPro'));

export const Terms = (props) => {
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
                        <li>Пользовательское соглашение</li>
                    </ul>
                    <article className="textleft">
                        <h1 className="marginbot4020">Пользовательское соглашение</h1>
                        <article className="term__catalogue black">
                            <p className="marginbot2010 italic">Внимание! Перед просмотром этого сайта внимательно прочитайте данные
                            условия. Если вы не согласны с этими условиями, не используйте
                        этот сайт.</p>
                            <h2 className="marginbot2010">Использование сайта</h2>
                            <p className="marginbot4020">Сайт Audiovideomir.com.ua(далее «АудиоВидеМир») разрешает
                            вам просматривать и загружать материалы этого сайта (далее «Сайт») только для личного
                            некоммерческого использования, при условии сохранения вами всей информации об авторском праве и
                            других сведений о праве собственности,
                            содержащихся в исходных материалах и любых их копиях. Запрещается изменять материалы этого
                            Сайта, а также распространять или демонстрировать их в
                            любом виде или использовать их любым другим образом для общественных или коммерческих целей.
                            Любое использование этих материалов на других
                        сайтах или в компьютерных сетях запрещается.</p>
                            <h2 className="marginbot2010">Oтказ от ответственности</h2>
                            <p className="marginbot4020">Материалы и услуги этого сайта предоставляются «как есть»
                            без каких-либо гарантий. АудиоВидеМир не гарантирует точности и полноты материалов,
                            программ и услуг, предоставляемых на этом Сайте. АудиоВидеМир в любое время без уведомления
                            может вносить изменения в материалы и услуги,
                            предоставляемые на этом Сайте, а также в упомянутые в них продукты и цены. В случае устаревания
                            материалов и услуг на этом Сайте АудиоВидеМир не
                            обязуется обновлять их. АудиоВидеМир ни при каких обстоятельствах не несет ответственности за
                            любой ущерб (включая, но не ограничиваясь ущербом от
                            потери прибыли, данных или от прерывания деловой активности), возникший вследствие
                            использования, невозможности использования или результатов
                        использования этого сайта.</p>
                            <h2 className="marginbot2010">Регистрация на сайте</h2>
                            <p className="marginbot4020">Регистрируясь на Сайте, вы соглашаетесь предоставить
                            достоверную и точную информацию о себе и своих контактных данных.
                            В результате регистрации вы получаете логин и пароль, за безопасность которых вы несете
                            ответственность. Вы также несете ответственность за все
                            действия под вашим логином и паролем на Сайте. В случае утери регистрационных данных вы
                        обязуетесь сообщить нам об этом.</p>
                            <h2 className="marginbot2010">Обратная связь и комментарии</h2>
                            <p className="marginbot4020">Обращаясь к нам или оставляя комментарии на сайте, вы несете ответственность, что данное сообщение не является незаконным, вредоносным,
                            угрожающим, клеветническим, оскорбляет нравственность, нарушает авторские права, пропагандирует ненависть и/или дискриминацию людей по
                            расовому, этническому, половому, религиозному, социальному признакам, содержит оскорбления в адрес конкретных лиц или организаций, а также каким
                            либо иным образом нарушает действующее законодательство Украины. Вы соглашаетесь, что любое ваше сообщение АудиоВидеМир может удалять без
                            вашего на то согласия, а также безвозмездно использовать по своему усмотрению. АудиоВидеМир не несет ответственности за любую информацию
                        размещенную пользователями Сайта.</p>
                            <h2 className="marginbot2010">Использование персональных данных</h2>
                            <p className="marginbot4020">Мы используем различные технологии для сбора и хранения информации, когда вы посещаете сайт АудиоВидеМир (подробнее о защите и обработке
                            персональных данных). Это может включать в себя запись одного или нескольких куки или анонимных идентификаторов. Мы также используем куки и
                            анонимные идентификаторы, когда вы взаимодействуете с услугами, предложенными нашими партнерами, такими как рекламные услуги, например,
                        которые могут появиться на других сайтах.</p>
                        </article>
                    </article>
                </section>
            </main>
            <Footer />
            <Suspense fallback={<div>Loading...</div>}>
                <ModalsPro pathname={props.history.location.pathname} />
            </Suspense>
        </>
    )
}