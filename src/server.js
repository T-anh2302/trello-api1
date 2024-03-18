// const express = require('express')
import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('<h1>Hello World Nodejs Trungquandev</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Hello TrungQuanDev, I'am running sever at http://${hostname}:${port}/`)
})