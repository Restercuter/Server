const User = require('../../models').Users
// const jwt = require('jsonwebtoken')
// const config = require('../config/config')
// function jwtSignUser(user) {
//   const ONE_WEEK = 60 * 60 * 24 * 7
//   return jwt.sign(user, config.authentication.jwtSecret,{
//     expiresIn: ONE_WEEK
//   })
// }

module.exports = {
  register (req, res) {
    const data =
    {
      email: req.body.email,
      password: req.body.password
    }
    try {
      User.create(data).then((newUser) => {
        console.log('exececuting .then', newUser)
        return res.status(200).send({
          success: true,
          message: 'User created'
        })
      })
    } catch (err) {
      console.log('error', err)
      res.status(400).send({
        error: 'this email is in use'
      })
    }
  },
  login (req, res) {
    console.log('login reached', JSON.stringify(req.body))
    try {
      const { email, password } = req.body
      const user = User.findOne({
        where: {
          email: email
        }
      }).then((user)=>{
        if (!user) {
          return res.status(403).send({
            error: 'User not found'
          })
        }
        else {
          console.log('user pass', JSON.stringify(user))
          if (password !== user.password) {
            return res.status(403).send({
              error: 'The password is incorrect'
            })
          }
          else {
            res.send({
              user: user
            })
          }
        }
      })

    } catch (err) {
      res.status(500).send({
        error: 'invalid login information'
      })
    }
  }
}
