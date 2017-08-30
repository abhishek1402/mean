var contactModel = require('../model/contactModel');

class addContact {
    static saveContact(req,res){
       contactModel.find({username:req.body.user},
        {$push:{"contactlist":{name:req.contact.name,number:req.contact.number,username:req.contact.username}}},
        function(err,data){
            res.send(data[0].contactslist)
        })
    }
}