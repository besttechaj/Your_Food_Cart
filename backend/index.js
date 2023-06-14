const express = require('express');
const app = express();
const port = 5000;

//connecting db
const mongoDB = require('../backend/db');
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!!!!ssssssssssssss!!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening .......... on port ${port}`);
});
