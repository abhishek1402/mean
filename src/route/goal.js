var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var goalModel = require('../models/goalModel.js')

var url ='mongodb://localhost:27017/test'  

router.get('/',function(req,res,next){
  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    db.collection('Goal').find({"userName":req.decoded}).toArray(function(err,result){
      console.log(result);
      //console.log();
      res.json(result);
    })
    

  })
});



router.post('/',function(req,res,next){
 console.log("in goal");

 var goal = {};
  goal.userName=req.body.userName;
  goal.goalName= req.body.taskName;
  goal.description= req.body.description;
 mongo.connect(url,function(err,db){
    assert.equal(null,err);
    db.collection('Goal').insertOne(goal,function(err,result){
        assert.equal(null,err);
        console.log("item Inserted");
        res.json("insertion");

    })
 })
  })


module.exports = router;