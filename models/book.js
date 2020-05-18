var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var BookSchema = mongoose.Schema({
    owner_name:{
        type:String
    },
    owner_username:{
        type:String
    },
    user_name:{
        type:String
    },
    user_username:{
        type:String
    },
    room_id:{
        type:String
    },
    user_email:{
        type:String
    },
    user_contact:{
        type:String
    }
});

var Book = module.exports=mongoose.model('Book',BookSchema);
module.exports.createBook=function(newBook,callback){

    newBook.save(callback);

}