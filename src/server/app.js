import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'

const app = express()

const dist = path.join(__dirname, '../../dist')
app.use(express.static(dist));

app.get('/*', (req, res) => {
  res.status(200)
  res.sendFile(path.join(dist, 'index.html'))
})

// Opens a socket and listens for connections only if there is no parent module running the script.
if (!module.parent) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app
