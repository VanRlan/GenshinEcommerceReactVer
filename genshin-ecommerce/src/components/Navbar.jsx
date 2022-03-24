import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(true);
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
          <Link to="/">
            <img src="./img/Genshinlogo.png" alt="Genshinlogo" />
          </Link>
        </div>
        <nav>
          {isMenuVisible && (
            <ul id="menuItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="login-btn">
                    <span>LOG IN</span>
                    <img src="./img/Login.png" alt="photo" />
                  </button>
                </Link>
              </li>
              <li>
                {/* <Link to="/cart">Cart</Link> */}
                  <button className="cart-btn">
                  <span>CART</span>
                  <img src="./img/cart-icon.png" alt="" />
                  </button>
              </li>
            </ul>
          )}

          {/* <div className="header_optionCart">
            <span className="header_optionLineTwo header_cartCount">0</span>
          </div> */}

        </nav>
      </header>
    </>
  );
};

export default Navbar;
