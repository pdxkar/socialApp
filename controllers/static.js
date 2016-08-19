var express = require('express')
//var router = require('express').Router()
var router = express.Router()

router.get('/', function (req, res){
	res.sendFile('C:/Users/Richard/MEAN_tutorial/ChapterFour/layouts/posts.html')
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router
