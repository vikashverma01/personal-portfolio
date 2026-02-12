import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import  Header  from './components/Header/Header.jsx';
import { GlobalStyle } from "./styles/global";
import Main from "./components/Main/Main.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";
import {Contact} from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  

  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main />
      <About />
      <Project />
      <Contact></Contact>
      <Footer></Footer>
    </Router>
  );
}

export default App
