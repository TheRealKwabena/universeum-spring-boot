 var express = require("express");

var router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const User = require("../models/UserSchema");
//create a user

router.post("/api/user/register", async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400).json({message: "Please fill in all fields"});
    }
    const user = await User.findOne({email});
    if(user) {
        res.status(400).send("User already exists");
    }
    const newPassword = await bcrypt.hash(password, 10);
    console.log(`hashed password: ${newPassword}`)

   
   const new_user =  await User.create({
    name, 
    email,
    password: newPassword
   });
   
   if(new_user) {
    console.log(new_user)
    res.status(201).json({
        id: new_user._id,
        password: new_user.password
    })
   } else {
    res.status(400).send("User could not be created")
   }
})

router.post("/api/user/login", async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).json({message: "Please fill in all fields"});

    }
    const user = await User.findOne({email});

    if(user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user : {
                name: user.name,
                email: user.email,
                id: user._id
            }

        },
        process.env.SECRET_KEY,
        {expiresIn: "10m"}
      
        )
        var new_user = await User.findByIdAndUpdate(user._id, {accessToken: accessToken});
      
        res.status(200).json(new_user);

        

    } else {
        res.status(401).send("Email or password is not correct");
    }
})

module.exports = router;