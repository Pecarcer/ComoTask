import express from 'express';
import mongoose from 'mongoose';
import mainRouter from './routes/mainRouter'; // Change this line
const listEndpoints = require('express-list-endpoints')

const app = express();
const port = 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/ComoTask');


app.use('', mainRouter);

app.get('/', (req, res) => {
  res.send('Server ready!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(listEndpoints(app));