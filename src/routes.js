const AuthenticationController = require('./controllers/AuthenticationController')
module.export = (app) => {
  app.post('/register',
    AuthenticationController.register)
}
