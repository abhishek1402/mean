var loginModel = require ('.././model/loginModel.js');

class login{
    static authenticate(req,res,next){
        loginModel.find({}).sort({username:1}).exec(function(err,user){
            console.log(user);
            res.json("logged in");
            next();
        })
    }
}
// sorted in assending order 
module.exports = login;