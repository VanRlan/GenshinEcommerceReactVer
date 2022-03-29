export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const addProductToCart = (product, state) => {
    console.log(product);
    const newCart = [...state.cart]
    const newProductIndex = newCart.findIndex(
        item => item.id === product.id
    )
    if (newProductIndex < 0){
        newCart.push({...product, quantity: 1})
    } else {
        const updatedItem = {
            ...newCart[newProductIndex]
        }
        updatedItem.quantity++;
        newCart[newProductIndex] = updatedItem
    }
    console.log(newCart);
    return {...state, cart: newCart}
}

const removeProductFromCart = (product, state) => {
    console.log(product);
    const newCart = [...state.cart]
    const productIndex = newCart.findIndex(
        item => item.id === product.id
    )
    const updatedItem = {
        ...newCart[productIndex]
    }
    updatedItem.quantity--;

    if (productIndex <= 0){
        newCart.splice(productIndex, 1)
    } else {
        newCart[productIndex] = updatedItem
    }
    console.log(newCart);
    return {...state, cart: newCart}
}

export const cartReducer = (state, action) => {
    switch(action.type){
        case ADD_PRODUCT: 
            return addProductToCart(action.product, state);
        case REMOVE_PRODUCT: 
            return removeProductFromCart(action.productId, state);
        default: 
            return state;
    }
}