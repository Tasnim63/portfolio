import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Routes>

      <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </>
  );
}

export default App;
