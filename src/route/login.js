var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var jwt    = require('json-web-token');
var app = require('../server');

var url ='mongodb://localhost:27017/test'  

router.get('/',function(req,res,next){
    var resultArray=[];
  mongo.connect(url,function(err,db){
      assert.equal(null,err);
      var cursor = db.collection('login').find();
      cursor.forEach(function(doc,err){
          resultArray.push(doc);
          
      },function()
      {
          db.close();
      res.send(resultArray);   });

  })
});


router.post('/',function(req,res,next){
    var resultArray=[];
    var a=0;
    console.log(req.body);
   var obj=req.body;
   mongo.connect(url,function(err,db){
       console.log(obj);
       console.log("ssd");
      assert.equal(null,err);
      db.collection('login').findOne({"userid":obj.Userid},function(err,user){
          if(err)
          console.log("error");
          else{
          console.log(user);
          if(user!= null)
          { 
               next();
           
              
          }

           
          }      
      })
      
      
 })
});


module.exports = router;