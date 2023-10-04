import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";




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
