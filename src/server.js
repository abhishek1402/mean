var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var morgan          = require('morgan');  
var app             = express();
var router          = express.Router(); 
var port            = process.env.PORT || 3000;
var mongoose        = require('mongoose');
var cors            = require('cors');
var cluster         = require('cluster');

app.use(cors())
const numCPUs = require('os').cpus().length;
console.log(numCPUs);
app.use(express.static('public'));
var db ='mongodb://demo:demo@ec2-52-207-64-40.compute-1.amazonaws.com:27017/dummyDB' 
mongoose.connect(db,function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("coonected to db");
  }
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    console.log("url");
    res.json('urin');
})

module.exports = app;
require('./route.js')(app);
app.listen(port);
