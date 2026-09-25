import {skillsForRole} from "../constants/roles.js";
const norm=s=>s.toLowerCase().replace(/[^a-z0-9+#. ]/g," ");
export function analyzeResume(text,targetRole){
 const t=norm(text), expected=skillsForRole(targetRole);
 const skills=expected.filter(s=>t.includes(norm(s)));
 const missingSkills=expected.filter(s=>!skills.includes(s));
 let score=35 + Math.round((skills.length/expected.length)*45);
 const structureSignals=["experience","education","skills","projects","email","phone"];
 score+=structureSignals.filter(x=>t.includes(x)).length*4;
 score=Math.min(100,score);
 const roadmap=missingSkills.slice(0,8).map((s,i)=>({title:`Build ${s}`,goal:`Become interview-ready in ${s} for ${targetRole}.`,tasks:[`Learn the core concepts of ${s}`,`Build one resume-ready mini project using ${s}`,`Add measurable evidence of ${s} to your resume`,i%2?`Practice 15 interview questions on ${s}`:`Solve 10 practical exercises in ${s}`]}));
 return {atsScore:score,skills,missingSkills,summary:`Your resume shows ${skills.length} of ${expected.length} key skills for ${targetRole}. The roadmap focuses on the highest-value gaps and evidence you can add.`,roadmap};
}
