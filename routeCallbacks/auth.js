var credential = require('../models/credentials');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { reset } = require('nodemon');
const JWT_SECRET = "sjdjfasoivoiqjwso0892394019@#%@#%^wisjdfla";


module.exports = function auth(req,res){
    
    const token = req.cookies.jwt;
    // console.log(token);
    
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            console.log('error');
            res.send(false);
            
        }
        else{
            // console.log(payload);
            
            res.send({condition:true,payload:payload});
          
        }
    });

   

}

