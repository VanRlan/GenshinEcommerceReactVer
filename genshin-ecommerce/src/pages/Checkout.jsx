import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
      <>
      <Navbar />

      <div className='checkout'>
          <h1>Shopping Cart</h1>
          <div className='cart'>
              <div className='products'>
                  <div className='product'>
                      <img src="../img/xiao-shirt.png" alt="" />
                      <div className='product-info'>
                          <h3 className='product-name'>Xiao Shirt</h3>
                          <h4 className='product-price'>$19.99</h4>
                          <h4 className='product-offer'>S</h4>
                          <p className='product-quantity'>Qnt: <input value="1" name='' /></p>
                          <button className='product-remove'>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                              <span className='remove'> Remove</span>
                          </button>
                      </div>
                  </div>
                  <div className='product'>
                      <img src="../img/ventiShirt.png" alt="" />
                      <div className='product-info'>
                          <h3 className='product-name'>Venti Shirt</h3>
                          <h4 className='product-price'>$19.99</h4>
                          <h4 className='product-offer'>M</h4>
                          <p className='product-quantity'>Qnt: <input value="1" name='' /></p>
                          <button className='product-remove'>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                              <span className='remove'> Remove</span>
                          </button>
                      </div>
                  </div>
              </div>
              <div className='cart-total'>
                  <p>
                      <span>Total Price</span>
                      <span>$30.00</span>
                  </p>
                  <p>
                      <span>Number of Items</span>
                      <span>2</span>
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