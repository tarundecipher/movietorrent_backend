const mongoose = require('mongoose');

commentSchema = mongoose.Schema({
    movie_id:String,
    comment:String,
    UserName:String
});

module.exports = mongoose.model('Comments',commentSchema);