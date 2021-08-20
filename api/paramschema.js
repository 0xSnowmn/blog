const Joi = require('joi')

const getPosts = Joi.object({ 
        title: Joi.string().min(1).max(100), 
      })


