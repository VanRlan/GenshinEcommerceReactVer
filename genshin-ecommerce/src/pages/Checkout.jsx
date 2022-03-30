import React, { useContext, useState } from "react";
import CartContext from "../context/cart-context";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const context=useContext(CartContext)
  console.log(context);
  return (
      <>
      <Navbar />

      <div className='checkout'>
          <h1>YOUR CART</h1>
          <div className='cart'>
              <div className='products'>
                  {context.cart.length <= 0 && <p>No Items In Cart</p>}
                  {context.cart.map(item => (
                      <div className='product'>
                      <img src={item.img} alt="" />
                      <div className='product-info'>
                          <h3 className='product-name'>{item.title}</h3>
                          <h4 className='product-price'>{item.price}</h4>
                          <h4 className='product-offer'>S</h4>
                          <p className='product-quantity'>QTY: <input value={item.quantity} name='' /></p>
                          <button className='product-remove' onClick={context.removeProductFromCart.bind(this, item.id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                              <span className='remove'> Remove</span>
                          </button>
                      </div>
                  </div>
                  ))}   
              </div>
              <div className='cart-total'>
                  <p>
                      <span>Total Price</span>
                      <span>$30.00</span>
                  </p>
                  <p>
                      <span>Number of Items</span>
                      <span>{context.cart.length}</span>
                  </p>
                  <p>
                      <span>You Save</span>
                      <span>$10.00</span>
                  </p>
                  <a href="#">Proceed to Checkout</a>
              </div>
          </div>
      </div>
      
      <Footer />
      </>
  )
}

export default Checkout;