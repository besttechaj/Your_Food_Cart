const express = require('express');
const app = express();
const port = 5000;

//importing and connecting db
const mongoDB = require('../backend/db');
mongoDB();

//to deal with CORS PROBLEM (cross-Origin resource sharing )
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept'
  );
  next();
});

app.use(express.json());

//importing route related to Users
app.use('/api', require('./Routes/CreateUser'));
//importing route related to displaying data
app.use('/api', require('./Routes/DisplayData'));

app.get('/', (req, res) => {
  res.send('Hello World!!!!ssssssssssssss!!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening .......... on port ${port}`);
});
