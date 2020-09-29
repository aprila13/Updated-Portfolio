import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import About from "./components/About";
import PageBreak from "./components/PageBreak";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Portfolio/>
      <PageBreak/>
      <Skills/>
      <PageBreak/>
      <About/>
      <PageBreak/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
