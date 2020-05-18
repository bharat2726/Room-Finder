var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


//user Schema
var UserSchema = mongoose.Schema({//class///myrooms---kitne rroms(id,image)////booked_rooms---book kiye//////request
  username:{
    type:String,
    index:true
  },
  password:{
    type:String
  },
  password2:{
    type:String
  },
  name:{
    type: String
  },
  email:{
    type:String
  },
  contact:{
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
  }
});

var User = module.exports=mongoose.model('User',UserSchema);

//password encryption
module.exports.createUser=function(newUser,callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password=hash;
        newUser.save(callback);
    });
});
}


module.exports.getUserByUsername=function(username,callback){
  var query={username:username};
  User.findOne(query,callback);
}

module.exports.getUserById=function(id,callback){
  User.findById(id,callback);
}


module.exports.comparePassword=function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null,isMatch);
});
}
