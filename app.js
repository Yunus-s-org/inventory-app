const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');


const port = process.env.PORT || 3000;

const notFoundMiddleware = require('./server/middleware/not-found');
const errorMiddleware = require('./server/middleware/error-handler');
const connectDB = require('./server/db/connect');
const productsRouter = require("./server/routes/products")

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send("<h1>Inventory Management System</h1> <a href='/api/v1/products'>products route</a>");
})

app.use('/api/v1/products', productsRouter);

// listen on port

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();