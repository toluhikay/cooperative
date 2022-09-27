// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='App'>
      {/* <h1 className='text-center font-bold text-blue-900'>Kay Araba</h1> */}
      <Login />
      <Toaster />
    </div>
  );
}

export default App;
