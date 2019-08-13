const express = require('express')
const bodyParser = require('body-parser')
const server = express()

const port = process.env.PORT || 3000

server.use(bodyParser.json())
server.enable('trust proxy')

server.get('*', (req, res, next) => {
  console.log(`GET ${req.path} from ${req.ip}`)
  if (Object.keys(req.query).length) {
    console.log(`-- query -- ${JSON.stringify(req.query)}`)
  }
  next()
})

server.post('*', (req, res, next) => {
  console.log(`POST ${req.path} from ${req.ip}`)
  if (req.body) {
    console.log(`-- body -- ${JSON.stringify(req.body)}`)
  }
  next()
})

server.all('*', (req, res) => {
  res.sendStatus(200)
})

server.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`)
})