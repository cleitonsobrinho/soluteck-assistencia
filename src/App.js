import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>


  );
}

export default App;
