import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

export default function App(){
  return <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route element={<ProtectedRoute/>}>
      <Route element={<AppLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/analyze" element={<ResumeAnalyzer/>}/>
        <Route path="/roadmap/:id" element={<Roadmap/>}/>
        <Route path="/history" element={<History/>}/>
      </Route>
    </Route>
    <Route path="/404" element={<NotFound/>}/>
    <Route path="*" element={<Navigate to="/404" replace/>}/>
  </Routes>
}
