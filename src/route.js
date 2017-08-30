module.exports = function(app){
    console.log("dkkd")
    var login   = require ('./api/login');
    var newvote  = require ('./api/newVote');
    var contact = require('./api/contact')
    var contactDetails = require('./api/contactDetails')
    var signup = require('./api/signup');
    app.post('/login',login.authenticate);
    app.post('/contactdetail',contactDetails.details)
    app.post('/contact',contact.findAll);
    app.get('/contact',contact.findAllUsers);
    app.post('/contact/addContact',contact.saveContact)
    app.post('/signup',signup.save)
}   