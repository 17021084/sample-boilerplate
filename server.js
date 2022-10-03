const express = require('express')
const bodyparser = require('body-parser')
const multiparty = require('connect-multiparty')
const { error } = require('console')

const path = require('path')

const fs = require('fs')

const PORT = process.env.PORT || 4000
const app = express()

const MuiltiPartyMiddleware = multiparty({ uploadDir: './images' })
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use('/uploads', express.static('uploads'))
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hihi'
  })
})

app.post('/upload', MuiltiPartyMiddleware, (req, res) => {
  var TempFile = req.files.upload
  var TempPathfile = TempFile.path

  const targetPathUrl = path.join(__dirname, './uploads/' + TempFile.name)

  if (
    path.extname(TempFile.originalFilename).toLowerCase() === '.png' ||
    '.jpg'
  ) {
    fs.rename(TempPathfile, targetPathUrl, err => {
      res.status(200).json({
        uploaded: true,
        url: `http://localhost:4000/uploads/${TempFile.originalFilename}`
      })

      if (err) return console.log(err)
    })
  }

  console.log(req.files)
})

app.listen(PORT, console.log(`Server Started at PORT :${PORT}`))
