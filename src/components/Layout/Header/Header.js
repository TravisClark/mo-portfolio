import React from "react";
import logo from "../../../assets/bxl-digitalocean.svg";
import fbLogo from "../../../assets/bxl-facebook.svg";
import githubLogo from "../../../assets/bxl-github.svg";
import Container from "../../UI/Container/Container";
const Header = () => {
  return (
    <nav>
      <Container className="fixed z-10 flex text-white justify-around md:flex-row">
        <div className="flex flex-row space-x-2">
          <span className="font-bold text-5xl flex flex-row">
            M<img src={logo} alt="a" className="h-8 self-end bg-white rounded-full" />
          </span>
          <span className="font-bold text-2xl  self-end">portfolio</span>
        </div>
        <div className="flex flex-row space-x-8 self-end font-medium text-gray-400 md:hidden">
          <a href="#projects" className="text-xl hover:text-white">
            Projects
          </a>
          <a href="#technical" className="text-xl hover:text-white">
            Technical
          </a>
          <a href="#about" className="text-xl hover:text-white">
            About
          </a>
        </div>
        <div className="flex flex-row space-x-6 self-end md:hidden">
          <a href="#fb">
            <img src={fbLogo} className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110" alt="" />
          </a>
          <a href="#git">
            <img src={githubLogo} className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110" alt="" />
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
