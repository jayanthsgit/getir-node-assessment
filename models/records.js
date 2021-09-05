const mongoose = require('mongoose')

//Create records schema
const recordSchema = mongoose.Schema({
	key: String,
	createdAt: Date,
	counts: [],
	value: String
})
//Export records model
module.exports = mongoose.model('records', recordSchema)
