const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    blog:{
        type:String,
        required: true
    },
    images:{
        type: String,
        rquired: true
    }

});

module.exports = new mongoose.model("Blog", blogschema);