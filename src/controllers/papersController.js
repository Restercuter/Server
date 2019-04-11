const papers = require('../../models').papers
module.exports = {
  getPapers (req, res) {
    console.log('Gets reached')
    papers.findAll().then(Papers => {
      if (!Papers) {
        return res.status(403).send({
          error: 'papers not found'
        })
      } else {
        var decodedImages = []
        console.log(typeof (Papers.data))
        //console.log(Papers.data.length)
        // for (let i = 0; i < papers.data.length; i++) {
        //   let data = papers.data[i].image.data
        //   // eslint-disable-next-line node/no-deprecated-api
        //   let buff = new Buffer(data, 'base64')
        //   console.log('buff is', buff)
        //   papers.data[i].image.data = buff
        // }
        return res.status(200).send({

          data: Papers
        })
      }
    })
  },
  savepapers (req, res) {
    // console.log('req data:',req.body)
    const data =
        {
          paperName: req.body.papername,
          image: req.body.image
        }
    try {
      papers.create(data).then((newPaper) => {
        return res.status(200).send({
          success: true,
          message: 'paper sent',
          paper: newPaper
        })
      })
    } catch (err) {
      res.status(400).send({
        error: 'paper was not saved'
      })
    }
  },
  deletepaper (req, res) {
    console.log('delete reached')
    papers.destroy({
      where: {},
      truncate: true
    }).then(() => {
      return res.status(200).send({
        success: true,
        message: 'record deleted'
      })
    })
  }
}
