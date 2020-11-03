import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: '',
      sort: '',
    };
  }
  render() {
    return (
      <div className='container'>
        <header> Logo </header>

        <main>
          <div className='product-grid'>
            <Products products={this.state.product}></Products>
          </div>
        </main>

        <footer> All rights reserved @2020 </footer>
      </div>
    );
  }
}

export default App;
