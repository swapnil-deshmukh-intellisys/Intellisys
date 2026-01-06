import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from './navigation/Footer';
import Home from "./components/Home";
import Contact from './components/Contact';
import Technology from './components/Technology';
import About from './components/About';
import Career from './components/Career';
import Website from './components/Website';
import Mobile from './components/Mobile';
import UIUX from './components/UIUX';
import Softwaretesting from './components/Softwaretesting';
import Cloud from './components/Cloud';
import Cyber from './components/Cyber';
import Fullstackdevelopment from './components/Fullstackdevelopment';
import ScrollToTop from "./navigation/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/technology" element={<Technology/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/webapp" element={<Website/>}/>
          <Route path="/mobileapp" element={<Mobile/>}/>
          <Route path="/uiux" element={<UIUX/>}/>
          <Route path="/softwaretesting" element={<Softwaretesting/>}/>
          <Route path="/cloud" element={<Cloud/>}/>
          <Route path="/cyber" element={<Cyber/>}/>
          <Route path="/fullstackdevelopment" element={<Fullstackdevelopment/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;