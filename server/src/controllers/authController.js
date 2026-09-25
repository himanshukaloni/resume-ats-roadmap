import {register,login} from "../services/authService.js"; import {publicUser} from "../utils/sanitize.js";
export async function registerController(req,res){const r=await register(req.body);res.status(201).json({user:publicUser(r.user),token:r.token})}
export async function loginController(req,res){const r=await login(req.body);res.json({user:publicUser(r.user),token:r.token})}
export function meController(req,res){res.json({user:publicUser(req.user)})}
