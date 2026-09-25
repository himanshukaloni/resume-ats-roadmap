import {analyzeAndSave,history,getOne} from "../services/resumeService.js";
export async function analyzeController(req,res){if(!req.file)return res.status(400).json({message:"Resume file is required"});const analysis=await analyzeAndSave({user:req.user,file:req.file,targetRole:req.body.targetRole||"Software Developer"});res.status(201).json({analysis})}
export async function historyController(req,res){res.json({analyses:await history(req.user)})}
export async function getController(req,res){const analysis=await getOne(req.user,req.params.id);if(!analysis)return res.status(404).json({message:"Analysis not found"});res.json({analysis})}
