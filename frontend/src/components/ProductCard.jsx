import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ProductCard({ product, onOpenRFQ }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-slate-950">
        <img 
          src={product.images && product.images[0] ? product.images[0] : 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80'} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-amber-400 border border-amber-500/30 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> {product.category}
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-emerald-950/90 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/30">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif font-bold text-xl text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>

        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Quick Highlights */}
        <div className="space-y-2 mb-6 text-xs text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
          {product.brix && (
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Sweetness Index:</span>
              <span className="font-bold text-amber-400">{product.brix}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Cold Chain Shelf Life:</span>
            <span className="font-semibold text-emerald-400 text-[11px]">{product.shelfLife}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center gap-2">
          <Link 
            to={`/products/${product.slug}`}
            className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            View Details <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
          <button 
            onClick={() => onOpenRFQ(product)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg transition-all shrink-0"
          >
            RFQ Quote
          </button>
        </div>
      </div>
    </div>
  );
}
