import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
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
          {products.filter((val) => {
            if (searchTerm == "") {
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
            <button>Add to Cart</button>
          </div>
          ))}
        </div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
