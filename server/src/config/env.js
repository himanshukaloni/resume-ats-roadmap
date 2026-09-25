import dotenv from "dotenv"; dotenv.config();
const required=["MONGO_URI","JWT_SECRET"];
if(process.env.NODE_ENV==="production") for(const k of required) if(!process.env[k]) throw new Error(`Missing ${k}`);
export const env={port:Number(process.env.PORT||5000),mongoUri:process.env.MONGO_URI||"mongodb://127.0.0.1:27017/resumepilot",jwtSecret:process.env.JWT_SECRET||"dev-only-secret",jwtExpiresIn:process.env.JWT_EXPIRES_IN||"7d",clientUrl:process.env.CLIENT_URL||"http://localhost:5173",maxFileSize:Number(process.env.MAX_FILE_SIZE_MB||5)};
