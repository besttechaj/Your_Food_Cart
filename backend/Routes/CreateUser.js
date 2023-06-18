const express = require('express');
//creating router
const router = express.Router();
const User = require('../models/User');

//creating a post api for creating new user
router.post('/createuser', async (req, res) => {
  try {
    let data = await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(`successfully created a new user `);

    res.json({ success: true, newUserdata: data });
  } catch (error) {
    console.log(`error occur during new user creation`, error);
    res.json({ success: false, errorOccured: error });
  }
});

//exporting router
module.exports = router;
