const router = require('express').Router()
const bodyParser = require('body-parser')
const UsersSchema = require('../schema/mongo.js')
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
    const { name , username , bio } = req.body
    if(addType === "account"){
        const Create = new UsersSchema()
        console.log(req.body)
        Create.name = name
        Create.username = username
        Create.bio = bio
        await Create.save()
        //Create.done()
    }
    res.send(`Created : ${req.params.id} to ${req.params.addType}`)
})

router.delete('/delete/:deleteType/:id',(req,res) => {
    res.json({"status":true})
})



module.exports = router
