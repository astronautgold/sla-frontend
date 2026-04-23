import { Route, Routes } from "react-router-dom";
import Assignment36 from "./Assignments/Assignment36/Reactrouterdom.jsx";
import Home from "./Components/Home";
import Aboutus from "./Assignments/Assignment36/Aboutus";
import Contact from "./Assignments/Assignment36/Contact.jsx";

const App = () => {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/assignment36" element={<Assignment36 />} />
  <Route path="/assignment36/about" element={<Aboutus />} />
  <Route path="/assignment36/contact" element={<Contact />} />
</Routes>
  );
};

export default App;