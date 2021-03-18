var mongoose = require('mongoose');

const credentialSchema = mongoose.Schema({
    UserName: {type:String,unique:true,required:true},
    PassWord: {type:String,required:true}
});

module.exports = mongoose.model("Credentials",credentialSchema);