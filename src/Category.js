import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import dataGategory from './components/dataGategory';
import { CardCategory } from './components/CardCategory';
import dataHits from './components/dataHits';
import { CardProduct } from './components/CardProduct';
import { CardDiscount } from './components/CardDiscount';
import { SeoMailing } from './components/SeoMailing';
import { Footer } from './components/Footer';
// import { ModalsPro } from "./components/ModalsPro";
const ModalsPro = lazy(() => import('./components/ModalsPro'));


export const Category = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const createSelect = (elems) => {
      if (!elems) return
      let select, clone, items, optionsBox
      for (let i = 0; i < elems.length; i++) {
        select = elems[i].getElementsByTagName('select')[0]
        clone = document.createElement('div')
        clone.setAttribute('class', 'select__clone')
        clone.innerHTML = select.options[select.selectedIndex].innerHTML = select.options[select.selectedIndex].value
        elems[i].append(clone)
        items = document.createElement('div')
        items.setAttribute('class', 'select__item select__hide')
        for (let j = 1; j < select.length; j++) {
          optionsBox = document.createElement('div')
          optionsBox.innerHTML = select.options[j].innerHTML
          optionsBox.dataset.optionUrl = select.options[j].dataset.optionUrl
          optionsBox.addEventListener('click', function (e) {
            let sameSelected, baseSelect, cloneSelect;
            baseSelect = this.parentNode.parentNode.getElementsByTagName('select')[0]
            cloneSelect = this.parentNode.previousSibling
            for (let i = 0; i < baseSelect.length; i++) {
              if (baseSelect.options[i].innerHTML === this.innerHTML) {
                baseSelect.selectedIndex = i
                cloneSelect.innerHTML = this.innerHTML
                sameSelected = this.parentNode.getElementsByClassName('same__selected')
                for (let k = 0; k < sameSelected.length; k++) {
                  sameSelected[k].removeAttribute('class')
                }
                this.setAttribute('class', 'same__selected')
                break
              }
            }
            cloneSelect.click()
            // window.location.assign(e.target.dataset.optionUrl)
          })
          items.append(optionsBox)
        }
        elems[i].append(items)
        clone.addEventListener('click', function (e) {
          e.stopPropagation()
          closeAllSelect(this)
          this.nextSibling.classList.toggle('select__hide')
          this.classList.toggle('select__able')
        })
      }
    }
    const closeAllSelect = (elem) => {
      let i, arrNo = [],
        x = document.getElementsByClassName('select__item'),
        y = document.getElementsByClassName('select__clone')
      if (!x && !y) return
      for (i = 0; i < y.length; i++) {
        if (elem === y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove('select__able')
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add('select__hide')
        }
      }
    }
    document.addEventListener('click', closeAllSelect)
    createSelect(document.getElementsByClassName('select__custom'))
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
            <li>Каталог товаров</li>
          </ul>
          <article className="category__section">
            <h1 className="marginbot4020">Каталог товаров</h1>
            <article className="box__grid">
              {dataGategory.map((item, i) =>
                <CardCategory key={item.title} datos={dataGategory[i]} />
              )}
            </article>
            <h2 className="textleft">Список товаров</h2>
            <div className="flexbet global__searchfilter">
              <h4 className="flexcenter search__result">Найдено:<span>47</span>товаров из:<span>150</span></h4>
              <div className="flexbet select__block">
                <div className="select__custom flexbet relative">
                  <h4>Отображать по:</h4>
                  <select name="">
                    <option value="10"></option>
                    <option value="0" data-option-url="/avm-react-app/#/Category">10</option>
                    <option value="1" data-option-url="/avm-react-app/#/Category">20</option>
                    <option value="2" data-option-url="/avm-react-app/#/Category">30</option>
                  </select>
                </div>
              </div>
            </div>
            <article className="box__grid">
              {dataHits.map((card, i) =>
                card.basePrice > 0 ? <CardDiscount key={card.code} datos={dataHits[i]} /> : <CardProduct key={card.code} datos={dataHits[i]} />
              )}
            </article>
            <nav className="pagination__global flexcenter justcenter">
              <a className="pagination__prev" href=" "> </a>
              <div className="pagination__list flexcenter juststart">
                <a className="pagination__item" href=" ">1</a>
                <p>...</p>
                <a className="pagination__item active" href=" ">1</a>
                <a className="pagination__item" href=" ">2</a>
                <a className="pagination__item" href=" ">3</a>
                <p>...</p>
                <a className="pagination__item" href=" ">11</a>
              </div>
              <a className="pagination__next" href=" "> </a>
            </nav>
          </article>
        </section>
        <SeoMailing />
      </main>
      <Footer />
      <Suspense fallback={<div className="header__shadow block"></div>}>
        <ModalsPro pathname={props.history.location.pathname} />
      </Suspense>
    </>
  )
}
