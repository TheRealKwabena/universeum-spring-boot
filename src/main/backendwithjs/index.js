require('dotenv').config();


var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var morgan = require("morgan");
var path = require("path");
var history = require("connect-history-api-fallback");



//Exporting the controllers

const UserController = require("./controllers/UserController");
const StudentController = require("./controllers/StudentController");

const app = express();
var mongoURI = process.env.DATABASE_URL || "mongodb+srv://kwabenaa:Twumasierica1234.@cluster0.jdvtaxw.mongodb.net/";


// Connect to MongoDB
mongoose.connect(mongoURI);
const database = mongoose.connection
database.on('error', (error) => {
    
    console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
    console.error(err.stack);
    process.exit(1);
})

database.once('connected', () => {
    console.log(`Connected to MongoDB with URI: ${mongoURI}`)
})

app.use(express.json());



app.listen(3000, () => {
    console.log(`Server running at port ${3000}`);
})

// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan("dev"));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options("*", cors());
app.use(cors());

// Import routes
app.get("/api", function (req, res) {
    res.json({ message: "Welcome to your DIT342 backend ExpressJS project!" });
  });
  

app.route("/api/user/register").all(UserController);
app.route("/api/user/login").all(UserController);
app.route("/api/students").all(StudentController);
module.exports = app;