const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const gurucontroller = require('../router/controllers/guru')




  router.get('/allguru', gurucontroller.index)

  router.get('/guru/:id', gurucontroller.show)

    router.post('/guru', gurucontroller.store)
    
    router.put('/guru/:id', gurucontroller.update)
  
    router.delete('/guru/:id', gurucontroller.delete)
    module.exports = router