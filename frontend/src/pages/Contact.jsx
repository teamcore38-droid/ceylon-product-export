import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'King Coconut',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/rfq', {
        companyName: formData.name + ' Inquiry',
        contactPerson: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: 'Global Inquiry',
        product: formData.product,
        quantity: 1,
        destinationPort: 'General Inquiry',
        additionalNotes: formData.message
      });
    } catch (e) {}
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Global Partnerships</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
          Contact Commercial Export Office
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          We welcome direct trade inquiries from international produce distributors, supermarket chains, and food processing brands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Address & Direct WhatsApp */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-2.5">Colombo Head Office</h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs mb-0.5">Exporter Address:</strong>
                  193 M.M. Road, Colombo 09, Sri Lanka
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs mb-0.5">Phone & WhatsApp:</strong>
                  <span className="font-mono text-emerald-400 text-xs font-bold">+94 76 004 8438</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs mb-0.5">Commercial Export Email:</strong>
                  <span className="text-amber-400">info@ceylonthembiliexports.lk</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs mb-0.5">Business Hours:</strong>
                  Monday - Saturday: 8:30 AM - 6:00 PM (IST / UTC+5:30)
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect */}
            <div className="pt-3 border-t border-slate-800">
              <a 
                href="https://wa.me/94760048438?text=Hello,%20I%20am%20interested%20in%20importing%20King%20Coconut,%20Green%20Papaya%20or%20Tapioca."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs shadow-md shadow-emerald-900/30"
              >
                <MessageSquare className="w-4 h-4" /> Quick Connect on WhatsApp (+94 76 004 8438)
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-2.5">Send Trade Inquiry</h3>

            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Inquiry Received</h4>
                <p className="text-xs text-slate-400">Thank you. Our commercial export team will respond to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number</label>
                    <input 
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Product Category Interest</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="King Coconut">King Coconut (Ceylon Thembili)</option>
                      <option value="Green Papaya">Green Papaya (Raw / Papain)</option>
                      <option value="Tapioca">Tapioca (Cassava Staples)</option>
                      <option value="Multiple Products">Multiple Produce Container</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Procurement Details *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Describe your inquiry, required container load, target port..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <Send className="w-4 h-4" /> Send Direct Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
