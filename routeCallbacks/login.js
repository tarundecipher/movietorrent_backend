var credential = require('../models/credentials');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "sjdjfasoivoiqjwso0892394019@#%@#%^wisjdfla";


module.exports =  async function login(req,res){
    const UserName = req.body.UserName;
    const PassWordText = req.body.Password;
    let User;
    await credential.findOne({UserName:UserName},(err,obj)=>{
        User = obj;
    }).lean();
    
    
    if(await bcrypt.compare(PassWordText,User.PassWord)){
        const token = jwt.sign({id:User._id,Username:User.UserName},JWT_SECRET);
        
        res.cookie('jwt',token);
        res.send('done');
        
    }
    else{
    
        res.send({status:"error2",detail:"UserName/PassWord does not match"});
        return ;
    }
    
}