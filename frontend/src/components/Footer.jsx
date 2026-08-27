import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Globe } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-12 h-12" />
              <span className="font-serif font-extrabold text-2xl tracking-wider text-white">
                CEYLON <span className="text-amber-400 font-sans font-bold">GOLD</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier Sri Lankan exporter of certified agricultural produce — featuring authentic <strong className="text-amber-400">King Coconut (Ceylon Thembili)</strong>, organic <strong className="text-amber-400">Green Papaya</strong>, and fresh <strong className="text-amber-400">Tapioca (Cassava)</strong> staples. Connecting global food distributors, supermarket chains, and beverage brands to Sri Lanka's pristine agricultural terroir.
            </p>
            
            <div className="flex items-center gap-3 pt-2 text-xs text-emerald-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> CDA Registered Exporter</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> EDB Certified</span>
            </div>
          </div>

          {/* Export Products */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-emerald-900/60 pb-2">Export Products</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/products?category=King Coconut" className="hover:text-amber-400 transition-colors">Fresh Whole King Coconut</Link></li>
              <li><Link to="/products?category=King Coconut" className="hover:text-amber-400 transition-colors">Diamond Cut Trimmed Nut</Link></li>
              <li><Link to="/products?category=King Coconut" className="hover:text-amber-400 transition-colors">Bottled 100% Pure King Water</Link></li>
              <li><Link to="/products?category=Green Papaya" className="hover:text-amber-400 transition-colors">Fresh Raw Green Papaya</Link></li>
              <li><Link to="/products?category=Green Papaya" className="hover:text-amber-400 transition-colors">Industrial Papain Grade Papaya</Link></li>
              <li><Link to="/products?category=Tapioca" className="hover:text-amber-400 transition-colors">Fresh Whole Tapioca Roots</Link></li>
              <li><Link to="/products?category=Tapioca" className="hover:text-amber-400 transition-colors">IQF Frozen Peeled Cassava</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-emerald-900/60 pb-2">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Product Catalog</Link></li>
              <li><Link to="/traceability" className="hover:text-amber-400 transition-colors">Cold-Chain Traceability</Link></li>
              <li><Link to="/certifications" className="hover:text-amber-400 transition-colors">Certifications & Standards</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Insights Blog</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Head Office</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-emerald-900/60 pb-2">Head Office</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>193 M.M. Road, Colombo 09, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-white">+94 76 004 8438</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-amber-400">info@ceylonthembiliexports.lk</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900">
              <span className="text-xs text-slate-500 block mb-2">Subscribe to Export Updates</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="bg-slate-900 border border-slate-800 rounded-l-lg text-xs px-3 py-2 w-full focus:outline-none focus:border-amber-400 text-white"
                />
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 rounded-r-lg font-bold">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ceylon Gold Exports Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Terms of Trade</span>
            <span>Privacy Policy</span>
            <span>Phytosanitary Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
