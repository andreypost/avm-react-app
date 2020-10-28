import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
/* 
.products__credit, .products__gift, .products__video,
#carouselIndex .carousel-indicators li -->  uncomment
change ../img to ./img
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

import { ProcardBase } from './ProcardBase';
import * as serviceWorker from './serviceWorker';

export const App = () => {
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
        <Route path="/ProcardBase" component={ProcardBase} />
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
