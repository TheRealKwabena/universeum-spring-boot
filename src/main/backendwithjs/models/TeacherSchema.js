var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var teacherSchema = new Schema({
    faculty: {
        type: String
    },
    email: {
        type: String
    },
    fullName : {
        type: String
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: "Course"
    }]
}) 

module.exports = mongoose.model("Teacher", teacherSchema);