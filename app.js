'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {

  console.log(req.language)

  console.log(req.acceptsLanguage)

  res.json({
    'Browser': req.headers['user-agent'],
    'IP': req.hostname,
    'Langauge': req.acceptsLanguage
  })

})

app.listen(3000, () => {

  console.log('listening to port 3000')
})
