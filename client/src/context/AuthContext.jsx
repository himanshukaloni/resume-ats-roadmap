import {createContext,useContext,useEffect,useState} from "react";
import api from "../lib/api";
const AuthContext=createContext(null);
export function AuthProvider({children}){
 const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem("rp_user")||"null"));
 const [loading,setLoading]=useState(true);
 useEffect(()=>{api.get("/auth/me").then(r=>setUser(r.data.user)).catch(()=>{}).finally(()=>setLoading(false))},[]);
 const login=async(data)=>{const r=await api.post("/auth/login",data);localStorage.setItem("rp_token",r.data.token);localStorage.setItem("rp_user",JSON.stringify(r.data.user));setUser(r.data.user);return r.data};
 const register=async(data)=>{const r=await api.post("/auth/register",data);localStorage.setItem("rp_token",r.data.token);localStorage.setItem("rp_user",JSON.stringify(r.data.user));setUser(r.data.user);return r.data};
 const logout=()=>{localStorage.clear();setUser(null)};
 return <AuthContext.Provider value={{user,loading,login,register,logout}}>{children}</AuthContext.Provider>
}
export const useAuth=()=>useContext(AuthContext);
