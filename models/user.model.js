let mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
  
    username:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
});

let user=mongoose.model("User",userSchema)
module.exports=user;