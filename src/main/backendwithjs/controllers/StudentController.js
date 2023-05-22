var express = require("express");
var bcrypt = require("bcryptjs")

var router = express.Router();


const Student = require("../models/StudentSchema");


///Create a student

router.post("api/students", async(req, res) =>{
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || password) {
        res.status(400).send("Provide all fields before registering");
    }
    const student = await Student.findOne({email});
    if(student) {
        res.status(400).send("Student with this email already exists");
    };
    const encryptedPassword = await bcrypt.hash(password, 10);
    const new_student = await Student.create({
        firstName,
        lastName,
        email,
        password: encryptedPassword

    })
    if(new_student) {
        console.log(new_student);
        res.status(201).json({message: "Student created successfully"});
    }
    res.status(400).send("Student could not be created");
    

}) 

//Get all students

router.get("/api/students", async (req, res) => {
    const students = await Student.find({});
    res.status(200).json(students);
})

//Get student by email

router.get("/api/students", async(req, res) => {
    const email = req.params.email;
    const student = await Student.findOne(email);
    if(student) {
        res.status(200).json(student);
    }
    else {
        res.status(404).json({message: "Student not found"});
    }
})


// Delete all students 

module.exports = router;