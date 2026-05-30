import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Experiences from './pages/Experiences';
import Stay from './pages/Stay';
import Dining from './pages/Dining';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Book from './pages/Book';
import Gallery from './pages/Gallery';
import MyReservations from './pages/MyReservations';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from './ErrorBoundary';

import { AuthProvider } from './context/AuthContext';
import AdminProtectedRoute from './routes/AdminProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import Bookings from './admin/Bookings';
import AdminGallery from './admin/AdminGallery';
import Placeholder from './admin/Placeholder';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen font-body bg-[#0B120C] text-brand-white selection:bg-brand-gold/30 selection:text-brand-white">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            fontWeight: '600',
            padding: '16px 24px',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            fontSize: '14px',
          },
        }}
      />
      {!isAdminRoute && <Navbar />}
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/stay" element={<Home />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<Book />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="stay-zones" element={<Placeholder title="Stay Zones" />} />
              <Route path="gallery" element={<AdminGallery />} />
              <Route path="experiences" element={<Placeholder title="Experiences Management" />} />
              <Route path="settings" element={<Placeholder title="Settings" />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
