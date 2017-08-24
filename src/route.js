module.exports = function(app){
    console.log("dkkd")
    var login   = require ('./api/login');
    var newvote  = require ('./api/newVote');
    var contact = require('./api/contact')
    app.post('/login',login.authenticate);

    app.post('/contact',contact.findAll);
}   