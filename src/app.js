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
const nodeMailer = require('nodemailer')
const app = express()

// BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => res.status(200).send({
  status: 'success'
}))

app.post('/email', (req, res) => {
  console.log('i am reached', JSON.stringify(req.body))
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'hisiaapp@gmail.com',
      pass: '=d3n!t0K"M"'
    }
  })
  let mailOptions = {
    from: 'hisiaapp@gmail.com', // sender address
    to: req.body.email, // list of receivers
    subject: 'EXAM PAPER', // Subject line
    text: req.body.image, // plain text body
    html: '<p>Greetings</p><br><p>Find attached an image of the exam paper</p><br>',
    attachments: [
      {
        filename: 'image.png',
        content: req.body.image
      }
    ] // html body
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
    res.send({
      status: 'success',
      message: 'Your emal has been sent'
    })
  })
})

// Login route
app.use('/auth', require('./routes'))

const server = app.listen(process.env.PORT || 5000, function () {
  console.log(`server started on port 5000`)
})

// const io = require('socket.io')(server)

// io.on('connection', function (socket) {
//   console.log(socket.id)
//   socket.on('SEND_MESSAGE', function (data) {
//     io.emit('MESSAGE', data)
//   })
// })