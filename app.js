const express = require('express');
//Create express app
const app = express();
const mongoose = require("mongoose");
const router = require("./controller/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect to Mongo DB
mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',(error) => {
	if(!error) console.log('MongoDB conntected!')
	else console.log(error)});

//Initializing router
app.use('/', router);

//app serving on port 8081
app.listen('8081', ()=>{console.log('app listening on port 8081')});