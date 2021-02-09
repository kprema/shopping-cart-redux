import React from 'react';

import data from './data.json';

import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import ReactBootstrapTable from './components/reactBootstrapTable';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    };
  }

  createOrder = (order) => {
    alert(order.price);
  };

  // filterProducts = (e, index) => {
  //   if (e.target.innerText.toLowerCase() === 'all') {
  //     this.setState({
  //       filterBy: e.target.innerText.toLowerCase(),
  //       products: data.products,
  //       activeItem: 0,
  //     });
  //   } else {
  //     this.setState({
  //       filterBy: e.target.innerText.toLowerCase(),
  //       activeItem: index,
  //       products: data.products.filter(
  //         (product) =>
  //           product.category.indexOf(e.target.innerText.toLowerCase()) >= 0
  //       ),
  //     });
  //   }
  // };

  // sortProducts = (e) => {
  //   this.setState({
  //     sort: e.target.value,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         e.target.value === 'Lowest'
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : e.target.value === 'Highest'
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id < b._id
  //           ? 1
  //           : -1
  //       ),
  //   });
  // };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  removeItem = (item) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== item._id),
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter((x) => x._id !== item._id))
    );
  };
  render() {
    const filterByItems = [
      'All',
      'Decorative',
      'Phone',
      'Camera',
      'Accessories',
    ];
    const activeItem = 0;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='container'>
            <header> Logo </header>

            <main>
              <Route path='/reactTable' exact component={ReactBootstrapTable} />
              <div className='container'>
                <div className='row'>
                  <div className='col-md-9'>
                    <div className='product-grid'>
                      <Filter filterByItems={filterByItems}></Filter>
                      <Products addToCart={this.addToCart}></Products>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='cartContent'>
                      <Cart
                        cartItems={this.state.cartItems}
                        removeItem={this.removeItem}
                        createOrder={this.createOrder}></Cart>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <footer> All rights reserved @2020 </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
