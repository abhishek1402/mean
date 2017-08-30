var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = mongoose.Schema({
    sender:{name:{type:String,required:true,unique:false},
            username:{type:String,required:true,unique:false},
            number:{type:String,required:true,unique:false},
         created_on: {type: Date, default: Date.now}}
        ,
    reciever:{name:{type:String,required:true},
            username:{type:String,required:true},
            number:{type:String,required:true}}
        ,
    messageSent:[
        {msg:{type:String},
        date: { type: Date}
       
        }],
    messageRecieved:[
        {msg:{type:String},
        date: { type: Date }
        }]
},{collection:'chat'})  
 

module.exports = mongoose.model('chat',chatSchema);
