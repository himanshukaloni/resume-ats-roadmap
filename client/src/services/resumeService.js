import api from "../lib/api";
export const resumeService={
 analyze:(file,role)=>{const fd=new FormData();fd.append("resume",file);if(role)fd.append("targetRole",role);return api.post("/resumes/analyze",fd,{headers:{"Content-Type":"multipart/form-data"}})},
 history:()=>api.get("/resumes/history"),
 get:(id)=>api.get(`/resumes/${id}`)
};
