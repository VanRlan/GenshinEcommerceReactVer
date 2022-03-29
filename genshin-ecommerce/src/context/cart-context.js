import React from 'react';
import products from "../data/products.json";

export default React.createContext({
    cart: [],
    products: products,
    
    addProductToCart: product => {},
    removeProductFromCart: productId => {},

});