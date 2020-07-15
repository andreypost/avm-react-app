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
        {/*<Route path="/coach_joyce" component={Coach_Joyce} />
        <Route path="/coach_john" component={Coach_John} />
        <Route path="/coach_samantha" component={Coach_Samantha} />
        <Route path="/coach_cameron" component={Coach_Cameron} />
        <Route path="/coach_marvin" component={Coach_Marvin} />
        <Route path="/coach_kayla" component={Coach_Kayla} />
        <Route path="/club" component={Club} />
        <Route path="/blog" component={Blog} />
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
