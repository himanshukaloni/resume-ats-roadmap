import mongoose from "mongoose";
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true,maxLength:80},email:{type:String,required:true,unique:true,lowercase:true,trim:true,index:true},passwordHash:{type:String,required:true},role:{type:String,enum:["user","admin"],default:"user"}},{timestamps:true});
export default mongoose.model("User",schema);
