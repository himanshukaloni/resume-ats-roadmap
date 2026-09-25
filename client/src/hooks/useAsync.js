import {useState,useCallback} from "react";
export default function useAsync(fn){
 const [loading,setLoading]=useState(false),[error,setError]=useState("");
 const execute=useCallback(async(...args)=>{setLoading(true);setError("");try{return await fn(...args)}catch(e){setError(e.response?.data?.message||e.message);throw e}finally{setLoading(false)}},[fn]);
 return {execute,loading,error};
}
