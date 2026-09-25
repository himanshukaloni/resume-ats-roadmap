import jwt from "jsonwebtoken"; import {env} from "../config/env.js";
export const signToken=id=>jwt.sign({sub:id},env.jwtSecret,{expiresIn:env.jwtExpiresIn});
export const verifyToken=t=>jwt.verify(t,env.jwtSecret);
