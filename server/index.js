// npm init -y
// npm i express cors
// node index.js

const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/ueditor', cors(corsOptions), function (req, res) {
  console.log(req.body)
  res.json(req.body)
})

http.createServer(app).listen(3000, function () {
  console.log('HTTP Server is running on 3000')
})
