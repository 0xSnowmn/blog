const router = require('express').Router()

//this list for example
let ourposts = {
    1:{
        title:"Hello World",
        content: "Hello World but in content tabel",
        tags:"Hello,World,Bro"
    },
    2:{
        title:"Hello World 2",
        content: "Hello World but in content tabel 2",
        tags:"Hello,World,Bro 2"
    }
}


// dump posts content from database
router.get('/:id',(req,res) => {
    let Id = req.params.id
    res.json(ourposts[Id])
})


module.exports = router
