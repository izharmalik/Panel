import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./component/login";
import { Register } from "./component/register";
import { Forgot } from "./component/forgot";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
   <>
  <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
  </Routes>
   </>
  );
}

export default App;
