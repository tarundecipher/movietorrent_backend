var credential = require('../models/credentials');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "sjdjfasoivoiqjwso0892394019@#%@#%^wisjdfla";
module.exports =  async function signUp(req,res){
    const UserName = req.body.UserName;
    const PassWordText = req.body.Password;
    const PassWord = await bcrypt.hash(PassWordText,10);
    try{
    if(!UserName || typeof UserName!=='string'){
        return res.send({status:'error',error:'Invalid Username'});
    }
    
    const credentials = new credential({
        UserName:UserName,
        PassWord:PassWord
    });
    credentials.save().then(res=>console.log("Credentials Added")).catch((err)=>{if(err.code==11000){
        console.log('UserName already exists')
    }});
}
catch{
    res.status(400).send('not good');
}
   
}