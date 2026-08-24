import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown, ShieldCheck, FileText, PhoneCall, Sparkles } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Navbar({ onOpenRFQ }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Top Bar */}
      <div className="bg-ceylon-darkjade border-b border-emerald-950/60 text-xs py-2 px-3 sm:px-4 text-emerald-200/90 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5" /> Sri Lanka's Premier Agricultural Export Gateway
            </span>
            <span className="hidden md:inline text-emerald-600">|</span>
            <span className="hidden md:inline text-slate-300">CDA & EDB Registered Exporter</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <a href="tel:+94777285589" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-mono whitespace-nowrap">
              <PhoneCall className="w-3 h-3 text-amber-400" /> +94 77 728 5589
            </a>
            <span className="text-emerald-800">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Globe className="w-3 h-3 text-amber-400" /> Port: Colombo, LK
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-panel bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
            
            {/* Brand Logo - Responsive & Flex Shrink Safety */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
              <LogoMark className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
              <div className="min-w-0">
                <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-wider text-white block leading-none truncate">
                  CEYLON <span className="text-amber-400 font-sans font-bold">GOLD</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-emerald-400 block mt-1 truncate max-w-[180px] xs:max-w-[240px] sm:max-w-none">
                  Sri Lankan Agricultural Produce & Exports
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Single Line Strictly */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-medium text-xs lg:text-sm whitespace-nowrap">
              <Link 
                to="/" 
                className={`whitespace-nowrap transition-colors ${isActive('/') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductDropdown(true)}
                onMouseLeave={() => setIsProductDropdown(false)}
              >
                <Link 
                  to="/products" 
                  className={`flex items-center gap-1 whitespace-nowrap transition-colors ${isActive('/products') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
                >
                  Products <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
                </Link>

                {isProductDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-3 text-sm space-y-1">
                    <Link to="/products?category=King Coconut" className="block px-3 py-2.5 rounded-lg hover:bg-emerald-950/60 hover:text-amber-400 text-slate-200 transition-colors">
                      <div className="font-semibold text-white">🥥 King Coconut (Thembili)</div>
                      <div className="text-xs text-slate-400">Fresh Whole, Diamond Cut & Pure Water</div>
                    </Link>
                    <Link to="/products?category=Green Papaya" className="block px-3 py-2.5 rounded-lg hover:bg-emerald-950/60 hover:text-amber-400 text-slate-200 transition-colors">
                      <div className="font-semibold text-white">🍈 Green Papaya</div>
                      <div className="text-xs text-slate-400">Culinary Raw & Industrial Papain Grade</div>
                    </Link>
                    <Link to="/products?category=Tapioca" className="block px-3 py-2.5 rounded-lg hover:bg-emerald-950/60 hover:text-amber-400 text-slate-200 transition-colors">
                      <div className="font-semibold text-white">🍠 Tapioca (Cassava Staples)</div>
                      <div className="text-xs text-slate-400">Fresh Root, IQF Frozen & Starch</div>
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/traceability" 
                className={`whitespace-nowrap transition-colors ${isActive('/traceability') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
              >
                Traceability
              </Link>

              <Link 
                to="/certifications" 
                className={`whitespace-nowrap transition-colors ${isActive('/certifications') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
              >
                Certifications
              </Link>

              <Link 
                to="/blog" 
                className={`whitespace-nowrap transition-colors ${isActive('/blog') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
              >
                Insights Blog
              </Link>

              <Link 
                to="/contact" 
                className={`whitespace-nowrap transition-colors ${isActive('/contact') ? 'text-amber-400 font-semibold' : 'text-slate-200 hover:text-amber-400'}`}
              >
                Contact
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button 
                onClick={onOpenRFQ}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
              >
                <FileText className="w-4 h-4" /> Request Quote (RFQ)
              </button>
            </div>

            {/* Mobile Menu Button - Guaranteed Visible Right Margin */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700 shrink-0 z-20"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 space-y-3">
            <Link to="/" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Home</Link>
            <Link to="/products" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Products Catalog</Link>
            <div className="pl-4 space-y-2 border-l border-emerald-900/60">
              <Link to="/products?category=King Coconut" onClick={() => setIsMobileOpen(false)} className="block text-amber-400 text-sm font-semibold py-1">🥥 King Coconut</Link>
              <Link to="/products?category=Green Papaya" onClick={() => setIsMobileOpen(false)} className="block text-amber-400 text-sm font-semibold py-1">🍈 Green Papaya</Link>
              <Link to="/products?category=Tapioca" onClick={() => setIsMobileOpen(false)} className="block text-amber-400 text-sm font-semibold py-1">🍠 Tapioca (Cassava)</Link>
            </div>
            <Link to="/traceability" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Traceability</Link>
            <Link to="/certifications" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Certifications</Link>
            <Link to="/blog" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Insights Blog</Link>
            <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="block text-slate-200 font-medium py-2 hover:text-amber-400">Contact Us</Link>

            <button 
              onClick={() => { setIsMobileOpen(false); onOpenRFQ(); }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg mt-3 text-center"
            >
              Request for Quote (RFQ)
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
