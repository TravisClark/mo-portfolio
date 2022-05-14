import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header/Header";
import Project from "./components/Project/Project";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Technologies/>
      <Project/>
    </>
  );
}

export default App;
