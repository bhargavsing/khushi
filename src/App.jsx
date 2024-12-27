import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Open from "./components/NEWOPEN/Open";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll"; 
import Home from "./components/Home";
import About from "./components/navbar/Aboutus"; 
import "locomotive-scroll/dist/locomotive-scroll.css"; 
import Register from './components/Register'

const App = () => {
  useEffect(() => {
   
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1.0, 
    });
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div
      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
      data-scroll-container 
    >
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hey" element={<Open />} />
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
