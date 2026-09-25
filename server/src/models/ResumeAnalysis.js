import mongoose from "mongoose";
const roadmapSchema=new mongoose.Schema({title:String,goal:String,tasks:[String]},{_id:false});
const schema=new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},
 fileName:String,targetRole:{type:String,default:"Software Developer"},atsScore:{type:Number,min:0,max:100},
 summary:String,skills:[String],missingSkills:[String],roadmap:[roadmapSchema],rawTextLength:Number
},{timestamps:true});
export default mongoose.model("ResumeAnalysis",schema);
