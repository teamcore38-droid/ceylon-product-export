import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Award, Truck, ThermometerSnowflake, Globe, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Home({ onOpenRFQ }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products?featured=true');
        if (res.data.success) {
          setProducts(res.data.data);
        }
      } catch (err) {
        // Fallback demo dataset
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="space-y-10 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-10 lg:pt-12 lg:pb-12 bg-slate-950">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3.5 py-1 rounded-full shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Sri Lanka's Premier Agricultural Export Gateway
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                PREMIUM <span className="text-amber-400 underline decoration-amber-500/40">SRI LANKAN</span> AGRICULTURAL EXPORTS.
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Direct global export supply of Sri Lanka's finest organic produce — featuring authentic <strong className="text-amber-400 font-semibold">King Coconut (Ceylon Thembili)</strong>, fresh raw <strong className="text-amber-400 font-semibold">Green Papaya</strong>, and nutrient-rich <strong className="text-amber-400 font-semibold">Tapioca Roots & Staples</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button 
                  onClick={() => onOpenRFQ()}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4" /> Request Container Quote (RFQ)
                </button>
                <Link 
                  to="/products"
                  className="bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-medium px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2 text-xs sm:text-sm"
                >
                  Explore Products Catalog <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-900 grid grid-cols-3 gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CDA & EDB Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThermometerSnowflake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Controlled Cold Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>20+ Global Ports</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1000&q=80" 
                  alt="Ceylon King Coconut Harvest" 
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Certified Sri Lankan Produce</span>
                    <span className="font-serif font-bold text-white text-base">Ceylon Harvest & Export Gateway</span>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">King Coconut • Green Papaya • Tapioca</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl font-extrabold text-amber-400">100%</span>
                    <span className="text-[10px] text-slate-400 block">Organic Quality</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPORT STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-0.5">
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-400">20+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Countries Exported</div>
          </div>
          <div className="space-y-0.5 border-l border-slate-800">
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white">50M+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Produce Metric Units</div>
          </div>
          <div className="space-y-0.5 border-l border-slate-800">
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-emerald-400">100%</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Cold Chain Guaranteed</div>
          </div>
          <div className="space-y-0.5 border-l border-slate-800">
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-400">4.9 / 5</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Importer Rating</div>
          </div>
        </div>
      </section>

      {/* THREE CORE EXPORT PRODUCT CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Export Product Portfolio</span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
              King Coconut, Green Papaya & Tapioca
            </h2>
          </div>
          <Link to="/products" className="text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center gap-1">
            View Complete Catalog <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(prod => (
            <ProductCard key={prod._id} product={prod} onOpenRFQ={onOpenRFQ} />
          ))}
        </div>
      </section>

      {/* WHY CEYLON TERROIR & QUALITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-900/60 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest">Unrivaled Quality Standard</span>
              <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Why Global Importers Choose Sri Lanka's Produce
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Sri Lanka's tropical climate, fertile reddish-brown soils, and abundant rainfall provide the ultimate natural micro-environment for organic cultivation.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Endemic King Coconut Species</h4>
                    <p className="text-[11px] text-slate-400">Naturally orange-husked cultivar with zero artificial intervention, yielding unmatched electrolyte density.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">High Papain Content Green Papaya</h4>
                    <p className="text-[11px] text-slate-400">Harvested at unripened stage with maximum enzyme activity for culinary and pharmaceutical buyers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Starch-Dense Ceylon Tapioca</h4>
                    <p className="text-[11px] text-slate-400">Clean, white-fleshed cassava tubers harvested for high dry matter yield and gluten-free applications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Badges Display */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center mx-auto text-lg">
                  🥥
                </div>
                <h4 className="font-bold text-white text-xs">CDA Certified</h4>
                <p className="text-[10px] text-slate-400">Sri Lanka Coconut Development Authority</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mx-auto text-lg">
                  🌿
                </div>
                <h4 className="font-bold text-white text-xs">USDA & EU Organic</h4>
                <p className="text-[10px] text-slate-400">Certified Pesticide-Free Farming</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center mx-auto text-lg">
                  ❄️
                </div>
                <h4 className="font-bold text-white text-xs">12°C Cold Chain</h4>
                <p className="text-[10px] text-slate-400">Reefer Container Climate Control</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mx-auto text-lg">
                  🚢
                </div>
                <h4 className="font-bold text-white text-xs">Direct Freight</h4>
                <p className="text-[10px] text-slate-400">Fast Maritime Transit from Colombo</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIRECT RFQ BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl text-center md:text-left">
            <span className="bg-slate-950 text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block">Fast Pro-Forma Quote Dispatch</span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-950">
              Ready to Import Sri Lankan Produce?
            </h2>
            <p className="text-slate-900 font-medium text-xs sm:text-sm">
              Configure container quantities, packaging preferences, and Incoterms for an instant formal export quotation.
            </p>
          </div>

          <button 
            onClick={() => onOpenRFQ()}
            className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all text-xs sm:text-sm shrink-0 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-amber-400" /> Start RFQ Quote Builder
          </button>
        </div>
      </section>

    </div>
  );
}
