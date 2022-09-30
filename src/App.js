import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Cntact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="" element={} /> */}
            <Route element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
