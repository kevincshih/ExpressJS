var express = require('express')
var app = express()
var path = require('path')
var stylus = require('stylus')

app.use(stylus.middleware(process.argv[3]+'*.styl'))
app.use(express.static(process.argv[3]))


app.listen(process.argv[2])
