const ChatRoom = require('../../models').ChatRoom

module.exports = {
  getChats (req, res) {
    console.log('Gets reached')
    ChatRoom.findAll().then(Chats => {
      if (!Chats) {
        return res.status(403).send({
          error: 'Chats not found'
        })
      } else {
        console.log('Chats is', JSON.stringify(Chats))
        return res.status(200).send({
          data: Chats
        })
      }
    })
  },
  savechats (req, res) {
    const data =
      {
        UserName: req.body.username,
        Messages: req.body.message
      }
    try {
      ChatRoom.create(data).then((newChat) => {
        return res.status(200).send({
          success: true,
          message: 'Chat sent'
        })
      })
    } catch (err) {
      console.log('error', err)
      res.status(400).send({
        error: 'chat was not saved'
      })
    }
  }
}
