import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <header className="navbar">
        <img
          src="./img/hamburgermenuicon.png"
          className="menu"
          onClick={() => {
            setMenuVisible(!isMenuVisible);
          }}
          alt="menu-icon"
        />
        <div className="logo">
          <a href="index.html">
            <img src="./img/Genshinlogo.png" alt="Genshinlogo" />
          </a>
        </div>
        <nav>
          {isMenuVisible && (
            <ul id="MenuItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
          <div className="icons">
            <button className="login-btn">
              <span>LOG IN</span>
              <img src="./img/Login.png" alt="photo" />
            </button>
          </div>
        </nav>
        <a href="#">
          <img
            src="https://webstatic-sea.mihoyo.com/upload/event/2020/11/06/097f419d5e84de22dd46463e4e7bff8c_6384289011155822242.png"
            width="200"
            height="69"
            alt="Download"
          />
        </a>
      </header>
    </>
  );
};

export default Navbar;
