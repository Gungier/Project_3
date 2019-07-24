const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const Currency = require("../models/Currency")

users.use(cors())
process.env.SECRET_KEY = "secret"

users.get("/currency/:id", (req, res) => {

    // Currency.findAll({}).then(function(results){
    //     res.json(results);
    // })
    // Currency.findOne({
    //     where: {
    //       id: req.params.id
    //     }
    //   })
    //   .then(function(result) {
       // res.json(result);
       res.send("test works");
     // });
});

//users/profile/:id
users.get("/profile/:id", (req, res) => {
    User.findOne({
        // include: [{
        //     model: Currency,
        //     include: [{
        //         model: currency_name
        //     }]
        // }],
        where: {
          id: req.params.id
        },
      })
      .then(function(result) {
        res.json(result);
//        //res.send("test works");
      });
 });
    

users.post("/register", (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created_at: today
    }
    User.findOne({
        where: {
            email:req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json(
                    {
                    status: user.email + " registered",
                    user_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    user_id: user.id
                   })
                })
                .catch(err => {
                    res.send("error: " + err)
                })
            })
        } else {
            res.json({ error: "User already exists"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
});

users.post("/login", (req, res) => {

    User.findOne({
        where: {
            email: req.body.email,
            //password: req.body.password
            // added password line 1930 hrs 8/2/19
        }
    })
    .then(user => {
        if (user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.json({
                    "user_id": user.id,
                    "user_name": user.first_name,
                    "last_name": user.last_name,
                    "email": user.email
                })
            }
        } else {
            res.status(400).json({error: "User does not exist"})
        }
    })
    .catch(err => {
        res.status(400).json({ error: err})
    });
});
  

module.exports = users;