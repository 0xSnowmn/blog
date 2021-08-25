const router = require('express').Router()
const bodyParser = require('body-parser')
const UsersSchema = require('../schema/mongo.js').UsersSchema
const exPosts = {
    "1":{title:"hello world"},
    "2":{title:"Hi man"}
}

//router.use(bodyParser.json())
router.get('/search/:searchType/:id',(req,res) => {
    if(req.params.searchType == "posts"){
        res.json(exPosts[req.params.id])
    }
})

router.put('/create/:addType/:id',async (req,res) => {
    const {addType , id } = req.params
    if(addType === "account"){
        const { name , username , bio } = req.body
        const Create = new UsersSchema()
        Create.name = name
        Create.username = username
        Create.bio = bio
        await Create.save()
    } else if (addType === "post") {
        const { title , content , tags } = req.body
        const Create = new PostsSchema()
        Create.title = title
        Create.content = content
        Create.tags = tags
    } else if (addType === "comment") {
        const { content , postId } = req.body
        const Create = new CommentsSchema()
        Create.content = content
        Create.User = id
        await Create.save()
    } else {
        res.json({error:"type not found"})
    }
    res.send(`Created : ${req.params.id} to ${req.params.addType}`)
})


router.delete('/delete/:deleteType/:id',(req,res) => {
    res.json({"status":true})
})


module.exports = router
