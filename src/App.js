import React from 'react';

import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import ReactBootstrapTable from './components/reactBootstrapTable';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    const filterByItems = [
      'All',
      'Decorative',
      'Phone',
      'Camera',
      'Accessories',
    ];

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
                      <Products></Products>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='cartContent'>
                      <Cart></Cart>
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
