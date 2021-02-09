import {
  FETCH_PRODUCTS,
  CREATE_PRODUCTS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
} from '../types';

export const productAction = () => async (dispatch) => {
  const res_data = await fetch('/api/products');
  const data = await res_data.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (size, products, index) => (dispatch) => {
  console.log(size + products + index);
  return dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      size: size,
      items:
        size === 'all'
          ? products
          : products.filter((x) => x.category.indexOf(size) >= 0),
      activeItem: size === 'all' ? 0 : index,
    },
  });
};

export const sortProducts = (filteredProduct, sort) => (dispatch) => {
  const sortedProducts = filteredProduct.slice();
  if (sort === '') {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === 'Lowest'
        ? a.price > b.price
          ? 1
          : -1
        : sort === 'Highest'
        ? a.price < b.price
          ? 1
          : -1
        : a._id < b._id
        ? 1
        : -1
    );
  }

  dispatch({
    type: SORT_PRODUCTS,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};

export const createProduct = (product) => async (dispatch) => {
  fetch('/api/products', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: CREATE_PRODUCTS,
        payload: data,
      });
    });
};
