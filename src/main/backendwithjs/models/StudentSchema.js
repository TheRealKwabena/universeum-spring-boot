var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courses : [{
        type: Schema.Types.ObjectId,
        ref: "Course"
    }]
})


module.exports = mongoose.model("Student", StudentSchema);