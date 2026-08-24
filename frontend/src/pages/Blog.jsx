import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs');
        if (res.data.success) {
          setBlogs(res.data.data);
        }
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Knowledge Hub</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
          Insights & Export Guides
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Stay informed on King Coconut nutritional research, Green Papaya papain trends, Cassava food manufacturing, and cold-chain logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors flex flex-col">
            <div className="h-44 overflow-hidden relative bg-slate-950">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-400 border border-amber-500/30">
                {blog.category}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{blog.readTime}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-1.5 leading-snug">{blog.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{blog.summary}</p>
              </div>

              <Link 
                to={`/blog/${blog.slug}`}
                className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-flex items-center gap-1 pt-1"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
