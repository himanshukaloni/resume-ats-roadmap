import {Router} from "express"; import auth from "./authRoutes.js"; import resumes from "./resumeRoutes.js";
const r=Router();r.use("/auth",auth);r.use("/resumes",resumes);r.get("/health",(req,res)=>res.json({status:"ok",service:"resumepilot-api"}));export default r;
