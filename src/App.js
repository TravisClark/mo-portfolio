import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Project from "./components/Project/Project";
import Technologies from "./components/Technologies/Technologies";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])
  return (
    <>
      <Intro/>
      <Header/>
      <Hero/>
      <About/>
      <Technologies/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
