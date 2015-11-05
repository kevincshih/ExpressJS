
var express = require('express')
var app = express()
var crypto = require('crypto')

app.put('/message/:ID', function(req,res){
var id = req.params.ID
//console.log(id.toString())
//console.log(new Date().toDateString())
res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'))
})

app.listen(process.argv[2])
