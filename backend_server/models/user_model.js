const mongoose = require('mongoose');

const User = new mongoose.Schema({
    f_name : {type: String, required: true},
    l_name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    pass : {type: String, required: true},
},
{collation: { locale: 'en_US', strength: 1 }}

);

const model =mongoose.model('UserData', User)

module.exports = model