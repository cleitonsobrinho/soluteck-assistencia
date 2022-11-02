import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Login from "./pages/Login";



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
