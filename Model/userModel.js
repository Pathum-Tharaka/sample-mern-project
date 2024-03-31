const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,//data type
        required: true,//variable
    },
});

module.exports = mongoose.model(
"userModel", //file name
userSchema //function name
)