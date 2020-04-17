import React from 'react';
// import { Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ModalsPro from "./components/ModalsPro";


class Category extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
      return (
        <>
          <Header />
          <main>
           
          </main>
          <Footer />
          <ModalsPro />
        </>
      );
    }
  }
  export default Category;