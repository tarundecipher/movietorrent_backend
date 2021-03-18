

module.exports = function logout(req,res){
    
    
  
        res.cookie('jwt','a',{maxAge:1});
        res.send('done');
        
    
}