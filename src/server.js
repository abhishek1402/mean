var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');  
var jwt    = require('jsonwebtoken');
var app = express();
var index = require('./route/index');
var tasks = require('./route/tasks');
var login = require('./route/login');
var mongoose = require('mongoose');
var router = express.Router();


var db ='mongodb://localhost:27017/test'  
mongoose.connect(db,function(err){
  if(err){
    console.log("err");
  }
  else{
    console.log("coonected to db");
  }
})

var goal = require('./route/goal');

var secure=express.Router();
var port = process.env.PORT || 3000;
var secret = 'ss';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'app')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/index',index);
app.use('/api',tasks);
app.use('/login',login,function(req,res){
 
  var token = jwt.sign(req.body.Userid, secret);
  console.log(token);
  res.json(token);
});
app.use('/token/*',secure);
secure.use(function(req,res,next){
  console.log("token");
 console.log(req.headers);
  token=req.headers.token;
 console.log(token);
 jwt.verify(token, secret, function(err, decoded) {  
  
      if (err) {
          console.log("err");
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
         console.log("err1");
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        console.log(decoded);
        req.body.userName= decoded;
        next();
      }
    });
  // err
  // decoded undefined


})
app.use('/token/goal',goal);

module.exports = app;
app.listen(port);
console.log("server started at" + port);
