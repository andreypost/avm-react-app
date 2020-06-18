import React from 'react';
// import { Link } from "react-router-dom";
import Header from './components/Header';
import Catalogue from './components/Catalogue';
import Footer from './components/Footer';
import ModalsPro from "./components/ModalsPro";


class Main extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
      return (
        <>
          <Header>
            <Catalogue />
          </Header>

          <main>
           
          </main>
          <Footer />
          <ModalsPro />
        </>
      );
    }
  }
  export default Main;