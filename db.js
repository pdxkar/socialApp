/**
 * 
 */

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social2', function (){
	console.log('mongodb connected')
})
module.exports = mongoose