import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./component/login";
import { Register } from "./component/register";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
   <>
  <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
  </Routes>
   </>
  );
}

export default App;
