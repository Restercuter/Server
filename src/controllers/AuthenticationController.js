const express = require('express')
const app = express()

module.exports = {
  register () {
    app.post('/register', (req, res) => {
      res.send({
        message: 'Hello !'
      })
})
  }
}
