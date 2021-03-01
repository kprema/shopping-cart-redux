import {ADD_CART_ITEM, REMOVE_CART_ITEM} from '../types';

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyInCart = false;

  cartItems.forEach((x) => {
    if (x._id === product._id) {
      x.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({...product, count: 1});
  }

  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      cartItems,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeCartItem = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);

  dispatch({
    type: REMOVE_CART_ITEM,
    payload: {cartItems},
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
