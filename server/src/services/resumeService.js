import ResumeAnalysis from "../models/ResumeAnalysis.js"; import {extractResumeText} from "./documentParser.js"; import {analyzeResume} from "./atsService.js";
export async function analyzeAndSave({user,file,targetRole}){const text=await extractResumeText(file);if(text.trim().length<80)throw Object.assign(new Error("Could not extract enough readable text from the resume"),{status:422});const result=analyzeResume(text,targetRole);return ResumeAnalysis.create({user:user._id,fileName:file.originalname,targetRole,rawTextLength:text.length,...result})}
export const history=user=>ResumeAnalysis.find({user:user._id}).sort({createdAt:-1}).select("-__v");
export const getOne=(user,id)=>ResumeAnalysis.findOne({_id:id,user:user._id}).select("-__v");
