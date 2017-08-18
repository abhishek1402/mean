module.exports = function(app){
    console.log("dkkd")
    var login   = require ('./api/login');
    var newvote  = require ('./api/newVote');
    app.get('/login',login.authenticate);
    app.post('/newVote',newvote.create,function(){
        console.log("req");
    });
}   