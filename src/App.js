// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/auth/login";
import ForgetPassword from "./pages/auth/forgetpassword";
import AppIdle from './components/idle';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import Dashboard from "./dashboard";
import AdminDashboard from "./admin-dashboard";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ResetPassword from "./pages/auth/resetpassword";


function App() {

  const queryClient = new QueryClient()


  useEffect(()=> {
    window.onload = function() {
      AppIdle()
    }
  },[]);

  return (
    <div className='App'>
      <QueryClientProvider>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/forget-password' element={<ForgetPassword/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        {/* <Route path='/dashboard/*' element={<Dashboard/>}></Route> */}
        <Route path='/admin-dashboard/*' element={<AdminDashboard/>}></Route>
      </Routes>
      <Toaster />
        </QueryClientProvider>     
         {/* <h1 className='text-center font-bold text-blue-900'>Kay Araba</h1> */}
    </div>
  );
}

export default App;
