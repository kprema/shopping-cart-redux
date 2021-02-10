import {
  FETCH_PRODUCTS,
  CREATE_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from '../types';

export const productReducer = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        items: action.payload,
        filteredItems: action.payload,
        activeItem: 0,
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
        activeItem: action.payload.activeItem,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case CREATE_PRODUCTS:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
};
