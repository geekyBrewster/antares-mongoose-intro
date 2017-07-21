var express = require('express');
var router = express.Router();
var Person = require('../models/person.schema.js');
//This Person has methods attached to it which we use below (.find, .save, etc.)

router.post('/', function(req,res){
  console.log('log the data:', req.body);

  //Use Person model to save data into DB
  var addPerson = new Person(req.body);
  // console.log('var addPerson:', addPerson);
  addPerson.save(function(err, data){
    console.log('saved data: ', data);
    //data saved object includes:_v, name, location, _id
    if(err){
      console.log("save error: ", err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
}); // end post

router.get('/', function(req, res){
  Person.find({}, function(err, data){
    if(err){
      console.log('find error: ', err);
      res.sendStatus(500);
    } else {
      //data sent back is an array of Person objects
      res.send(data);   //replaces res.send(rows.data)
    }
  });
}); // end getPeople

router.put('/:id', function(req, res){
  console.log('New location is: ', req.body);
  // There are lots of find methods avaialable through Mongoose
  Person.findByIdAndUpdate(
    {_id: req.params.id},     // where to find, using ID
    {$set: { location: req.body.location }},   // what to change
    function(err, data){
      if(err){
        console.log('update error: ', err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});  // end of put

router.delete('/:id', function(req, res){
  console.log('Delete person w/ id: ', req.body);
  // There are lots of find methods avaialable through Mongoose
  Person.findByIdAndRemove(
    {_id: req.params.id},     // where to find, using ID
    function(err, data){
      if(err){
        console.log('deletion error: ', err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});  // end of delete

module.exports = router;
