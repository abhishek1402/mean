loginModel = require('../model/loginModel');
var contactModel = require('../model/contactModel');
class signup{
    static save(req,res,next)
    {   
        console.log("sfd")
        var entry = new loginModel({
            username:req.body.email,
            password:req.body.password,
            name:req.body.name,
            number:req.body.number
        })
        entry.save(function(err,data){
            if(err){
                console.log(err)
               res.status(400).send(err)}
            else
                {
                    var entry = new contactModel({
                        username:req.body.email,
                    })
                    entry.save(function(err,data){
                        if(err)
                            res.status(500).send(err)
                        else
                         res.status(200).send(data); 
                    })
                   
                }   
        });
    }
}

module.exports = signup;