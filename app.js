'use strict'

const express = require('express')

const app = express()

app.get('/', (req, res) => {

  let headers = JSON.stringify(req.headers)

  res.send(JSON.parse(headers))

})

app.listen(3000, () => {

  console.log('listening to port 3000')
})
