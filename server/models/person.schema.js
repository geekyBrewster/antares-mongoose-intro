var mongoose = require('mongoose');
var Schema = mongoose.Schema;   //using this like a constructor

//Define person schema
var personSchema = new Schema({
  name: {type: String, required: true, unique: true},     //defining the data that is 'name'
  location: String,
  dateOfBirth: Date,
  internetPoints: {type: Number, default: 1000}
});

//Create the model
var Person = mongoose.model('Person', personSchema);
  // Define the Person constructor to be used elsewhere

module.exports = Person;
