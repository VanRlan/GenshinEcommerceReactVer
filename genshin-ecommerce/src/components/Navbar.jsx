import React, { useState, useContext } from "react";
import CartContext from "../context/cart-context";
import Modal from "./LoginModal";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(true);
    const context=useContext(CartContext)
    const [openModal, setOpenModal] = useState(false);
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
                {/* <Link to="/"> */}
                  <div className="Modal">
                    <button className="login-btn" onClick={() => {setOpenModal(true);}}>
                      <span>LOG IN</span>
                      <img src="./img/Login.png" alt="photo" />
                    </button>
                    {openModal && <Modal closeModal={setOpenModal} />}
                  </div>
                {/* </Link> */}
              </li>
              <li>
                <Link to="/checkout">
                  <button className="cart-btn">
                  <span>CART {context.cart.length}</span>
                  <img src="./img/cart-icon.png" alt="" />
                  </button>
                </Link>
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
