import React, { useEffect, Suspense, lazy } from 'react';
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

add class .spinner {
  color: var(--lightblue);
  background: white;
}
also add it to: modals styles, -= modal enter cabinet =- 
*/
import './index.css';
import 'bootstrap';
// import { Main } from './Main';
// import { Category } from './Category';
// import { Services } from './Services';
// import { Hall } from './Hall';
// import { Delivery } from './Delivery';
// import { Warranty } from './Warranty';
// import { Credit } from './Credit';
// import { Actions } from './Actions';
// import { About } from './About';
// import { Cooperation } from './Cooperation';
// import { Sertificate } from './Sertificate';
// import { Career } from './Career';
// import { Contacts } from './Contacts';
// import { Bonus } from './Bonus';
// import { Registration } from './Registration';
// import { Terms } from './Terms';
// import { Manufacturers } from './Manufacturers';
// import { Glossary } from './Glossary';
// import { GlossaryInner } from './GlossaryInner';
// import { ProcardBase } from './ProcardBase';
import * as serviceWorker from './serviceWorker';
const Main = lazy(() => import('./Main'));
const Category = lazy(() => import('./Category'));
const Services = lazy(() => import('./Services'));
const Hall = lazy(() => import('./Hall'));
const Delivery = lazy(() => import('./Delivery'));
const Warranty = lazy(() => import('./Warranty'));
const Credit = lazy(() => import('./Credit'));
const Actions = lazy(() => import('./Actions'));
const About = lazy(() => import('./About'));
const Cooperation = lazy(() => import('./Cooperation'));
const Sertificate = lazy(() => import('./Sertificate'));
const Career = lazy(() => import('./Career'));
const Contacts = lazy(() => import('./Contacts'));
const Bonus = lazy(() => import('./Bonus'));
const Registration = lazy(() => import('./Registration'));
const Terms = lazy(() => import('./Terms'));
const Manufacturers = lazy(() => import('./Manufacturers'));
const Glossary = lazy(() => import('./Glossary'));
const GlossaryInner = lazy(() => import('./GlossaryInner'));
const ProcardBase = lazy(() => import('./ProcardBase'));

export const App = () => {
  // const [index, setIndex] = useState('0') // settings for lifting up states: Glossary, GlossaryInner;
  // const handleIndexSet = (value) => {
  // setIndex(value)
  // }
  useEffect(() => {
    return () => { }
  })
  return (
    <HashRouter basename='/'>
      <Suspense fallback={<div className="spinner block">Loading...</div>}>
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
      </Suspense>
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
