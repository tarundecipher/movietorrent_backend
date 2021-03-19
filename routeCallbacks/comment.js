const comment = require('../models/comments');


module.exports = async function comments(req,res){
    console.log(req.body);

        const comments = new comment({ movie_id:req.body.movie_id,
            comment:req.body.comment,
            UserName:req.body.payload.Username});
            comments.save();
    res.send(200);
}