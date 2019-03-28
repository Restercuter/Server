// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// // const http = require('http')

// const app = express()
// // const { sequelize } = require('./models')
// const config = require('./config/config')
// const server = app.listen(process.env.PORT || 5000, function () {
//   console.log(`server started on port ${config.port}`)
// })

// const routes = {
//   auth: require('./routes')
// }

// app.use(bodyParser.json())
// app.use(cors())
// // const server = http.createServer(app)
// const io = require('socket.io')(server)
// require('./routes')

// // sequelize.sync()
// //   .then(() => {
// //     app.listen(process.env.PORT || 5000)
// //     console.log(`server started on port ${config.port}`)
// //   })
// app.use('/auth', routes.auth)
// io.on('connection', function (socket) {
//   console.log(socket.id)
//   socket.on('SEND_MESSAGE', function (data) {
//     io.emit('MESSAGE', data)
//   })
// })

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => res.status(200).send({
  status: 'success'
}))

// Login route
app.use('/auth', require('./routes'))

const server = app.listen(process.env.PORT || 5000, function () {
  console.log(`server started on port 5000`)
})

const io = require('socket.io')(server)

io.on('connection', function (socket) {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data)
  })
})