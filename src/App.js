import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
          <div>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
