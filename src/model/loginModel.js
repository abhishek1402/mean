var mongoose = require('mongoose');


var loginSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{collection:'profile'})  

var Login = module.exports = mongoose.model('profile',loginSchema);
// mongoose.model takes first argument as collection name but it pluralize it so the profile becomes profiles 
// so collection is used 