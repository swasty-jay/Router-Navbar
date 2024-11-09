// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./contact";

// Placeholder components for pages
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Services = () => <h1>Services Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
