const { Schema, model } = require('mongoose')


const UsersSchema = new Schema({
    name:{  
        type: String,
        min: 2,
        max: 20,
     //   required: true
    },
    username:{
        type: String,
        min: 2,
        max: 20,
        //required: true,
        unique: true,
    },
    bio:{
        type: String,
        min: 1,
        max: 300,
    },
    created: { type: Date, default: Date.now },
});

module.exports = model('Users',UsersSchema)
