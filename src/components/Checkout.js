import React, {useState} from 'react';

const Checkout = (props) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: values.name,
      email: values.email,
      address: values.address,
      cartItems: props.cartItems,
    };
    props.createOrder(order);
  };
  return (
    <div className='checkout-container'>
      <form onSubmit={createOrder}>
        <ul>
          <li>
            <label>Name</label>
            <input
              type='text'
              name='name'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Email</label>
            <input
              type='email'
              name='email'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Address</label>
            <input
              type='text'
              name='address'
              required
              onChange={handleInput}></input>
          </li>
          <li className='center'>
            <button type='submit' className='btn btn-primary width-100'>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Checkout;
