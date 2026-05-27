import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Experiences from './pages/Experiences';
import Stay from './pages/Stay';
import Dining from './pages/Dining';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-body bg-brand-green text-brand-white selection:bg-brand-gold/30 selection:text-brand-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/stay" element={<Home />} />
            <Route path="/dining" element={<Dining />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
