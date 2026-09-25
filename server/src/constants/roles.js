export const ROLE_SKILLS={
 "Java Backend Developer":["Java","OOP","Collections","Spring Boot","REST API","SQL","MySQL","Git","Maven","JUnit","Docker"],
 "MERN Stack Developer":["JavaScript","React","Node.js","Express.js","MongoDB","REST API","Git","JWT","Docker"],
 "Data Analyst":["Python","SQL","Excel","Power BI","Statistics","Pandas","Data Visualization"],
 "Software Developer":["Java","Python","JavaScript","DSA","OOP","SQL","Git","REST API","Testing"]
};
export function skillsForRole(role){const key=Object.keys(ROLE_SKILLS).find(k=>role.toLowerCase().includes(k.toLowerCase().replace(" developer","")));return ROLE_SKILLS[key||"Software Developer"];}
