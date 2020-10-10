/** packages */

const mongoose = require("mongoose");

/** Schema creation */
const facultySchema = new mongoose.Schema({
    code : {
        type : "String",
        required: true
    },
    name:{
        type : "String",
        required: true
    },
    nameDean:{
        type : "String",
        required: true
    }
});

/** Schema exportation */
module.exports = facultySchema;