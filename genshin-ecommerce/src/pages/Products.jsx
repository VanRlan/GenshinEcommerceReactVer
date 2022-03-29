import React, { useState } from "react";
import CartContext from "../context/cart-context";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Products = () => {
  // const [productDesc, setProductDesc] = useState('');
  // const [productPrice, setProductPrice] = useState('');

  // const addToCart = () => {
  //   Axios.post('http://localhost:3001/api/insert', { productName: productName, productDesc: productDesc, productPrice: productPrice }).then(() => {
  //     alert("successful insert");
  //   });
  // };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartContext.Consumer>
      {context => (
        <>
        <Navbar />
      <div className="small-container-2">
        <div className="row row-2">
          <h1>All Products</h1>
          <input type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value)
            }}
          />
          <select>
            <option>Default Sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>Sort by sale</option>
          </select>
        </div>
        <div className="row">
          {context.products.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((product, key) => (
            <div className="col-5" key={key}>
            <Link to="/ProductInfo">
              <img
                src={product.img}
                className="items"
                alt="XiaoShirt"
              />
            </Link>
            <div className="product-details">
            <h2>{product.title}</h2>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button 
              className="product-btn"
              onClick={context.addProductToCart.bind(this, product)}
              >Add to Cart</button>
            </div>
          </div>
          ))}
        </div>
        <div className="page-btn">
          <span>1</span>
          <Link to="/products2">
          <span>2</span>
          </Link>
          {/* <span>2</span> */}
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
      <Footer />
        </>
      )}
    </CartContext.Consumer>
  );
};

export default Products;
