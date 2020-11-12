import React from 'react';

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
                    onClick={(e) => props.filterProducts(e, index)}
                    value={index}>
                    <a href='#'>{filterItem}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='row pt-30'>
              <p className='col-md-8 text-left'>
                You have <b>{props.count}</b>{' '}
                {props.count === 1 ? 'item' : 'items'} in the selected Filter
              </p>
              <div className='col-md-4 text-right'>
                <select onChange={props.sortProducts}>
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
export default Filter;
