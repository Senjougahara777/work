import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


import Home from "./pages/Home.jsx";
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from "./components/NAvbar.jsx";
import Testimonials from './pages/Testimonials.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className=" h-2 tracking-tighter font-mono font-medium">
        <div className="">
        <Navbar/>
        </div>
        <Routes>
          <Route path="" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Gallery" Component={Gallery} />
          <Route path="/Testimonials" Component={Testimonials} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
