import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, ThermometerSnowflake, Box, Truck, Sparkles, Scale } from 'lucide-react';
import axios from 'axios';

export default function ProductDetail({ onOpenRFQ }) {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('specs');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/products/${slug}`);
        if (res.data.success) {
          setProduct(res.data.data);
        }
      } catch (err) {
        // Fallback
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-slate-400 text-xs">
        Loading export product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center space-y-3">
        <h2 className="font-serif text-xl text-white font-bold">Product Specification Not Found</h2>
        <Link to="/products" className="text-amber-400 underline text-xs">Return to Products Catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Breadcrumb */}
      <div>
        <Link to="/products" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Products Catalog
        </Link>
      </div>

      {/* Hero Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Visual Gallery */}
        <div className="lg:col-span-5 space-y-3">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-80 relative">
            <img 
              src={product.images && product.images[0] ? product.images[0] : 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80'} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
              {product.category}
            </div>
            {product.badge && (
              <div className="absolute top-3 right-3 bg-emerald-950/90 backdrop-blur-md text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded border border-emerald-500/30">
                {product.badge}
              </div>
            )}
          </div>
        </div>

        {/* Right Info Details */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
            {product.brix && (
              <div>
                <span className="text-[11px] text-slate-400 block">Sweetness Rating</span>
                <span className="font-serif font-bold text-sm text-amber-400">{product.brix}</span>
              </div>
            )}
            <div>
              <span className="text-[11px] text-slate-400 block">Cold Chain Shelf Life</span>
              <span className="font-bold text-emerald-400 text-xs">{product.shelfLife}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Harvest Origin</span>
              <span className="font-medium text-white text-xs">{product.origin}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Temperature</span>
              <span className="font-medium text-amber-400 text-xs">{product.temperature}</span>
            </div>
          </div>

          {/* CTA Action */}
          <div>
            <button 
              onClick={() => onOpenRFQ(product)}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs"
            >
              <FileText className="w-4 h-4" /> Request Container Quote (RFQ)
            </button>
          </div>
        </div>

      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-800 flex gap-6 text-xs font-semibold">
        <button 
          onClick={() => setActiveTab('specs')}
          className={`pb-3 border-b-2 transition-colors ${activeTab === 'specs' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
        >
          Technical Specifications
        </button>
        <button 
          onClick={() => setActiveTab('nutrition')}
          className={`pb-3 border-b-2 transition-colors ${activeTab === 'nutrition' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
        >
          Nutritional & Chemical Profile
        </button>
        <button 
          onClick={() => setActiveTab('logistics')}
          className={`pb-3 border-b-2 transition-colors ${activeTab === 'logistics' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
        >
          Packaging & Reefer Container Loading
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'specs' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="font-serif font-bold text-base text-white">Physical & Quality Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.specs && product.specs.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">{item.key}:</span>
                <span className="text-amber-400 font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'nutrition' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="font-serif font-bold text-base text-white">Nutritional Breakdown & Active Bio-elements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.nutritionalHighlights && product.nutritionalHighlights.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">{item.nutrient}</span>
                  <span className="font-mono font-bold text-emerald-400">{item.amount} {item.unit}</span>
                </div>
                <p className="text-[11px] text-slate-400">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'logistics' && (
        <div className="space-y-4">
          {/* Packaging Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-400" /> Export Packaging Formats
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-amber-400 uppercase font-bold">
                  <tr>
                    <th className="px-3 py-2">Packaging Type</th>
                    <th className="px-3 py-2">Unit Capacity</th>
                    <th className="px-3 py-2">Gross Weight</th>
                    <th className="px-3 py-2">Outer Box Dimensions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {product.packaging && product.packaging.map((pack, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/50">
                      <td className="px-3 py-2 font-semibold text-white">{pack.type}</td>
                      <td className="px-3 py-2">{pack.capacity}</td>
                      <td className="px-3 py-2 text-emerald-400 font-mono font-bold">{pack.weight}</td>
                      <td className="px-3 py-2 text-slate-400">{pack.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reefer Container Capacity */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-serif font-bold text-base text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" /> Reefer Freight Container Capacities
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-emerald-400 uppercase font-bold">
                  <tr>
                    <th className="px-3 py-2">Container Type</th>
                    <th className="px-3 py-2">Carton Box Count</th>
                    <th className="px-3 py-2">Total Gross Weight</th>
                    <th className="px-3 py-2">Total Net Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {product.containerLoading && product.containerLoading.map((cont, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/50">
                      <td className="px-3 py-2 font-semibold text-white">{cont.containerType}</td>
                      <td className="px-3 py-2 font-bold text-amber-400">{cont.cartonCount}</td>
                      <td className="px-3 py-2 font-mono">{cont.grossWeight}</td>
                      <td className="px-3 py-2 font-mono">{cont.netWeight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
