import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css';
import './index.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap';

import { Main } from './Main';
import { Category } from './Category';
import { Services } from './Services';
import { Hall } from './Hall';
import { Delivery } from './Delivery';
import { Warranty } from './Warranty';
import { Credit } from './Credit';
import { About } from './About';
import { Cooperation } from './Cooperation';
import { Sertificate } from './Sertificate';
import { Career } from './Career';
import { ProcardBase } from './ProcardBase';
import * as serviceWorker from './serviceWorker';

export const App = () => {
  return (
    <HashRouter basename='/'>
        <Route exact path="/" component={Main} />
        <Route path="/Services" component={Services} />
        <Route path="/Category" component={Category} />
        <Route path="/ProcardBase" component={ProcardBase} />
        <Route path="/Hall" component={Hall} />
        <Route path="/Delivery" component={Delivery} />
        <Route path="/Warranty" component={Warranty} />
        <Route path="/Credit" component={Credit} />
        <Route path="/About" component={About} />
        <Route path="/Cooperation" component={Cooperation} />
        <Route path="/Sertificate" component={Sertificate} />
        <Route path="/Career" component={Career} />
        {/*<Route path="/blog" component={Blog} />
        <Route path="/blog_article" component={Blog_Article} />
        <Route path="/faq" component={Faq} />
        <Route path="/reserve_choose" component={Reserve_Choose} />
        <Route path="/reserve_identify" component={Reserve_Identify} />
        <Route path="/reserve_member" component={Reserve_Member} />
        <Route path="/dash_profile" component={Dash_Profile} /> */}
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
