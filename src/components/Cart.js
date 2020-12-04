import React, {useState} from 'react';
import Checkout from './Checkout';

const Cart = (props) => {
  const {cartItems} = props;
  const [showCheckout, setshowCheckout] = useState(false);

  return (
    <div>
      <p>
        {cartItems.length === 0 ? (
          <div className=''>The Cart is Empty </div>
        ) : (
          <div className=''>The cart has {cartItems.length} items</div>
        )}
      </p>

      <div className='cartList'>
        <ul>
          {cartItems.map((items) => (
            <li key={items._id}>
              <div className='cartImage'>
                <img src={items.image} alt={items.title}></img>
              </div>
              <div className='cartDetais'>
                <div className='cartTitle'>{items.title}</div>
                <div className='cartPrice'>
                  {items.count} X {items.price}
                </div>
                <div className='cartTotal'>{items.count * items.price}</div>
              </div>
              <div className='cta-section'>
                <button
                  className='removeButton'
                  onClick={() => props.removeItem(items)}>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        {cartItems.length === 0 ? (
          ''
        ) : (
          <div className='cartSummary'>
            <p className='fontColor font-weight-bold pt-30'>
              Subtotal : {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            </p>
            <div className='cta-section'>
              <button className='btn btn-primary width-100'>Cart</button>

              <button
                className='btn btn-primary width-100'
                onClick={() => setshowCheckout(true)}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {showCheckout && (
        <div>
          <Checkout {...props}></Checkout>
        </div>
      )}
    </div>
  );
};

export default Cart;
