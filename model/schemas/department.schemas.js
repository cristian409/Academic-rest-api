/** packages */

const mongoose = require("mongoose");

/** Schema creation */
const departmentSchema = new mongoose.Schema({
    code : {
        type : "String",
        required: true
    },
    name:{
        type : "String",
        required: true
    },
    director:{
        type : "String",
        required: true
    },
    faculty_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        required: true
    },
});

/** Schema exportation */
module.exports = departmentSchema;