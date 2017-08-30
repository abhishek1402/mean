var mongoose = require('mongoose')
var Shema = mongoose.Schema;

var profileShema = mongoose.Schema({
    username:{type:String,required:true,index: {unique: true, dropDups: true}},
    number:Number,
    name:String,
    password:String,
},{collection:'profile'})  


module.exports = mongoose.model('profile',profileShema);
