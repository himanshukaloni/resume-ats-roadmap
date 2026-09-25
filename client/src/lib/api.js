import axios from "axios";
const api = axios.create({baseURL:import.meta.env.VITE_API_URL || "http://localhost:5000/api"});
api.interceptors.request.use(config=>{
  const token=localStorage.getItem("rp_token");
  if(token) config.headers.Authorization=`Bearer ${token}`;
  return config;
});
api.interceptors.response.use(r=>r,e=>{
  if(e.response?.status===401){localStorage.removeItem("rp_token"); localStorage.removeItem("rp_user");}
  return Promise.reject(e);
});
export default api;
