const { Schema, model } = require('mongoose')


const UsersSchema = new Schema({
    name:{  
        type: String,
        min: 2,
        max: 20,
        required: true
    },
    username:{
        type: String,
        min: 2,
        max: 20,
        required: true,
        unique: true,
    },
    bio:{
        type: String,
        min: 1,
        max: 300,
    },
    created: { type: Date, default: Date.now },
});

const PostsSchema = new Schema ({
    title:{
        type: String,
        min:2,
        max:100,
        required: true
    },
    content:{
        type: String,
        min:2,
        max:600,
        required: true
    },
    tags:{
        type: Array
    },
    comments: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
       }]
})

const commentSchema = new mongoose.Schema({
     text: {
          type: String,
          trim: true,
          required: true
       },
    date: {
          type: Date,
          default: Date.now
       },
    // each comment can only relates to one blog, so it's not in array
    post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
       }
})



module.exports.UsersSchema = model('Users',UsersSchema)
module.exports.commentSchema = model('Comments',commentSchema)
module.exports.PostsSchema = model('Posts',PostsSchema)
