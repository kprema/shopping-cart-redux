import React from 'react';

class Products extends React.Component {
  render() {
    return (
      <div>
        <section className='ftco-section'>
          <div className='container'>
            <ul className='row'>
              {this.props.products.map((product) => (
                <li
                  key={product._id}
                  className='col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated'>
                  <div className='product'>
                    <a href='#' className='img-prod'>
                      <img
                        className='img-fluid'
                        src={product.image}
                        alt='productimage'
                      />
                      {product.offprice >= 0 ? (
                        <span className='status'>{product.offprice}%</span>
                      ) : (
                        ''
                      )}

                      <div className='overlay'></div>
                    </a>
                    <div className='text py-3 pb-4 px-3 text-center'>
                      <h3>
                        <a href='#'>{product.title}</a>
                      </h3>
                      <div className='d-flex'>
                        <div className='pricing'>
                          <p className='price'>
                            <span className='price-sale mr-2'>
                              {product.price}
                            </span>
                            <span className='price-dc'>{product.mrpprice}</span>
                          </p>
                        </div>
                      </div>
                      <div className='bottom-area d-flex px-3'>
                        <div className='m-auto d-flex'>
                          <a
                            href='#'
                            className='add-to-cart d-flex justify-content-center align-items-center text-center'>
                            <span>
                              <i className='ion-ios-menu'></i>
                            </span>
                          </a>
                          <a
                            href='#'
                            className='buy-now d-flex justify-content-center align-items-center mx-1'>
                            <span>
                              <i className='ion-ios-cart'></i>
                            </span>
                          </a>
                          <a
                            href='#'
                            className='heart d-flex justify-content-center align-items-center '>
                            <span>
                              <i className='ion-ios-heart'></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Products;