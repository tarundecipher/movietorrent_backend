var express = require('express');
var mongoose  = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var signUp = require('./routeCallbacks/signUp');
var login = require('./routeCallbacks/login');
var auth = require('./routeCallbacks/auth');
var logout = require('./routeCallbacks/logout');
const comments = require('./routeCallbacks/comment');
const getComments = require('./routeCallbacks/getcomments');
    

var app = express();

//adding middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  });
  app.use(cors(
    {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  ));

//connecting to database

mongoose.connect("mongodb+srv://tarun_decipher:admin@cluster0.hm87f.mongodb.net/UserName?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }).then(()=>{console.log('database connected')}).catch(()=>{console.log('database not connected')});




//routes
app.get('/auth',auth);
app.post("/signUp",signUp);
app.post("/login",login);
app.get('/logout',logout);
app.post('/comments',comments);
app.get('/comments/:id',getComments);




//server 
app.listen(5000,process.env.IP,function(){
    console.log('SERVER STARTED');
})