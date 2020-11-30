import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { Footer } from './components/Footer';
import { ModalsPro } from "./components/ModalsPro";

const Registration = (props) => {
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
                    <form action="" id="registrationForm">
                        <h1>Регистрация</h1>
                        {/* <input type="hidden" name="_csrf-frontend"
                            value="8f8WXnafwD0UxYkXJUK4JFP6WIIGAD8OKiiP2rCZBzDcpm4MI6qhdUyO-0AWMfkVHbki1DY5dFFlZ9WX9al2WA==" /> */}
                        <div className="flexbet">
                            <label htmlFor="registerName" className="textright">Имя *</label>
                            <input id="registerName" type="text" name="SignupForm[name]" data-formtooltip="Введите имя!" />
                            <label htmlFor="registerSurname" className="textright">Фамилия</label>
                            <input id="registerSurname" type="text" name="SignupForm[surname]" />
                        </div>
                        <div className="flexbet">
                            <label htmlFor="registerEmail" className="textright">E-mail *</label>
                            <input id="registerEmail" type="email" autoComplete="off" name="SignupForm[email]"
                                data-formtooltip="Введите существующий e-mail!" />
                        </div>
                        <div className="flexbet">
                            <label htmlFor="registerPhone" className="textright">Номер телефона *</label>
                            <input id="registerPhone" type="text" name="SignupForm[phone]"
                                data-formtooltip="Введите номер телефона!" />
                            <label htmlFor="registerCompany" className="textright">Компания</label>
                            <input id="registerCompany" type="text" name="SignupForm[company]" />
                        </div>
                        <div className="passwordInputs flexbet not">
                            <label htmlFor="registerPass" className="textright">Пароль *</label>
                            <input id="registerPass" type="password" name="SignupForm[password]"
                                data-formtooltip="Введите пароль в правильном формате!" autoComplete="off" />
                            <label htmlFor="registerConf" className="textright">Подтвердить пароль *</label>
                            <input id="registerConf" type="password" name="SignupForm[password_confirm]"
                                data-formtooltip="Пароли не совпадают!" autoComplete="off" />
                        </div>
                        <label className="showPassword global__label flexcenter juststart marginbot4020">
                            <input type="checkbox" />
                            <span className="global__checkmark"></span>Показать пароль
                        </label>
                        <p className="textleft italic black">Пароль должен быть не менее 6 символов, содержать цифры и заглавные буквы и не должен<br />
                            совпадать с именем и эл.почтой</p>
                        <div className="flexbet">
                            <label htmlFor="registerComment" className="textright">Дополнительная информация</label>
                            <textarea id="registerComment" name="SignupForm[additional_info]" rows="8"></textarea>
                        </div>
                        <div className="registration__confirm textleft">
                            <div className="g-recaptcha my-5" data-sitekey="6LfqibIUAAAAAPu3rD5yzp0foe81foXBTR90eKB6"></div>
                            <label className="global__label flexcenter juststart">
                                <input type="checkbox" name="SignupForm[consent]" data-formtooltip="Нам требуется Ваше согласие!" />
                                <span className="global__checkmark"></span>Соглашаюсь с &nbsp;<Link to="Terms"
                                    target="_blank">пользовательским
                            соглашением</Link>
                            </label>
                            <label className="global__label flexcenter juststart marginbot4020">
                                <input type="checkbox" name="SignupForm[remember_me]" />
                                <span className="global__checkmark"></span>Запомнить меня
                            </label>
                            <button form="registrationForm" type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
            <ModalsPro pathname={props.history.location.pathname} />
        </>
    )
}
export default Registration