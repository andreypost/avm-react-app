import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { NewsSection } from './components/NewsSection';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
import photo_001 from './img/MaskGroup6.png';
import photo_002 from './img/services01.png';
import photo_003 from './img/services02.png';
import photo_004 from './img/services03.png';
import photo_005 from './img/services04.png';
import photo_006 from './img/services05.png';
import photo_007 from './img/services06.png';
import photo_008 from './img/MaskGroup1.png';
import photo_009 from './img/MaskGroup2.png';
import photo_010 from './img/MaskGroup3.png';


export const Services = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const onClickHandler = (elems, onClickListener) => {
      for (let elem of elems) {
        elem.addEventListener('click', (e) => {
          onClickListener(e, elem)
        })
      }
    }
    const pausePlayVideo = (elems) => {
      const onClickListener = (e, elem) => {
        let target = e.target.closest('.carousel-control-prev,.carousel-control-next, .carousel-indicators')
        if (!target) return
        let iframe = elem.querySelector('.carousel-inner .active iframe')
        if (!iframe) return
        elem.querySelector('.carousel-inner .active iframe').src = iframe.src
      }
      onClickHandler(elems, onClickListener)
    }
    pausePlayVideo(document.querySelectorAll('.carousel'))
    const toggleAllText = (elems) => {
      const onClickListener = (e, elem) => {
        elem.nextElementSibling.classList.toggle('block')
        elem.classList.toggle('active')
      }
      onClickHandler(elems, onClickListener)
    }
    toggleAllText(document.querySelectorAll('.services__heading'))
    const dateCalendarLimit = (elem) => {
      let today = new Date(),
        delay = new Date(today)
      delay.setDate(delay.getDate() + 2)
      today.setDate(today.getDate() + 45)
        elem.min = delay.toISOString().split("T")[0]
        elem.max = today.toISOString().split("T")[0]
    }
    dateCalendarLimit(document.querySelector('input[type="date"]'))
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
        <section className="services__banner carousel__section">
          <ul className="flexstart breadcrumbs flexwrap">
            <li><Link to="/">Главная &gt;</Link></li>
            <li>Услуги</li>
          </ul>
          <article className="htextmob_768">
            <h4>Прайс-лист услуг «АУДИО ВИДЕО МИР»</h4>
          </article>
          <div id="carouselTop" className="carousel slide banner__carousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselTop" data-slide-to="0" className="active"></li>
              <li data-target="#carouselTop" data-slide-to="1"></li>
              <li data-target="#carouselTop" data-slide-to="2"></li>
              <li data-target="#carouselTop" data-slide-to="3"></li>
              <li data-target="#carouselTop" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <iframe src="https://www.youtube.com/embed/vTNw7oFE-tc"
                  frameBorder="0" allowFullScreen="" title="video_01"></iframe>
              </div>
              <div className="carousel-item">
                <iframe src="https://www.youtube.com/embed/RG9TMn1FJzc"
                  frameBorder="0" allowFullScreen="" title="video_02"></iframe>
              </div>
              <div className="carousel-item">
                <img src={photo_001} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselTop" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselTop" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <section className="services__price">
          <hgroup className="header__pricedesk">
            <h1>Прайс-лист услуг «АУДИО ВИДЕО МИР»</h1>
          </hgroup>
          <h2 className="flexbet"><span>Наименование услуги</span>Цена</h2>
          <h4 className="services__heading flexbet"><span>Выезд эксперта по г. Киеву</span>от 200 грн</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>
          <h4 className="services__heading flexbet"><span>Выезд эксперта по г. Киеву</span>5 грн за км от КП</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>
          <h4 className="services__heading flexbet"><span>Разработка проекта</span>от 400 грн</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>

          <h3 className="flexbet">Вспомогательные акустические работы</h3>
          <h4 className="services__heading flexbet"><span>Прокладка кабеля</span>от 10 грн/м</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>
          <h4 className="services__heading flexbet"><span>Подвес полочной акустики</span>от 50 грн</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>
          <h4 className="services__heading flexbet"><span>Монтаж встраиваемой акустики</span>от 50 грн</h4>
          <article className="services__text">
            <h5>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания Аудио Видео
            Мир
                    предоставляет бесплатную услугу выезда менеджера на объект.</h5>
            <h5>Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения лучше
            всего
            продумать еще на стадии строительства, а именно перед отделочными работами. Так как именно на этой
                    стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.</h5>
            <h5>Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный вариант
            аудио-видео решения в готовых помещениях, а также на любой стадии их строительства или ремонта.
            Поможет
            определить расположение, подобрать цвет, размер и уровень техники, подсчитать необходимую длину
            кабеля,
            и прочее. Даст профессиональную рекомендацию по расстановке техники и ее элементов в помещении или
            здании с учетом специфики объекта. Наш специалист учитывает: материал стен, потолка и пола;
            расположение
            дверей, окон и розеток; архитектуры и дизайна помещения; требования по эргономике; систем вентиляции
            и
                    освещения, отопления; наличие охранной и пожарной сигнализации и прочего.</h5>
          </article>
          <h3 className="flexbet">Установка телевизоров и ЖК панелей на стену</h3>
          <h6>Установка телевизора на бетонную или кирпичную стену (включая монтаж крепления для ТВ):</h6>
          <h6 className="flexbet">с диагональю до 23"<span>от 300 грн</span></h6>
          <h6 className="flexbet">с диагональю 26" - 32"<span>от 300 грн</span></h6>
          <h6 className="flexbet">с диагональю 26" - 32"<span>от 300 грн</span></h6>
          <h6 className="flexbet">с диагональю 26" - 32"<span>от 300 грн</span></h6>
          <h6 className="flexbet">с диагональю 26" - 32"<span>от 300 грн</span></h6>
          <h6 className="flexbet">с диагональю 26" - 32"<span>от 300 грн</span></h6>
          <h6 className="flexbet">При установке телевизора на гипсокартонную стену стоимость увеличивается<span>+300
                    грн</span></h6>
          <h6 className="flexbet">При установке телевизора на гипсокартонную стену стоимость увеличивается<span>+300
                    грн</span></h6>
          <h6 className="flexbet">Подключение и настройка телевизора или ЖК панели<span>от 300 грн</span></h6>

          <h3 className="flexbet">Установка видеопроекторов и экранов</h3>
          <h6 className="flexbet">Установка проектора на бетонную или кирпичную стену<span>от 400 грн</span></h6>
          <h6 className="flexbet">Установка проектора на гипсокартонную стену<span>от 400 грн</span></h6>
          <h6 className="flexbet">Установка проектора на потолок<span>от 400 грн</span></h6>
          <h6 className="flexbet">Установка экрана на стену натяжного типа<span>от 400 грн</span></h6>
          <h6 className="flexbet">Установка моторизированного проекционного экрана на стену<span>от 400 грн</span></h6>
          <h6 className="flexbet">Подключение и настройка проектора или экрана<span>от 400 грн</span></h6>
          <h6 className="services__colorstar">* Стоимость зависит от сложности монтажа и окончательно определяется
                мастером на месте.</h6>
        </section>
        <section>
          <article className="services__form">
            <form action="" id="expertVisit">
              <hgroup>
                <h1 className="services__desktext">Выезд эксперта АУДИО ВИДЕО МИР</h1>
              </hgroup>
              <label htmlFor="name">Имя</label>
              <input type="text" name="name" placeholder="Юрий" required />
              <label htmlFor="phone">Номер телефона</label>
              <input type="text" name="phone" pattern="[0-9]{10}" placeholder="0673334444" required />
              <label htmlFor="comment">Комментарий</label>
              <textarea name="comment" rows="5" className="flexcenter"></textarea>
              <label htmlFor="date">Дата</label>
              <input type="date" name="date" placeholder="" required />
              <button form="expertVisit">ЗАПИСАТЬСЯ</button>
            </form>
          </article>
        </section>
        <section className="services__add">
          <hgroup>
            <h2>Компания «АУДИО ВИДЕО МИР» предоставляет как отдельные виды услуг, так и в комплексе.</h2>
          </hgroup>
          <article className="services__grid">
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_002} alt="" />
              </div>
              <h3>КОНСУЛЬТАЦИЯ ПО ТЕЛЕФОНУ</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>По результатам изучения объекта наши менеджеры помогут интегрировать Ваше музыкальное и
                видео
                решение в существующий дизайн-проект, разработают техническое задание, и произведут
                            предварительный расчет стоимости всего проекта.</h6>
              </div>
            </div>
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_003} alt="" />
              </div>
              <h3>ОУЧЕНИЕ КЛИЕНТА</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания
                Аудио
                Видео Мир предоставляет бесплатную услугу выезда менеджера на объект.
                Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения
                лучше всего продумать еще на стадии строительства, а именно перед отделочными работами. Так
                как
                именно на этой стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.
                Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный
                вариант аудио-видео решения в готовых помещениях, а также на любой стадии их строительства
                или
                ремонта. Поможет определить расположение, подобрать цвет, размер и уровень техники,
                подсчитать
                необходимую длину кабеля, и прочее. Даст профессиональную рекомендацию по расстановке
                техники и
                ее элементов в помещении или здании с учетом специфики объекта. Наш специалист учитывает:
                материал стен, потолка и пола; расположение дверей, окон и розеток; архитектуры и дизайна
                помещения; требования по эргономике; систем вентиляции и освещения, отопления; наличие
                охранной
                            и пожарной сигнализации и прочего.</h6>
              </div>
            </div>
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_004} alt="" />
              </div>
              <h3>ГАРАНТИЙНОЕ И ПОСЛЕГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>Производится установка или встройка техники по месту. При необходимости, размещаем ее в
                подобранную мебель. Мы знаем тонкости стыковки компонентов аппаратуры, на которые нужно
                обратить
                особое внимание. Только при этом техника откроет свои самые лучшие качества, а также
                обеспечится
                максимальный ресурс эксплуатации системы. Мы сделаем управление оборудованием простым и
                удобным.
                        </h6>
              </div>
            </div>
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_005} alt="" />
              </div>
              <h3>ОУЧЕНИЕ КЛИЕНТА</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>Если Вам необходима консультация непосредственно на месте инсталляции техники – компания
                Аудио
                Видео Мир предоставляет бесплатную услугу выезда менеджера на объект.
                Думаем, не нужно напоминать нашим уважаемым Клиентам, что акустическое оформление помещения
                лучше всего продумать еще на стадии строительства, а именно перед отделочными работами. Так
                как
                именно на этой стадии проводится прокладка аудио-видео кабелей и слаботочных коммуникаций.
                Наш сотрудник приедет на объект в удобные для Вас день и час, подберет для Вас оптимальный
                вариант аудио-видео решения в готовых помещениях, а также на любой стадии их строительства
                или
                ремонта. Поможет определить расположение, подобрать цвет, размер и уровень техники,
                подсчитать
                необходимую длину кабеля, и прочее. Даст профессиональную рекомендацию по расстановке
                техники и
                ее элементов в помещении или здании с учетом специфики объекта. Наш специалист учитывает:
                материал стен, потолка и пола; расположение дверей, окон и розеток; архитектуры и дизайна
                помещения; требования по эргономике; систем вентиляции и освещения, отопления; наличие
                охранной
                            и пожарной сигнализации и прочего.</h6>
              </div>
            </div>
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_006} alt="" />
              </div>
              <h3>КОНСУЛЬТАЦИЯ ПО ТЕЛЕФОНУ</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>По результатам изучения объекта наши менеджеры помогут интегрировать Ваше музыкальное и
                видео
                решение в существующий дизайн-проект, разработают техническое задание, и произведут
                            предварительный расчет стоимости всего проекта.</h6>
              </div>
            </div>
            <div className="flexcol justcenter relative">
              <div>
                <img src={photo_007} alt="" />
              </div>
              <h3>ГАРАНТИЙНОЕ И ПОСЛЕГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ</h3>
              <div className="flexcol justcenter services__addtext">
                <h6>Производится установка или встройка техники по месту. При необходимости, размещаем ее в
                подобранную мебель. Мы знаем тонкости стыковки компонентов аппаратуры, на которые нужно
                обратить
                особое внимание. Только при этом техника откроет свои самые лучшие качества, а также
                обеспечится
                максимальный ресурс эксплуатации системы. Мы сделаем управление оборудованием простым и
                удобным.
                        </h6>
              </div>
            </div>
          </article>
          <hgroup>
            <h2>В нашем штате – квалифицированные техники-монтажники и инженеры-проектировщики.
                    Все работы выполняются качественно и в оговоренные сроки!</h2>
          </hgroup>
        </section>
        <section className="services__banner completed_projects carousel__section">
          <hgroup className="global__hgroup flexstart">
            <h1>НАШИ РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h1>
          </hgroup>
          <div id="carouselBottom" className="carousel slide banner__carousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselBottom" data-slide-to="0" className="active"></li>
              <li data-target="#carouselBottom" data-slide-to="1"></li>
              <li data-target="#carouselBottom" data-slide-to="2"></li>
              <li data-target="#carouselBottom" data-slide-to="3"></li>
              <li data-target="#carouselBottom" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={photo_008} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={photo_009} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={photo_010} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={photo_001} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselBottom" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselBottom" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <NewsSection />
        <SeoMailing />
      </main>
      <Footer />
    </>
  )
}