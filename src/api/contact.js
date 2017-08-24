var contactModel = require('../model/contactModel');

class contact {
    static findAll(req,res,next){
        contactModel.find({username:'a@a.com'},function(err,data){
            res.send(data[0].contactslist)
        })
    }
}

module.exports = contact;