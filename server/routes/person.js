var express = require('express');
var router = express.Router();

router.post('/', function(req,res){
  console.log('log the data:', req.body);
  res.sendStatus(200);
});




module.exports = router;
