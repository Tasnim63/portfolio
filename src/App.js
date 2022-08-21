import { Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import Navbar from "./components/Navbar/Navbar";
import Abouts from "./pages/about/Abouts";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
function App() {
  AOS.init();
  return (
    <>
    
     <Navbar></Navbar>
     <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<Abouts></Abouts>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
    </>
  );
}

export default App;
