const express = require('express')

module.exports = function(server) {

  //API Routes
  const router = express.Router()
    server.use('/api', router)
  
    //TODO Routes
   const todoRoutes = require('../api/todo/todoService')
server.use('/api/todos', todoRoutes)
}