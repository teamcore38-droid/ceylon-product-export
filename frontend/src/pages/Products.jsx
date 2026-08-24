import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Sparkles } from 'lucide-react';
import axios from 'axios';

export default function Products({ onOpenRFQ }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/api/products');
        if (res.data.success) {
          setProducts(res.data.data);
        }
      } catch (err) {
        // Fallback
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="space-y-2 text-center max-w-3xl mx-auto">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Export Catalog</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
          Certified Ceylon Export Produce
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Select from our flagship <strong className="text-amber-400">King Coconut (Ceylon Thembili)</strong> lines, raw <strong className="text-amber-400">Green Papaya</strong> harvest, and non-GMO <strong className="text-amber-400">Tapioca (Cassava)</strong> roots and staples.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'King Coconut', 'Green Papaya', 'Tapioca'].map(cat => (
            <button
              key={cat}
              onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat === 'King Coconut' ? '🥥 King Coconut' : cat === 'Green Papaya' ? '🍈 Green Papaya' : cat === 'Tapioca' ? '🍠 Tapioca' : '🌐 All Products'}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input 
            type="text"
            placeholder="Search products, specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(prod => (
            <ProductCard key={prod._id} product={prod} onOpenRFQ={onOpenRFQ} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-2">
          <div className="text-3xl">🔍</div>
          <h3 className="font-serif text-lg text-white font-bold">No Products Found</h3>
          <p className="text-xs text-slate-400">Try adjusting your filter or search query.</p>
        </div>
      )}

    </div>
  );
}
