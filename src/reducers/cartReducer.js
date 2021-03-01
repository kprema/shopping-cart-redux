import {ADD_CART_ITEM, REMOVE_CART_ITEM} from '../types';

export const cartReducer = (
  state = {cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]')},
  action
) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {cartItems: action.payload.cartItems};
    case REMOVE_CART_ITEM:
      return {cartItems: action.payload.cartItems};
    default:
      return state;
  }
};
