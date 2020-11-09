import React, {Component, useState} from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10 text-center'>
                <p>
                  You have <b>{this.props.count}</b>{' '}
                  {this.props.count == 1 ? 'item' : 'items'} in the selected
                  Filter
                </p>
                <div style={{margin: '50px'}}>
                  <select onChange={this.props.sortProducts}>
                    <option>Lowest</option>
                    <option>Highest</option>
                    <option>Newest</option>
                  </select>
                </div>
                <ul className='product-category'>
                  <li>
                    <a
                      href='#'
                      className='active'
                      onClick={this.props.filterProducts}
                      value='all'>
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      onClick={this.props.filterProducts}
                      value='decorative'>
                      Decorative
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      onClick={this.props.filterProducts}
                      value='phone'>
                      Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      onClick={this.props.filterProducts}
                      value='camera'>
                      Camera
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      onClick={this.props.filterProducts}
                      value='accessories'>
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Filter;
