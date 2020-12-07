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

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('h');
});

exports.test = function (req, res) {
  res.render('test');
};

const product = mongoose.model(
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
  const products = await product.find({});
  res.send(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});

app.delete('/api/products/:id', async (req, res) => {
  const deletedproduct = await product.findByIdAndDelete(req.param.id);
  res.send(deletedproduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server start at the port no 5000'));
