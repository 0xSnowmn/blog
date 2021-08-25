const router = require('express').Router()
const bodyParser = require('body-parser')

const exPosts = {
    "1":{title:"hello world"},
    "2":{title:"Hi man"}
}

router.get('/search/:searchType/:id',(req,res) => {
    if(req.params.searchType == "posts"){
        res.json(exPosts[req.params.id])
    }
})

router.put('/add/:addType/:id',(req,res) => {
    res.send(`Added : ${req.params.id} to ${rq.params.addType}`)
})

router.delete('/delete/:deleteType/:id',(req,res) => {
    res.json({"status":true})
})



module.exports = router
