var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var courseSchema = new Schema({
    courseName: {
        type: String
    },
    courseLanguage: {
        type: String
    },
    courseCode: {
        type: String 
    }
})

module.exports = mongoose.model("Course", courseSchema);
