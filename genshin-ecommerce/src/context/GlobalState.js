import React, { useReducer } from 'react';
import CartContext from "../context/cart-context";
import { cartReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';
import productsData from "../data/products.json";

const GlobalState = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, {cart:[]})
    const products = productsData;
    const addProductToCart = product => {
        setTimeout(()=> {
            dispatch({type: ADD_PRODUCT, product: product})
        }, 500)
    }

    const removeProductFromCart = productId => {
        setTimeout(()=> {
            dispatch({type: REMOVE_PRODUCT, productId: productId})
        }, 500)
    }

    return(
        <CartContext.Provider
        value={{
            products: products,
            cart: cartState.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default GlobalState;