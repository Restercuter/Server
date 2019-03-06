const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const { sequelize } = require('./models')
const config = require('./config/config')
app.use(bodyParser.json())
app.use(cors())

require('./routes')

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 5000)
    console.log(`server started on port ${config.port}`)
  })
