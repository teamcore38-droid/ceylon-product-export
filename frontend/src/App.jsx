import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Traceability from './pages/Traceability';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenRFQ = (product = null) => {
    setSelectedProduct(product);
    setIsRFQOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <Navbar onOpenRFQ={() => handleOpenRFQ(null)} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/products" element={<Products onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/products/:slug" element={<ProductDetail onOpenRFQ={handleOpenRFQ} />} />
            <Route path="/traceability" element={<Traceability />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />

        {/* Persistent Floating WhatsApp Direct Connect Button */}
        <WhatsAppFloat />

        <RFQModal 
          isOpen={isRFQOpen} 
          onClose={() => setIsRFQOpen(false)} 
          defaultProduct={selectedProduct} 
        />
      </div>
    </Router>
  );
}
