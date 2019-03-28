const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')) }
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid Admin No'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must fullfil the following conditions  1. It must contain atleast 8 characters and at most 32 characters'

          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'

          })
          break
      }
    } else {
      next()
    }
  }
}
