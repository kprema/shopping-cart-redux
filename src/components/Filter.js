import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10 text-center'>
              <p>
                You have <b>{props.count}</b>{' '}
                {props.count === 1 ? 'item' : 'items'} in the selected Filter
              </p>
              <div style={{margin: '50px'}}>
                <select onChange={props.sortProducts}>
                  <option>Lowest</option>
                  <option>Highest</option>
                  <option>Newest</option>
                </select>
              </div>
              <ul className='product-category'>
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default Filter;
