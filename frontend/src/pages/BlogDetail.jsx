import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import axios from 'axios';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${slug}`);
        if (res.data.success) {
          setBlog(res.data.data);
        }
      } catch (err) {}
    };
    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400">
        Loading article details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
      </Link>

      <div className="space-y-4">
        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-amber-400" /> {blog.author}</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> {blog.readTime}</span>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden h-80 bg-slate-950 border border-slate-800">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line space-y-4">
        {blog.content}
      </div>
    </div>
  );
}
