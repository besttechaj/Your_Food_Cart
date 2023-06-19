const express = require('express');
//creating router
const router = express.Router();
const User = require('../models/User');

//requiring validators
const { body, validationResult } = require('express-validator');

//creating a post api for creating new user
router.post(
  '/createuser',
  [
    //validating email
    body('email', 'Please Enter A Valid Email').isEmail(),
    //password must be minimum 3 char long
    body('password', 'Password should have min 3 characters').isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    //validating all user's passed parameters
    const result = validationResult(req);
    if (result.isEmpty()) {
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
    } else {
      console.log(`error occurs during user input, Please check user's input`);
      res.status(400).json({ errors: result.array() });
    }
  }
);

/************************************************************** */

//creating a get api for fetching the existing user
router.post(
  '/loginuser',
  [
    //validating email
    body('email', 'Please Enter A Valid Email').isEmail(),
    //password must be minimum 3 char long
    body('password', 'Password should have min 3 characters').isLength({
      min: 3,
    }),
  ],

  async (req, res) => {
    //validating all user's passed parameters
    const result = validationResult(req);
    if (result.isEmpty()) {
      let email = req.body.email;
      try {
        //checking whether user is an Existing account holder
        let userData = await User.findOne({ email });

        //what to do if email doesn't exist
        if (!userData) {
          return res.status(400).json({ errors: "Email doesn't Exist" });
        } else {
          console.log(`Email matched`);
        }

        //what to do if password doesn't match
        if (req.body.password !== userData.password) {
          return res.status(400).json({ errors: "Password doesn't Match" });
        } else {
          console.log(`password matched`);
          //if email and password are matched then..
          res.json({ success: true, newUserdata: userData });
        }
      } catch (error) {
        console.log(`error occur during login`, error);
        res.json({ success: false, errorOccured: error });
      }
    } else {
      console.log(`error occurs during user input, Please check user's input`);
      res.status(400).json({ errors: result.array() });
    }
  }
);

//exporting router
module.exports = router;
