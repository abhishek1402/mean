var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enuma = ['dog'];
var custom = {
    validator:function(val)
    {return (val.length>5 && val.length<50)}, message: '{VALUE} is not a valid phone number!'
}
var newVoteSchema = mongoose.Schema({
    memerName:{type:String,required:true,validate:custom},
    project:String,
    workYesterday:String,
    workToday:String,
    impediment:{type:String,required:true,enum:enuma},
    discount:{type:String,min:5,required:true},
    createdOn:{type:Date,default:Date.now}
})  
 

module.exports = mongoose.model('newVote',newVoteSchema);
