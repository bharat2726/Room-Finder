var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//Room Schema
var RoomSchema = mongoose.Schema({//class///comments
 name:{
   type:String
 },
 username:{
   type:String
 },
  house:{
    type:Number
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  zip:{
    type:Number
  },
  numberofrooms:{
    type:Number
  },
  gender:{
    type:String
  },
  avail:{
    type:Array
  },
  rent:{
    type:Number
  },
  contact:{
    type:String
  },
  email:{
    type:String
  }
});
var Room = module.exports=mongoose.model('Room',RoomSchema);
module.exports.createRoom=function(newRoom,callback){

        newRoom.save(callback);

}
