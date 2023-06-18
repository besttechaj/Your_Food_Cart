const express = require('express');
const app = express();
const port = 5000;

//importing and connecting db
const mongoDB = require('../backend/db');
// mongoDB();

app.use(express.json());

//importing route
app.use('/api', require('./Routes/CreateUser'));

app.get('/', (req, res) => {
  res.send('Hello World!!!!ssssssssssssss!!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening .......... on port ${port}`);
});
