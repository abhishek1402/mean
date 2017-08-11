var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url ='mongodb://localhost:27017/test'  

router.get('/tasks',function(req,res,next){
    var resultArray=[];
  mongo.connect(url,function(err,db){
      assert.equal(null,err);
      var cursor = db.collection('books').find();
      cursor.forEach(function(doc,err){
          resultArray.push(doc);
          
      },function()
      {
          db.close();
      res.send(resultArray);   });

  })
});


module.exports = router;