import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'

const app = express()

app.use(express.static(path.join(__dirname, './server/')));

app.get('/*', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, './views/index.html')
})

// Opens a socket and listens for connections only if there is no parent module running the script.
if (!module.parent) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app