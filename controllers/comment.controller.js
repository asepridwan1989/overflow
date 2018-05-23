const jwt = require('jsonwebtoken')
const Article = require('../models/article.model')
const mongoose = require('mongoose')

module.exports = {
  addComment: (req, res)=>{
    console.log(req.body)
      // const token = req.headers.token
      // let verified = jwt.decode(token,process.env.TOKENKEY)
      // const userId = verified.id
      // const title = req.body.title
      // const content = req.body.content
      // let newArticle = new Article({
      //     userId,
      //     title,
      //     content
      // })
      // newArticle.save()
      //     .then(result=>{
      //         res.status(201).json({
      //             message: 'successfuly add new article',
      //             data: result
      //         })
      //     })
      //     .catch(error=>{
      //         res.status(400).json({
      //             message: 'failed to add new task'
      //         })
      //     })
  }
}
