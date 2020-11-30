import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
/* 
.products__credit, .products__gift, .products__video, -->  uncomment
#carouselIndex .carousel-indicators li -->  uncomment
change ../img to ./img
change: .products__card>img, .discount__card>img, .base__topbox img {
        .products__card>img, .discount__card>img {
    to: .products__card>a>img, .discount__card>a>img, .base__topbox img {
        .products__card>a>img, .discount__card>a>img {
*/
import './index.css';
import 'bootstrap';
import { Main } from './Main';
import { Category } from './Category';
import { Services } from './Services';
import { Hall } from './Hall';
import { Delivery } from './Delivery';
import { Warranty } from './Warranty';
import { Credit } from './Credit';
import { Actions } from './Actions';
import { About } from './About';
import { Cooperation } from './Cooperation';
import { Sertificate } from './Sertificate';
import { Career } from './Career';
import { Contacts } from './Contacts';
import { Bonus } from './Bonus';
import { Registration } from './Registration';
import { Terms } from './Terms';
import { Manufacturers } from './Manufacturers';
import { Glossary } from './Glossary';
import { GlossaryInner } from './GlossaryInner';
import { ProcardBase } from './ProcardBase';
// import { Footer } from './components/Footer';
import * as serviceWorker from './serviceWorker';

export const App = () => {
  // const [index, setIndex] = useState('0') // settings for lifting up states: Glossary, GlossaryInner;
  // const handleIndexSet = (value) => {
  // setIndex(value)
  // }
  useEffect(() => {
    return () => {}
  })
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={Main} />
      <Route path="/Category" component={Category} />
      <Route path="/Services" component={Services} />
      <Route path="/Hall" component={Hall} />
      <Route path="/Delivery" component={Delivery} />
      <Route path="/Warranty" component={Warranty} />
      <Route path="/Credit" component={Credit} />
      <Route path="/Actions" component={Actions} />
      <Route path="/About" component={About} />
      <Route path="/Cooperation" component={Cooperation} />
      <Route path="/Sertificate" component={Sertificate} />
      <Route path="/Career" component={Career} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/Bonus" component={Bonus} />
      <Route path="/Registration" component={Registration} />
      <Route path="/Terms" component={Terms} />
      <Route path="/Manufacturers" component={Manufacturers} />
      <Route path="/Glossary" component={Glossary} />
      <Route path="/GlossaryInner" component={GlossaryInner} />
      {/* <Route path="/Glossary" render={(props) => ( <Glossary {...props} index={index} setIndex={handleIndexSet} />)} /> */}
      {/* <Route path="/GlossaryInner" render={(props) => ( <GlossaryInner {...props} index={index} setIndex={handleIndexSet} />)} /> */}
      <Route path="/ProcardBase" component={ProcardBase} />
      {/* <Footer /> */}
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
