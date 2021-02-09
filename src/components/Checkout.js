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
      size: values.size,
      imageUrl: values.imageUrl,
      title: values.title,
      description: values.description,
      price: values.price,
      mrpprice: values.mrpprice,
      category: values.category,
    };
    props.createOrder(order);
  };
  return (
    <div className='checkout-container'>
      <form onSubmit={createOrder} method='POST' action='/api/products'>
        <ul>
          <li>
            <label>Avalibale size</label>
            <input
              type='text'
              name='size'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Image URL</label>
            <input
              type='text'
              name='imageUrl'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Title</label>
            <input
              type='text'
              name='title'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Description</label>
            <input
              type='text'
              name='description'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Price</label>
            <input
              type='text'
              name='price'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>MRP Price</label>
            <input
              type='text'
              name='mrpprice'
              required
              onChange={handleInput}></input>
          </li>
          <li>
            <label>Category</label>
            <input
              type='text'
              name='category'
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
