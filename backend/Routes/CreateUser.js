const express = require('express');
//creating router
const router = express.Router();
const User = require('../models/User');

//requiring jsonwebtoken and bcryptjs
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'ThisIsMy@cretK@y';

//requiring validators
const { body, validationResult } = require('express-validator');

//NOTE: creating a post api for creating new user
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
      //LOGIC TO IMPLEMENT BYCRYPT-JS
      const salt = await bcryptjs.genSalt(10);
      let secPassword = await bcryptjs.hash(req.body.password, salt);
      try {
        let data = await User.create({
          name: req.body.name,
          location: req.body.location,
          email: req.body.email,
          password: secPassword,
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

//NOTE: creating a get api for fetching the existing user
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

        //comparing the given input password with the user data's existing password
        const pwdCompare = await bcryptjs.compare(
          req.body.password,
          userData.password
        );

        //what to do if password doesn't match
        if (!pwdCompare) {
          return res.status(400).json({ errors: "Password doesn't Match" });
        } else {
          //creating the authToken for user : authToken consists of algorithm with its type, one unique user data and a secret key.
          const data = {
            user: {
              id: userData.id,
            },
          };

          const authToken = jwt.sign(data, secretKey);

          console.log(`password matched`);
          //if email and password are matched then..
          res.json({ success: true, authToken: authToken });
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
