const router = require('express').Router(),
    Joi = require('joi')
    sc = require('./paramschema.js')

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

    const { value , error } = sc.valid(req.query)
    console.log(error1)
    if(error){
        res.json({"ERROR":error})
        return 
    }
    console.log(value)
    console.log(req.query)
    res.json(ourposts[req.params.id])
})

module.exports = router
