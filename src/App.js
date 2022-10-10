// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/auth/login";
import ForgetPassword from "./pages/auth/forgetpassword";
import Dashboard from "./dashboard";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      {/* <h1 className='text-center font-bold text-blue-900'>Kay Araba</h1> */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/forget-password' element={<ForgetPassword/>}></Route>
        <Route path='/dashboard/*' element={<Dashboard/>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
