var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var morgan          = require('morgan');  
var app             = express();
var router          = express.Router(); 
var port            = process.env.PORT || 9000;
var mongoose        = require('mongoose');
var cors            = require('cors');
var cluster         = require('cluster');
var server          = require('http').Server(app);



require('./socket.js')(server);




app.use(cors())
const numCPUs = require('os').cpus().length;
console.log(numCPUs);
app.use(express.static('public'));
var db ='mongodb://admin2:admin1234@ds235169.mlab.com:35169/chat' 
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
    res.sendfile('./views/index.html');
})

module.exports = app;
require('./route.js')(app);
server.listen(port, function(){
  console.log('listening on *'+port);
});

