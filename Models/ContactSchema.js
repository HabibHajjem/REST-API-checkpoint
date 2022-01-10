const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    age:Number
});

module.exports = new mongoose.model("contact",contactSchema);