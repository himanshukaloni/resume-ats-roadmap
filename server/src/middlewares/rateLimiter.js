import rateLimit from "express-rate-limit";
export const authLimiter=rateLimit({windowMs:15*60*1000,max:30,standardHeaders:true,legacyHeaders:false,message:{message:"Too many authentication attempts. Try again later."}});
export const apiLimiter=rateLimit({windowMs:15*60*1000,max:120,standardHeaders:true,legacyHeaders:false});
