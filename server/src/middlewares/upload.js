import multer from "multer"; import {LIMITS} from "../constants/limits.js";
const storage=multer.memoryStorage();
const allowed=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
export const resumeUpload=multer({storage,limits:{fileSize:LIMITS.MAX_RESUME_BYTES,files:1},fileFilter:(req,file,cb)=>allowed.includes(file.mimetype)?cb(null,true):cb(new Error("Only PDF and DOCX resumes are allowed"))});
