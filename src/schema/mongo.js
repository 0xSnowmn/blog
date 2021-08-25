const { Schema, model } = require('mongoose')


const UsersSchema = new Schema({
    name:{  
        type: String,
        min: 2,
        max: 20
        required: true
    },
    userename:{
        type: String,
        min: 2,
        max: 20,
        required: true,
        unique: true,
    },
    bio:{
        type: String,
        min: 2,
        max: 20,
        required: true,
        unique: true
    },
    created: { type: Date, default: Date.now },
});

module.exports.UsersSchema = model('Users',UsersSchema)
