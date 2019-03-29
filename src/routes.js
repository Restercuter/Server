const express = require('express')
const router = express.Router()
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const chatroomcontroller = require('./controllers/chatroomcontroller')

router.get('/chatroom', chatroomcontroller.getChats)
router.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)

router.post('/login',
  AuthenticationController.login)

router.post('/chatroom',
  chatroomcontroller.savechats)

module.exports = router
