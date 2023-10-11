const mongoose = require('mongoose');

const totolist = new mongoose.Schema({
    todo: {
        type: String,
        required:true
    }
})

module.exports = new mongoose.model("todo", totolist);