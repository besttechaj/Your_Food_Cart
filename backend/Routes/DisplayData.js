const express = require('express');
const router = express.Router();

// To send the data to the frontend hence creating an APi
router.post('/foodData', (req, res) => {
  try {
    //since global.foodItems is a global variable created inside db.js file hence we can call it anywhere in our project
    console.log(global.foodItems);
    res.send([global.foodItems, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send('server error - Unable to send data to frontend');
  }
});

module.exports = router;
