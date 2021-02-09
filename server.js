const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/shopping-cart-redux-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connnected'))
  .catch((err) => console.log(err));

const Product_model = mongoose.model(
  'product-table',
  new mongoose.Schema({
    _id: {type: String, default: shortid.generate},
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number,
    mrpprice: Number,
    offprice: Number,
    category: String,
  })
);

app.get('/api/products', async (req, res) => {
  const products = await Product_model.find({});
  res.send(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product_model(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});

app.get('/api/productsquery', (req, res) => {
  var page = parseInt(req.query.page) || 0;
  var limit = parseInt(req.query.limit) || 18;
  var query = {};

  Product_model.find(query)
    .sort({update_at: -1})
    .skip(page * limit)
    .limit(limit)
    .exec((err, doc) => {
      if (err) {
        return res.json(err);
      }

      Product_model.countDocuments(query).exec((count_error, count) => {
        if (err) {
          return res.json(count_error);
        }
        return res.json({
          total: count,
          page: page,
          pageSize: doc.length,
          products: doc,
        });
      });
      console.log(page);
    });
});

app.delete('/api/products/:id', async (req, res) => {
  const deletedproduct = await product.findByIdAndDelete(req.params.id);
  res.send(deletedproduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server start at the port no 5000'));
