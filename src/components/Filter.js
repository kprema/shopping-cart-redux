import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {filterProducts, sortProducts} from '../actions/productActions';

const Filter = (props) => {
  return (
    <div>
      <section>
        <div className=''>
          <div className='container'>
            <div className='row text-center'>
              <ul className='product-category col-md-12'>
                {props.filterByItems.map((filterItem, index) => (
                  <li
                    key={index}
                    className={props.activeItem === index ? 'active' : ''}
                    onClick={(e) =>
                      props.filterProducts(
                        e.target.innerText.toLowerCase(),
                        props.products,
                        index
                      )
                    }
                    value={index}>
                    <a href='#'>{filterItem}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='row pt-30'>
              <p className='col-md-5 text-left'>
                {props.filteredProduct.length}{' '}
                {props.filteredProduct === 1 ? 'item' : 'items'} in the selected
                Filter
              </p>

              <div className='col-md-3'>
                <Link to='/reactTable'>Table Look</Link>
              </div>

              <div className='col-md-4 text-right'>
                <select
                  onChange={(e) =>
                    props.sortProducts(props.filteredProduct, e.target.value)
                  }>
                  <option>Lowest</option>
                  <option>Highest</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  (state) => ({
    sort: state.products.sort,
    size: state.products.size,
    products: state.products.items,
    filteredProduct: state.products.filteredItems,
    activeItem: state.products.activeItem,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
