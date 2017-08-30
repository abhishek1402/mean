var chatModel = require('../model/chatModel')
class Chat {
    static chatEntry(message){
        var thisDate = Date.now()
        chatModel.update({'reciever.username':message.reciver.username,'sender.username':message.sender},
        {$push:{"messageSent":{msg:message.msg,date:thisDate}}})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}
module.exports = Chat;