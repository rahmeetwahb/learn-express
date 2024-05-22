const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

//routes url utama kita method get
app.use(bodyParser.json())

app.get('/mahasiswa', (req, res) => {
  response(200, "this is data", "SIAP", res)
})

app.post('/mahasiswa', (req, res) => {
 response(200, "this is post", "posting", res)
})

app.put('/mahasiswa', (req, res) => {
 response(200, "this is update", "update", res)
})

app.delete('/mahasiswa', (req, res) => {
 response(200, "this is delete", "delete data", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})