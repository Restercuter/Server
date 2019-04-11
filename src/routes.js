const express = require('express')
const router = express.Router()
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const chatroomcontroller = require('./controllers/chatroomcontroller')
const papersController = require('./controllers/papersController')

router.get('/papers', papersController.getPapers)
router.get('/chatroom', chatroomcontroller.getChats)
router.delete('/chatroom', chatroomcontroller.deleteChat)
router.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)

router.post('/login',
  AuthenticationController.login)

router.post('/chatroom',
  chatroomcontroller.savechats)
router.post('/papers',
  papersController.savepapers)
router.delete('/papers',papersController.deletepaper)
  

// router.get('/paper',papersController.getPapers)

module.exports = router
