var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var person = require('./routes/person');  //don't need .js at end of file name, Node expects it
var mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/person', person);
app.use('/', index);


/** ------- MONGOOSE CONNECTION -------- **/
var databaseUrl = 'mongodb://localhost:27017/antares';   //localhost or url/name of db
mongoose.connect(databaseUrl);  //creates a CONNECTION

// Using .on functionality to console log on successful connection & log errors
mongoose.connection.on('connected', function(){
  console.log('mongoose connected to: ', databaseUrl);
});
mongoose.connection.on('error', function(err){
  console.log('mongoose connection error: ', err);
});




/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
