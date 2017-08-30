var contactModel = require('../model/contactModel');
loginModel = require('../model/loginModel');

class contact {
    static findAll(req,res,next){
      
        contactModel.find({username:req.body.user},function(err,data){
            res.send(data[0].contactslist)
        })
    }
    static findAllUsers(req,res,next){
        loginModel.find(function(err,data){
            res.send(data)
        })
    }
    static saveContact(req,res){
        console.log(req.body);
       contactModel.update({username:req.body.user},
        {$push:{"contactslist":{name:req.body.contact.name,number:req.body.contact.number,username:req.body.contact.username}}},
        function(err,data){
            if(err)
                res.status(400).send(err.message)
            else
                res.status(200).send(data)
           
        })
    }
}

module.exports = contact;