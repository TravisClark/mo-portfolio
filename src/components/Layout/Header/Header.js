import React from "react";
import logo from "../../../assets/bxl-digitalocean.svg";
import fbLogo from "../../../assets/bxl-facebook.svg";
import githubLogo from "../../../assets/bxl-github.svg";
import Container from "../../UI/Container/Container";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <nav>
      <Container className="fixed min-w-full z-10 flex text-white justify-around md:flex-row">
        <div className="flex flex-row space-x-2">
          <span className="font-bold text-5xl flex flex-row">
            M
            <img
              src={logo}
              alt="a"
              className="h-8 self-end bg-white rounded-full"
            />
          </span>
          <span className="font-bold text-2xl  self-end">portfolio</span>
        </div>
        <div className="hidden flex-row space-x-8 self-end font-medium text-gray-400 md:flex">
          <a
            href="#projects"
            className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110"
          >
            Projects
          </a>
          <a href="#technologies" className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110">
            Technologies
          </a>
          <a href="#about" className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110">
            About
          </a>
          <a href="#contact" className="text-xl transition duration-700 ease-out hover:text-white hover:scale-110">
            Contact
          </a>
        </div>
        <div className="hidden flex-row space-x-6 self-end md:flex">
          <a href="https://www.facebook.com/minhtriet1712001/">
            <img
              src={fbLogo}
              className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
              alt=""
            />
          </a>
          <a href="https://github.com/TravisClark">
            <img
              src={githubLogo}
              className="h-8 rounded-full bg-gray-300 transition duration-500 ease-out hover:bg-white hover:scale-110"
              alt=""
            />
          </a>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          className={`${classes.hamburger} block self-end focus:outline-none md:hidden`}
        >
          <span className={classes["hamburger-top"]}></span>
          <span className={classes["hamburger-middle"]}></span>
          <span className={classes["hamburger-bottom"]}></span>
        </button>
      </Container>
    </nav>
  );
};

export default Header;
