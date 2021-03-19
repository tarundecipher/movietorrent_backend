const comments = require('../models/comments');

module.exports = async function getComments(req,res){
    
    const movie_id = req.params.id;
    let comment;
    await comments.find({movie_id:movie_id},(err,obj)=>{
        comment = obj
    });
    
    res.send({comments:comment});
}