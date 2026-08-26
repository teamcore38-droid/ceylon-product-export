import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Users, Package, FileText, CheckCircle, Clock, AlertCircle, LogOut, Upload, Image } from 'lucide-react';
import axios from 'axios';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('admin@ceylonthembiliexports.lk');
  const [password, setPassword] = useState('admin123');
  const [loginError, setLoginError] = useState('');
  const [adminToken, setAdminToken] = useState('');
  
  const [rfqs, setRfqs] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      if (res.data.success) {
        setIsAuthenticated(true);
        setAdminToken(res.data.token);
        fetchRFQs();
        fetchProducts();
      }
    } catch (err) {
      if (email === 'admin@ceylonthembiliexports.lk' && password === 'admin123') {
        setIsAuthenticated(true);
        fetchRFQs();
        fetchProducts();
        setLoginError('The demo fallback login cannot upload images. Start the API and sign in again.');
      } else {
        setLoginError('Invalid credentials. Demo admin: admin@ceylonthembiliexports.lk / admin123');
      }
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      if (res.data.success) {
        setProducts(res.data.data);
        setSelectedProductId(current => current || res.data.data[0]?._id || '');
      }
    } catch (err) {
      setUploadError('Unable to load products for image management.');
    }
  };

  const uploadProductImage = async (e) => {
    e.preventDefault();
    if (!selectedProductId || !selectedImage) return;

    setUploadingImage(true);
    setUploadMessage('');
    setUploadError('');
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const res = await axios.post(`/api/upload/products/${selectedProductId}/image`, formData, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      if (res.data.success) {
        setProducts(current => current.map(product => product._id === selectedProductId ? res.data.data.product : product));
        setSelectedImage(null);
        e.target.reset();
        setUploadMessage('Image uploaded to Cloudinary and added to the product.');
      }
    } catch (err) {
      setUploadError(err.response?.data?.message || 'Image upload failed.');
    } finally {
      setUploadingImage(false);
    }
  };

  const fetchRFQs = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/rfq');
      if (res.data.success) {
        setRfqs(res.data.data);
      }
    } catch (err) {
      // Fallback demo list
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`/api/rfq/${id}`, { status: newStatus });
      setRfqs(rfqs.map(r => r._id === id ? { ...r, status: newStatus } : r));
    } catch (err) {
      setRfqs(rfqs.map(r => r._id === id ? { ...r, status: newStatus } : r));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-2xl flex items-center justify-center mx-auto text-xl">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-white">Back-Office Admin CRM</h2>
            <p className="text-xs text-slate-400">Export Lead & Quotation Management Portal</p>
          </div>

          {loginError && (
            <div className="bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs p-3 rounded-xl">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Admin Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg transition-all text-xs"
            >
              Sign In to Admin Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredRFQs = filterStatus === 'All' ? rfqs : rfqs.filter(r => r.status === filterStatus);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Executive Dashboard</span>
          <h1 className="font-serif font-extrabold text-3xl text-white mt-1">
            B2B RFQ Lead Management CRM
          </h1>
        </div>

        <button 
          onClick={() => setIsAuthenticated(false)}
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
        >
          <LogOut className="w-4 h-4 text-rose-400" /> Sign Out
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs text-slate-400 font-medium block">Total Leads / RFQs</span>
          <span className="font-serif font-bold text-3xl text-white mt-1 block">{rfqs.length}</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs text-slate-400 font-medium block">New Leads</span>
          <span className="font-serif font-bold text-3xl text-amber-400 mt-1 block">
            {rfqs.filter(r => r.status === 'New Lead').length}
          </span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs text-slate-400 font-medium block">Under Review</span>
          <span className="font-serif font-bold text-3xl text-emerald-400 mt-1 block">
            {rfqs.filter(r => r.status === 'Under Review').length}
          </span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs text-slate-400 font-medium block">Quoted / Won</span>
          <span className="font-serif font-bold text-3xl text-amber-400 mt-1 block">
            {rfqs.filter(r => r.status === 'Quoted' || r.status === 'Closed Won').length}
          </span>
        </div>
      </div>

      {/* Product Image Manager */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <Image className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-white">Product Image Manager</h3>
            <p className="text-xs text-slate-400">Upload product images directly to Cloudinary.</p>
          </div>
        </div>

        {uploadMessage && <div className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs p-3 rounded-xl">{uploadMessage}</div>}
        {uploadError && <div className="bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs p-3 rounded-xl">{uploadError}</div>}

        <form onSubmit={uploadProductImage} className="flex flex-col md:flex-row items-end gap-4">
          <div className="w-full md:flex-1">
            <label className="block text-xs font-semibold text-slate-300 mb-1">Product</label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              <option value="">Select a product</option>
              {products.map(product => <option key={product._id} value={product._id}>{product.name}</option>)}
            </select>
          </div>
          <div className="w-full md:flex-1">
            <label className="block text-xs font-semibold text-slate-300 mb-1">Image (max 5 MB)</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 file:mr-3 file:border-0 file:bg-slate-800 file:text-amber-400 file:px-2 file:py-1 file:rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={uploadingImage || !adminToken}
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" /> {uploadingImage ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>

        {products.length > 0 && selectedProductId && (
          <p className="text-[11px] text-slate-500">Current images: {products.find(product => product._id === selectedProductId)?.images?.length || 0}. New uploads are appended to the product gallery.</p>
        )}
      </div>

      {/* Table & Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <h3 className="font-serif font-bold text-lg text-white">Submitted Quote Requests</h3>
          
          <div className="flex gap-2">
            {['All', 'New Lead', 'Under Review', 'Quoted'].map(st => (
              <button 
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  filterStatus === st ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* RFQ List Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold">
              <tr>
                <th className="px-4 py-3">Company & Contact</th>
                <th className="px-4 py-3">Product Category</th>
                <th className="px-4 py-3">Quantity & Container</th>
                <th className="px-4 py-3">Destination Port</th>
                <th className="px-4 py-3">Pipeline Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {filteredRFQs.map(rfq => (
                <tr key={rfq._id} className="hover:bg-slate-950/50">
                  <td className="px-4 py-3">
                    <div className="font-bold text-white text-sm">{rfq.companyName}</div>
                    <div className="text-slate-400">{rfq.contactPerson} ({rfq.email})</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-emerald-950 text-emerald-300 font-semibold px-2.5 py-1 rounded-md text-[11px] border border-emerald-500/30">
                      {rfq.product}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-amber-400 font-bold">
                    {rfq.quantity} x {rfq.unit}
                  </td>
                  <td className="px-4 py-3 text-slate-300">{rfq.destinationPort}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-md font-bold text-[10px] ${
                      rfq.status === 'New Lead' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                      rfq.status === 'Under Review' ? 'bg-blue-950 text-blue-300 border border-blue-500/30' :
                      'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {rfq.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select 
                      value={rfq.status}
                      onChange={(e) => updateStatus(rfq._id, e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="New Lead">New Lead</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Closed Won">Closed Won</option>
                      <option value="Closed Lost">Closed Lost</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
