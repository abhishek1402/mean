var loginModel = require ('.././model/loginModel.js');

class login{
    static authenticate(req,res,next){
        loginModel.findOne({username:req.body.email,password:req.body.password},function(err,data){
            if(err)
                {console.log(err)}
            else{
                if(data == null){
                    res.status(404).send(data);
                }
                else {
                    res.status(200).send(data)
                }
            }
        }
    )
}
}
// sorted in assending order 
module.exports = login;