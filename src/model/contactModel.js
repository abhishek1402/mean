var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = mongoose.Schema({
   username:{type:String,unique:true,required:true},
   contactslist:[
       {name:{type:String,required:true},
       number:{type:String,required:true},
    }

   ]
},{collection:'contact'})  
 

module.exports = mongoose.model('contact',contactSchema);
