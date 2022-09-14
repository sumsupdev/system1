const mongoose = require('mongoose');

const User = new mongoose.Schema({
    f_name : {type: String, required: true},
    l_name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    pass : {type: String, required: true},
},
{collation: 'user-data'}

);

const model =mongoose.model('UserData', User)

module.exports = model