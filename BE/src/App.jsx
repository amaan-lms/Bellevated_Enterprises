import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import Contact from "./pages/Contact";
import RequestQuote from "./pages/RequestQuote";
import DriverOpportunities from "./pages/DriverOpportunities";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import React from "react";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/driver-opportunities" element={<DriverOpportunities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
