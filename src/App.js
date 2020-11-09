import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    };
  }
  filterProducts = (e) => {
    if (e.target.innerText.toLowerCase() === 'all') {
      this.setState({
        filterBy: e.target.innerText.toLowerCase(),
        products: data.products,
      });
    } else {
      this.setState({
        filterBy: e.target.innerText.toLowerCase(),
        products: data.products.filter(
          (product) =>
            product.category.indexOf(e.target.innerText.toLowerCase()) >= 0
        ),
      });
    }
  };

  sortProducts = (e) => {
    this.setState({
      sort: e.target.value,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          e.target.value === 'Lowest'
            ? a.price > b.price
              ? 1
              : -1
            : e.target.value === 'Highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    });
  };
  render() {
    return (
      <div className='container'>
        <header> Logo </header>

        <main>
          <div className='product-grid'>
            <Filter
              count={this.state.products.length}
              size={this.state.filterBy}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}></Filter>
            <Products products={this.state.products}></Products>
          </div>
        </main>

        <footer> All rights reserved @2020 </footer>
      </div>
    );
  }
}

export default App;
